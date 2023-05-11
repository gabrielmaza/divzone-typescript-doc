---
sidebar_position: 2
---

# Organize files

Learn how the **files are organized**.

---

The arrangement below describes our **file structure**.

    divzone-typescript/
    └── src
        ├── assets
        |   └── svg
        ├── components
        |   ├── benefits
        |   ├── contact-us
        |   ├── footer
        |   ├── main
        |   ├── nav-bar
        |   └── services
        ├── hooks
        ├── pages
        └── shared

The **divzone-typescript** folder contains the source code for your landing page template. Inside the src folder, you'll find several subfolders that organize the different parts of your template:

## assets

The assets folder contains all the images, icons, and other media used in your template, including a subfolder called svg for SVG files.

## components

The components folder contains reusable UI components that make up the main sections of your landing page, such as benefits, contact-us, footer, main, nav-bar, and services. Each component is designed to be modular and easy to customize.

## hooks

The hooks folder contains custom React hooks that provide additional functionality and state management for your components.

## pages

The pages folder contains the main pages of your landing page, each with its own file and component. This is where you define the routing and layout of your template.

## shared

The shared folder contains utility functions, constants, and other code that can be shared across components and pages.

By organizing your code into these folders, you can easily find and modify the different parts of your template, and maintain a clean and scalable codebase.
