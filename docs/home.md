---
sidebar_position: 4
---

# Home

Learn about the **Home component**.

---

The `page.tsx` component, located in the `app` directory, is a React functional component that represents the main page of the website.

The component imports various sub-components from the corresponding directories, such as `Navbar`, `Main`, `Benefits`, `Services`, `Pricing`, `Faqs`, `ContactUs`, and `Footer`. Each sub-component represents a specific section or functionality of the page.

The component initializes two state variables: `selectedPage` and `isTopOfPage`, using the `useState` hook. The `selectedPage` variable represents the currently selected page, while `isTopOfPage` indicates whether the user is at the top of the page.

The `useEffect` hook is used to add a scroll event listener and update the state variables based on the scroll position. When the user scrolls to the top of the page, the `isTopOfPage` state is set to true, and the selectedPage state is set to SelectedPageEnum.Home. If the user scrolls to any other position, `isTopOfPage` is set to false.

The component renders a `div` element with a class of bg-gray-900 for the background color. Inside the `div`, it renders the following components in order:

**Navbar**: The navigation bar component that displays the menu and handles page selection.

**Main**: The main content component of the page.

**Benefits**: The component for showcasing benefits.

**Services**: The component for showcasing services.

**Pricing**: The component for pricing information.

**Faqs**: The component for frequently asked questions.

**ContactUs**: The component for contact information.

**Footer**: The footer component of the page.

These components are rendered within a container with a maximum width of `1400px` and centered horizontally using `mx-auto`. The background color is set to `gray-900`.

The `setSelectedPage` function is passed down to each sub-component to handle page selection and update the selectedPage state when necessary.

Overall, the `page.tsx` component orchestrates the rendering of various sections and manages the state of the selected page and scroll position, providing the user with a seamless browsing experience on the website.
