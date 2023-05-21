---
sidebar_position: 3
---

# Customize

Customizing Tailwind CSS with Config File **tailwind.config.cjs**.

---

This is a **Tailwind CSS configuration file** written in CommonJS format. It exports an object with several properties to customize the Tailwind CSS styling.

    divzone-nextjs-theme/
    ├── tailwind.config.cjs

The content property specifies the files that Tailwind should scan to find CSS classes used in the project. Here, it is set to scan all .js, .ts, .jsx, and .tsx files in the ./src directory and the ./index.html file.
The theme property contains the customizations for the theme. The extend property is used to extend the default theme. Here, it adds custom colors, background images, and font families.

Under the colors property, there are custom color names and their corresponding hex codes. For example, `gray-600` is a custom name for the hex color code #a299b9.
The backgroundImage property is used to add custom background images. Here, it defines one background images: `mobile-home`. The `mobile-home` background is an image located in the ./assets directory.

The fontFamily property adds custom font families. Here, it adds two font families: `DM Sans` and `Montserrat`, both of which are sans-serif fonts.
The content property adds custom content. Here, it defines custom backgrounds and images for specific classes.

The screens property adds custom breakpoints. Here, it adds three breakpoints with their corresponding screen sizes: `xs` for 480px, `sm` for 768px, and `md` for 1060px.

Finally, the plugins property is an array of Tailwind CSS plugins to use. Here, it is left empty.
Overall, this configuration file shows how to customize Tailwind CSS to fit the needs of a specific project by adding custom colors, fonts, backgrounds, and more.
