```
Ryan Matthews
Caterina Paun
CS463 Intro to Web Dev
November 1, 2025
```
# Log for WebDev Final Project
## Links
### Repository: <https://github.com/rhinomat/WebDevFinalProject>
### Old Website: <https://rhinomat.github.io/>
### New Website: <https://rhinomat.github.io/WebDevFinalProject/>
## Journal 11/1/25:
This new website is a revised and improved version of my current website.
## Journal 11/13/25:
I have only done a basic setup so far.
my architecture is:
```
index.html
styles/
    styles.css
scripts/
    main.js
```
```index.html``` is the main page.\
```styles/styles.css``` is the main stylesheet for aspects of the page.\
I don't know what ```scripts/main.js``` is for yet but I know I need something javascript based.\
In `index.html` I have made a html preamble to define the page and made a 
html section where the language is defined as english.\
Additionally, the metadata section has it set that the default character set is 
UTF-8 like usual and name as viewport to define the visible area for the page, 
with the width being that of the observing device and a normal scaling.\
I couldn't come up with a better title, so I made the title "Web Development Final Project".\
I am going to have "Navbar" be in a header, "About", "Previous Work", and 
"Projects" in the main section, and "Contact" in a footer.
## Journal 11/16/2025
For ease of control on dimensionality for components of the site, I am going to use bootstrap.\
I also think I want to try and make the favicon for my site.\
I will probably use a tool like [Aseprite](https://www.aseprite.org/)\
I made it with a simple cube-like design. I wanted the main borderlines to be 
grey or black adjacent and then have a blue adjacent, green adjacent, and red 
adjacent as the main colors. I also made the dimensions 16px by 16px. I will 
keep it as the favicon for now unless I determine it needs to be shifted out 
for something more interesting visually.\
For my navbar, I based it off the navbar that bootstrap uses in its navbar example but only really in the syntax for classes, just so that I can go in later and manipulate aspects specifically in color and font. <https://getbootstrap.com/docs/5.3/examples/>\
I also decided to implement WebGL into my website, but then switched over to a framework for it called ThreeJS, which is a lot more optimized and I have more conceptual understanding of its high level.\
The only problem i had in the past with it is getting npm to work with github pages, but i finally found a video for it.\
<https://threejs.org/>\
<https://www.youtube.com/watch?v=ygdbUEsAYyQ>\
I put together the About and Experience sections using the base information from my old website and then put some basic formatting that i am going to have to touch up later.\
