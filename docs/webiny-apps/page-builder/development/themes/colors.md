---
id: colors
title: Page Builder Theme - Colors
sidebar_label: Colors
---

To ensure a visual consistency between the theme and users creating content, the colors used throughout the theme and Page Builder pages, they are extracted as variables and presented as color presets in the page editor.

![Webiny - Theme Colors](/img/theme-development/webiny-theme-colors.gif)

## Color definition

Colors are defined in the `color` section of the `pb-theme` plugin. As a general practice, don't define HEX or RGB colors directly, but reference them as a CSS variable, like the following example:

```json
{
  "colors": {
    primary: "var(--webiny-theme-color-primary)",
    secondary: "var(--webiny-theme-color-secondary)",
    background: "var(--webiny-theme-color-background)",
    surface: "var(--webiny-theme-color-surface)",
    textPrimary: "var(--webiny-theme-color-text-primary)"
  }
}
```

> **Note:** The reason why defining them as CSS variable is important is that when you select a color in page builder for a certain element property, be that background-color, border color or shadow, the value of the color is stored in the database. In case of CSS variables, the CSS variable is stored, meaning that if you later decide to change the value of that color, you just change it in your CSS file, and all the existing content will pick up the new value - which won't be the case when if we storred HEX or RGB values.

You can add as many colors as you want, and name them whatever best fits your requirements. Make sure to have the actual color definitions somewhere inside your theme stylesheet.

We also recommend that all the color variables have a prefix `--webiny-theme-color-{name}`. The reason for this is that your site theme and its stylesheets are imported into the Page Builder inside the admin interface. Using this prefix we ensure that there are no clashes between the style names of your site and Webiny administration.

The reason why we import the site theme into the administration is that inside the Page Builder we want to show you how your page will actually look like when a user is browsing your site, and that is only possible if we have the same stylesheets as your site.

## SaaS variables

Webiny themes use Sass variables, and all the colors are also mapped to CSS variables for ease of use and to enable better [style inheritance](/docs/webiny-apps/page-builder/theme-development/style-inheritance). If you open the [variables.scss](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder-theme/src/styles/variables.scss) file you'll find the default definitions inside.
