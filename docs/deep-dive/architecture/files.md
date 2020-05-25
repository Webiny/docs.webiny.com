---
id: file-service
title: Webiny File Service Architecture
sidebar_label: File Service
---

## File Service Architecture Graph
[![Webiny Serverless CMS - Architecture - File Service](/img/deep-dive/architecture/webiny-architecture-file-service.png)](/img/deep-dive/architecture/webiny-architecture-file-service.png)

The File service is responsible for handling file uploads, file downloads, resizing images, and file delete events.

> The [File Manager](/docs/webiny-apps/file-manager/getting-started) app is a good example of an app that relies on the File Service.

## Components
- A - **CloudFront web distribution**
- B - **APIGateway**
- C - **Apollo Gateway service**
- D - **File service**
- E - **S3 file storage**
- F - **File download service**
- G - **Image resize service**
- H - **"Manage files" Lambda function**

## Request Flows

### A) File upload

1. Client makes a POST request with the file metadata to the [API](/docs/deep-dive/architecture/api).

    > The client never sends the full file body to the GraphQL endpoint as a Lambda function can't handle large files.

2. The request goes through the **(A) CloudFront** to the **(B) ApiGateway** and then hits the **(C) Apollo Gateway** where the **(D) File service** takes over the request.

3. The **(D) File service** uses the file metadata to generate the pre-signed POST data.
    > To learn in detail more about this whole process, checkout our blog post on how to [Upload files to AWS S3 using pre-signed POST data and a Lambda function](https://blog.webiny.com/upload-files-to-aws-s3-using-pre-signed-post-data-and-a-lambda-function-7a9fb06d56c1).

4. The **(C) File service** responds with the pre-signed POST data.

5. Finally, the Client makes a POST request to the **(E) S3 file storage**, which includes the received pre-signed POST data, and the actual file that needs to be uploaded.
    > This way the client uploads files directly to S3, while still keeping the security around who can upload what types of files.
    > This approach also enables you to turn on [S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) feature for faster upload.


### B) File download
1. Client requests a file that was previously uploaded.

2. The request goes through the **(A) CloudFront**, and if it's not found in the CDN cache, the request goes to the **(B) ApiGateway** and then hits the **(F) File download service**.

    - **(F) File download service** is a special lightweight function for serving files back to the client.

    > If the file is larger than 6MB, the **(F) File download service** will return a 301 redirect with a path to the object on S3 bucket and it will make the object public. This is to get around the Lambda [invocation payload limits](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).

### C) Request for an image

1. If the request is for an image for a specific image size, the **(F) File download service** will pass on the request to **(G) Image resize service**.

2. **(G) Image resize service** resizes the image and saves the specific image to the **(E) S3 file storage**. 
    - To protect agains brute-force attacks, Webiny has a fixed set of image sizes.
    - In case you request an image of 282px, Webiny will return the first greater image size.

3. The image is returned to the client, by passing it to the **(A) CloudFront** CDN, where it's also cached.

### D) File deleted

1. For file deletions, the delete action is first issued as a GraphQL mutation, which is processed by the **(F) File download service**.

2. The **(F) File download service** only deletes the original file from the S3 bucket, even if the file is an image, in which case multiple image sizes still might exist. 

3. The deletion of the original file will emit an event, on which the **(H) "Manage files" Lambda function** will be invoked. In case the originally deleted file was an image, it will commence the deletion of the additional image sizes that might've been requested over the course of the file's existence. 
