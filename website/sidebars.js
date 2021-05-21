module.exports = {
    docs: [
        "introduction",
        {
            "Webiny Overview": [
                "webiny-overview/intro",
                {
                    type: "category",
                    label: "Performance Benchmark",
                    items: [
                        "webiny-overview/performance-benchmark/introduction",
                        "webiny-overview/performance-benchmark/headless-cms-write-benchmark",
                        "webiny-overview/performance-benchmark/headless-cms-read-benchmark",
                        "webiny-overview/performance-benchmark/pb-deliver-a-page"
                    ]
                },
                {
                    type: "category",
                    label: "Serverless CMS",
                    items: [
                        {
                            type: "category",
                            label: "Apps",
                            items: [
                                "webiny-overview/serverless-cms/apps/intro",
                                "webiny-overview/serverless-cms/apps/headless-cms",
                                "webiny-overview/serverless-cms/apps/page-builder",
                                "webiny-overview/serverless-cms/apps/form-builder",
                                "webiny-overview/serverless-cms/apps/file-manager"
                            ]
                        }
                    ]
                },
                "webiny-overview/security"
            ],
            Tutorials: [
                "tutorials/install-webiny",
                {
                    type: "category",
                    label: "Create An Application",
                    items: [
                        "tutorials/create-an-application/introduction",
                        "tutorials/create-an-application/api-package",
                        "tutorials/create-an-application/admin-area-package"
                    ]
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "tutorials/headless-cms/create-a-webiny-headless-cms-address-field-plugin"
                    ]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: [
                        "tutorials/page-builder/create-a-new-page-builder-element",
                        "tutorials/page-builder/customize-an-existing-page-builder-element"
                    ]
                },
                {
                    type: "category",
                    label: "Webiny CLI",
                    items: ["tutorials/webiny-cli/adding-custom-commands"]
                },
                "tutorials/create-a-package-in-webiny-project"
            ],
            "How-to Guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "how-to-guides/deployment/deploy-your-project",
                        "how-to-guides/deployment/destroy-cloud-infrastructure",
                        "how-to-guides/deployment/preview-deployments",
                        "how-to-guides/deployment/execute-pulumi-commands",
                        {
                            type: "category",
                            label: "AWS",
                            items: [
                                "how-to-guides/deployment/aws/configure-aws-credentials",
                                "how-to-guides/deployment/aws/use-aws-profiles"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Development",
                    items: [
                        {
                            type: "category",
                            label: "Integrations",
                            items: ["how-to-guides/development/integrations/integrate-tailwindcss"]
                        },
                        "how-to-guides/development/use-watch-command",
                        "how-to-guides/development/environment-variables"
                        /* {
                            type: "category",
                            label: "Workflows",
                            items: [
                                "how-to-guides/ci-cd/introduction",
                                // "how-to-guides/ci-cd/developing-serverless-applications",
                                "how-to-guides/ci-cd/cloud-infrastructure-state-files",
                                // "how-to-guides/ci-cd/ci-cd",
                                "how-to-guides/ci-cd/environments",
                                "how-to-guides/ci-cd/version-control"
                            ]
                        }*/
                    ]
                },
                {
                    type: "category",
                    label: "Webiny Applications",
                    items: [
                        {
                            type: "category",
                            label: "Headless CMS",
                            items: [
                                "how-to-guides/webiny-applications/headless-cms/create-a-webiny-headless-cms-field-plugin",
                                "how-to-guides/webiny-applications/headless-cms/create-a-content-model-form-layout",
                                "how-to-guides/webiny-applications/headless-cms/using-graphql-api",
                                "how-to-guides/webiny-applications/headless-cms/rendering-rich-text"
                            ]
                        },
                        {
                            type: "category",
                            label: "Themes",
                            items: [
                                "how-to-guides/webiny-applications/themes/introduction",
                                {
                                    type: "category",
                                    label: "Page Builder",
                                    items: [
                                        "how-to-guides/webiny-applications/themes/page-builder/introduction",
                                        "how-to-guides/webiny-applications/themes/page-builder/colors",
                                        "how-to-guides/webiny-applications/themes/page-builder/elements",
                                        "how-to-guides/webiny-applications/themes/page-builder/layouts"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "Form Builder",
                                    items: [
                                        "how-to-guides/webiny-applications/themes/form-builder/introduction",
                                        "how-to-guides/webiny-applications/themes/form-builder/layouts"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Webiny CLI",
                    items: ["how-to-guides/webiny-cli/working-with-workspaces"]
                },
                {
                    type: "category",
                    label: "Upgrade Webiny",
                    items: [
                        "how-to-guides/upgrade-webiny/overview",
                        "how-to-guides/upgrade-webiny/5.7.0-to-5.8.0",
                        "how-to-guides/upgrade-webiny/5.5.0-to-5.6.0",
                        "how-to-guides/upgrade-webiny/5.4.0-to-5.5.0",
                        "how-to-guides/upgrade-webiny/5.3.0-to-5.4.0",
                        "how-to-guides/upgrade-webiny/5.0.0-to-5.1.0",
                        "how-to-guides/upgrade-webiny/5.0.0-beta.4-to-5.0.0"
                    ]
                }
            ],
            "Key Topics": [
                {
                    type: "category",
                    label: "Project Organization",
                    items: [
                        "key-topics/project-organization/project-applications-and-packages",
                        "key-topics/project-organization/project-applications",
                        "key-topics/project-organization/monorepo-organization"
                    ]
                },
                {
                    type: "category",
                    label: "Webiny Applications",
                    items: [
                        {
                            type: "category",
                            label: "Headless CMS",
                            items: ["key-topics/webiny-applications/headless-cms/graphql-api"]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "key-topics/deployment/introduction",
                        "key-topics/deployment/iac-with-pulumi",
                        "key-topics/deployment/environments"
                    ]
                },
                /*{
                    type: "category",
                    label: "Page Builder",
                    items: ["key-topics/page-builder/prerendering-pages"]
                },*/
                {
                    type: "category",
                    label: "Cloud Infrastructure",
                    items: [
                        "key-topics/cloud-infrastructure/introduction",
                        {
                            type: "category",
                            label: "API",
                            items: [
                                "key-topics/cloud-infrastructure/api/introduction",
                                "key-topics/cloud-infrastructure/api/overview",
                                "key-topics/cloud-infrastructure/api/graphql-requests",
                                "key-topics/cloud-infrastructure/api/file-upload",
                                "key-topics/cloud-infrastructure/api/file-download",
                                "key-topics/cloud-infrastructure/api/overview-vpc-default",
                                "key-topics/cloud-infrastructure/api/overview-vpc-custom"
                            ]
                        },
                        {
                            type: "category",
                            label: "Admin Area",
                            items: [
                                "key-topics/cloud-infrastructure/admin/introduction",
                                "key-topics/cloud-infrastructure/admin/overview",
                                "key-topics/cloud-infrastructure/admin/serving-application-files"
                            ]
                        },
                        {
                            type: "category",
                            label: "Website",
                            items: [
                                "key-topics/cloud-infrastructure/website/introduction",
                                "key-topics/cloud-infrastructure/website/overview",
                                "key-topics/cloud-infrastructure/website/prerendering-pages",
                                "key-topics/cloud-infrastructure/website/serving-pages"
                            ]
                        }
                    ]
                },
                "key-topics/tools-libraries",
                "key-topics/multi-tenancy",
                {
                    type: "category",
                    label: "Security Framework",
                    items: [
                        "key-topics/security-framework/introduction",
                        "key-topics/security-framework/api-security",
                        "key-topics/security-framework/react-security"
                    ]
                },
                "key-topics/ci-cd",
                "key-topics/webiny-cli"
            ],
            References: [
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["references/headless-cms/plugins"]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: ["references/page-builder/plugins"]
                },
                {
                    type: "category",
                    label: "Form Builder",
                    items: ["references/form-builder/plugins"]
                }
            ]
        },
        {
            Contributing: ["contributing/documentation", "contributing/new-page-template"]
        },
        {
            Changelog: ["changelog/5.6.0", "changelog/5.5.0", "changelog/5.4.0", "changelog/5.3.0"]
        },
        "webiny-telemetry"
    ]
};
