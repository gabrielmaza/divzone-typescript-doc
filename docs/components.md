---
sidebar_position: 5
---

# Components

Learn about the **DivZone components**.

---

The **components folder** in your project contains reusable UI components that make up the main sections of your landing page. Components are like building blocks that can be combined and customized to create different pages and layouts. By using components, you can maintain a consistent look and feel across your website, and save time and effort by not having to repeat the same code multiple times.

    divzone-typescript/
    └── src
        ├── components

Each component in the components folder is designed to be modular and independent, with its own set of props and styles. Some components may contain other components as children, creating a nested hierarchy that mirrors the structure of your page. Other components may be simple and self-contained, such as a button or an icon.

In the following sections, we'll take a closer look at each component in the components folder, and explain how to use and customize them. Whether you're new to React or an experienced developer, you'll find these components easy to understand and work with.

## Navbar

This component displays a navbar section of a web page.
Is written in React and contains several components that are used to build a navbar. The first line imports the useState hook from React, which allows the creation of a state variable in a functional component.
The second line imports two icons from the Heroicons library, which will be used to create the mobile menu button.
The third line imports the Logo SVG file from the assets directory.

The fourth line imports the Link component, which will be used to create the links in the navbar.
The fifth line imports an enum type called SelectedPageEnum, which will be used to keep track of which page is currently selected.

The sixth line imports the useMediaQuery hook from the "@/hooks/useMediaQ" module. This hook returns a boolean value that represents whether the current screen width is above a certain breakpoint.
The seventh line imports the motion object from the framer-motion library. This object contains several functions that are used to create animated components in React.

The next few lines define a type called IndexProps, which is used to define the props for the Navbar component. The props include a boolean value called isTopOfPage, which represents whether the user is currently at the top of the page, a SelectedPageEnum value called selectedPage, which represents which page is currently selected, and a function called setSelectedPage, which is used to update the selectedPage value.
The Navbar component is a functional component that takes in the IndexProps props. The component uses the useState hook to create a state variable called isOpen, which represents whether the mobile menu is currently open. The component also uses the useMediaQuery hook to determine whether the screen width is above a certain breakpoint.

The component returns a nav element that contains several child elements. The first child element is a div that contains the logo and the mobile menu button. The second child element is a div that contains the links in the navbar. The third child element is a div that contains the sign in button and the become a member button.
The component also contains several variables that are used to style the elements in the navbar, such as navbarBackground, which determines the background color of the navbar based on whether the user is at the top of the page or not, and hoverLinkColor, which determines the color of the links in the navbar when they are hovered over.

In summary, this code imports several components and libraries that are used to create a navbar in React. The code defines a functional component called Navbar that takes in several props and returns a nav element that contains several child elements. The component also uses hooks to create state variables and determine the screen width.

## Footer

This component displays a footer section of a web page.
A footer is the section that appears at the bottom of a webpage and usually contains information such as copyright notices, links to social media, and contact information.
The component starts by importing some other components and icons from external sources. The first import statement imports a logo from a file in the assets/svg folder. The second import statement imports a component called HText from a shared folder. The last import statement imports three icons from the Heroicons library.

The component itself is defined as a function called Footer that returns JSX, a syntax for defining HTML-like elements in JavaScript. The component starts by defining a footer element with a gray background and some padding. Inside the footer element, there are two main sections defined using a flexbox layout.
The first section contains some social media links in a row. Each link is represented by an anchor tag with a background color, some padding, and an arrow icon. The links use the target="\_blank" attribute to open in a new tab when clicked.

The second section contains three columns. The first column displays the logo imported earlier and some text describing the website. The second and third columns display some links and contact information, respectively. The links and contact information are represented using a combination of text and icons, with the icons imported from Heroicons.
Overall, this footer component provides a simple but effective way to display important information at the bottom of a web page.

## Main

This component displays a main section of a web page.
It imports various modules and components and defines a Main component that takes a prop named setSelectedPage.

The SelectedPageEnum is an enumerated type, and it's imported from @/shared/typesEnum. The useMediaQuery hook is imported from @/hooks/useMediaQ, ActionButton component from @/shared/ActionButton, and ArrowRightIcon from @heroicons/react/24/solid. Two SVG images are also imported from @/assets/svg and @/assets directories.
The Main component returns a section with an id of "home" and various styles. Within the section, there are two div elements. The first div element contains a header and an image, while the second div element contains some text and an image.

The header contains a main heading, a subheading, and two buttons. The text section contains a heading and a list of items. The entire component uses the motion component from framer-motion to provide animation.
When the component is mounted, the setSelectedPage function is called with SelectedPageEnum.Home as an argument, which will set the current page to the home page.

## ContactUs

This component displays a contact form section of a web page.
It includes some external dependencies, such as react-hook-form and framer-motion, and a couple of custom components.

The first line imports the useForm hook from the react-hook-form package, which is a popular library for managing forms in React. It is used to initialize the form and handle form submission, validation, and error messages.
Next, an enum type SelectedPageEnum is imported from the @/shared/typesEnum module. This is likely a custom enum type that defines some constants for different pages in the app, with ContactUs being one of them.

Then, the motion component is imported from the framer-motion package. This is a popular animation library for React that allows for creating animated components with ease.
An image file named ContactUsPageGraphic.png is imported from the @/assets directory.

Lastly, a custom component called HText is imported from the @/shared directory, which likely defines some custom styles for heading text.
The ContactUs function component takes a prop setSelectedPage that is a function that sets the selected page in the parent component. It returns a section component with the ID contactus and a class of mx-auto w-5/6 py-24.

Inside the section, there is a motion component that triggers a function call to setSelectedPage when it enters the viewport. This component contains a header with a title and a paragraph of text.
Below the header is a form with three input fields for name, email, and message, respectively. The useForm registration function is used to register each input field and set validation rules. Error messages are displayed when a user tries to submit the form with invalid input.

Formsubmit sends all form submissions to your email with no coding or backbend required. The Formsubmit section explains in detail how to configure it.

Lastly, there is an image that is displayed on the right hand side of the form. This image is animated by the movement of the frame as it enters the viewport.

## Benefits

This component displays a benefits section of a web page.
The component imports three icons from the Heroicons library, an ActionButton component, and an HText component that are all used in the section. It also imports two types of enums, SelectedPageEnum and BenefitType, used to define the types of objects in the benefits array.

The benefits array contains three objects, each representing a benefit to be displayed. Each object contains an icon, title, and description. The container object contains two properties, hidden and visible, which are used to define animations for the component.

The index component returns a section element that contains two motion.div elements. The first element contains a header with an HText component and a paragraph element. The second element contains a group of Benefit components that are created using the benefits array, and an image with a description that uses an HText component.

The entire component takes a single prop, setSelectedPage, a function that sets the selected page to the benefits page when called. Overall, the component is a reusable section that can be easily styled and populated with different benefits.
