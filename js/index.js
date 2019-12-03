// mouseover
// consider: overlaying text on mouseover instead

let contentImages = document.querySelectorAll('.content-section img');

contentImages.forEach(image => {
    image.addEventListener('mouseover', event => image.src = "img/woman-traveling.jpg");
});

// click

let contactLink = document.querySelector('.nav-link:last-child');

contactLink.addEventListener('click', event => alert('Under Construction!'));

// dblclick

let destinationImage = document.querySelector('.content-destination img');

destinationImage.addEventListener('dblclick', event => destinationImage.style.border = '12px dashed #17A2B8');

// keydown

let newImagineSection = document.createElement('section');
newImagineSection.innerHTML = "<h4>Just Imagine</h4><p>Where do you want to go? Click here and start typing.</p><p id=\"log\"></p>";
newImagineSection.className = 'content-destination imagine';

let homeContent = document.querySelector('.home');

homeContent.appendChild(newImagineSection);

let imagineSection = document.querySelector('.imagine');

document.addEventListener('keydown', event => {    
    const charList = 'abcdefghijklmnopqrstuvwxyz ';
    const key = event.key.toLowerCase();

    if (charList.indexOf(key) !== -1) {
        log.textContent += `${event.key}`;
    }
});

// mouseover
//  wheel *
//  drag / drop * 
//  load *
//  focus
//  resize
//  scroll
//  select
//  dblclick
//  keydown or keypress
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation items from refreshing the page by using preventDefault()

// alert
// mouseenter
// mouseleave