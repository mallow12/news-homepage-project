# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/Screenshot%202023-02-20%20at%2016-04-49%20Frontend%20Mentor%20News%20homepage.png)
![](./assets/Screenshot%202023-02-20%20at%2016-06-27%20Frontend%20Mentor%20News%20homepage.png)
![](./assets/Screenshot%202023-02-20%20at%2016-06-55%20Frontend%20Mentor%20News%20homepage.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Js

### What I learned

This project thought me more about implementing grid into websites designs and also using a mobile first approach.

```html
  <div class="nav-mobile" id="hide">
        <ul>
          <img
            src="assets/images/icon-menu-close.svg"
            alt="icon-menu-close"
            class="icon-menu-close"
          />
          <div class="list-item">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </div>
        </ul>
      </div>
      <ul class="show-nav-desktop">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
```

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
```
### Continued development

I want to focus more on building mobile first designs in my future projects and also getting better with using Grid method.

## Author

- Frontend Mentor - [@mallow12](https://www.frontendmentor.io/profile/mallow12)


