# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot
desktop:-
![nft_desktop](https://github.com/kudos2Shef/NFT-PREVIEW-CARD/assets/16985060/064243f9-5c41-465a-b872-850bc11b23d8)

mobile:-
![nft_mobile](https://github.com/kudos2Shef/NFT-PREVIEW-CARD/assets/16985060/573152c5-7568-4ce8-ae4e-9b24eedb4178)

### Links

- Solution URL: [solution](https://github.com/kudos2Shef/NFT-PREVIEW-CARD)
- Live Site URL: [Preview](https://nft-preview-card-nine-olive.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JS Style


### What I learned

Usage of dialog is something I am already aware however this is my first frontend  mentor challenge where I have used dialog to achieve the desired result. When div container is hovered the dialog element comes into existence using css hover effect. This synchronisation of two elements using hover in css is what i learned. I used JS to set color property to style text with mouseover and mouseleave function.    
```html
 <div class="cube_container">
      <img src="images/image-equilibrium.jpg" id='cube' alt='cube'>
      
      <dialog id='cube_hover'>
        <img src="images/icon-view.svg" id='view' alt='view' >
      </dialog>
      </div>
     ```
```css
.cube_container:hover #cube_hover{
	
	display: inline-block;

}```
```js
equil.addEventListener('mouseover',function(){
	equil.style.color = 'hsla(178, 100%, 50%,0.7)';
	equil.style.cursor = 'pointer';
	
});
equil.addEventListener('mouseleave',function(){
	equil.style.color = White;
});
```


## Author

- Frontend Mentor - [@kudos2Shef](https://www.frontendmentor.io/profile/kudos2Shef)


