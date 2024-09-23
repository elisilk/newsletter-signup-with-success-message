# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

|            Mobile designed at 375px:             |           Desktop designed at 1440px:            |
| :----------------------------------------------: | :----------------------------------------------: |
|     ![](./screenshots/screenshot-mobile.png)     |    ![](./screenshots/screenshot-desktop.png)     |
|             Mobile (succcess state):             |             Desktop (active state):              |
| ![](./screenshots/screenshot-mobile-success.png) | ![](./screenshots/screenshot-desktop-active.png) |

### Links

- Solution URL: [https://github.com/elisilk/newsletter-signup-with-success-message](https://github.com/elisilk/newsletter-signup-with-success-message)
- Live Site URL: [https://elisilk.github.io/newsletter-signup-with-success-message/](https://elisilk.github.io/newsletter-signup-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography

### What I learned

- [MDN Web Docs' article on client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Styling lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists) - Needed to replace the standard bullets with the SVGs
- [Placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder) - the placeholder text in an input field
- [How To Style Common Form Elements with CSS](https://www.digitalocean.com/community/tutorials/how-to-style-common-form-elements-with-css)
- [How to Style CSS Focus Outline](https://joyofcode.xyz/css-focus-outline) - A better way to style focus outlines using box shadows
- [When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/)
- [Advanced CSS-only Input Fields — Interactive, Animated, Validated](https://matemarschalko.medium.com/advanced-css-only-input-fields-interactive-animated-validated-d7ecff3cde8c) - love this approach and clear explanations, even though I am using a bit of Javascript. I created [a CodePen](https://codepen.io/silk0346/pen/eYqOqBQ) to follow along with the post. And I ended up utilizing the `input:not(:placeholder-shown):not(:focus):invalid` selector to make sure the error/invalid state is also showing after the user has actually finished typing in a value for the email field (rather than showing as they are in the midst of typing, which could be obtrusive). The same technique also has the advantage of [preventing the invalid state from triggering just on the page load](https://stackoverflow.com/questions/27021801/inputinvalid-css-rule-is-applied-on-page-load) (before any user input, which doesn't make sense at all) by looking for the placeholder text.

### Continued development

Hmm 🤔 ...

I'm definitely uncertain about how I implemented the submission of the form and the presentation of the success message. I did it without a page reload, which seems reasonable and in the spirit of working with client-side JavaScript. But I'm not sure that is a good idea, or even that I did it well. I made use of the `.visually-hidden` class that I got from HTML5 Boilerplate, but that may not be the most appropriate use in this situation given that I don't actually want the hidden content to be accessible by screen readers. So might be worth reconsidering that.

I'm also still working on the general fundamentals of layout. I'd like to learn how to implement [fluid spacing](https://utopia.fyi/space/calculator/) in my normal design workflow, while still being able to match the designs at the key endpoints (375px and 1440px, and possibly one in between). And I'd like to try implementing more of the [Every Layout](https://every-layout.dev/) versions of layouts like [The Sidebar](https://every-layout.dev/layouts/sidebar/), so that the content is determining when to place the items next to one another (rather than `@media` queries or the device's viewport width).

### Useful resources

- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn) - So many resources and nice explanations, including stuff [tutorials specific to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
