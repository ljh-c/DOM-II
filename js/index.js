// mouseover

let contentImages = document.querySelectorAll('.content-section img');

contentImages.forEach(image => {
    image.addEventListener('mouseover', event => image.src = "img/woman-traveling.jpg");
});

// click

let contactLink = document.querySelector('.nav-link:last-child');

contactLink.addEventListener('click', event => {
    alert('Under Construction!');
    event.stopPropagation();
});

// dblclick

let destinationImage = document.querySelector('.content-destination img');

destinationImage.addEventListener('dblclick', event => destinationImage.style.border = '12px dashed #17A2B8');

// keydown

let newImagineSection = document.createElement('section');
newImagineSection.innerHTML = "<h4>Just Imagine</h4><p>Where do you want to go? Click here and start typing.</p><p id=\"log\"></p><div id=\"imagine-place\"><h2>vacation packages starting at $1979</h2></div>";
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

// mouseenter & mouseleave

let imagineBox = document.getElementById('imagine-place');

imagineBox.style.backgroundImage = 'url(\'img/person-on-lake.jpg\')';
imagineBox.style.height = '200px';
imagineBox.style.position = 'relative';

let pricing = document.querySelector('#imagine-place h2');
pricing.style.color = 'white';
pricing.style.position = 'absolute';
pricing.style.top = '50%';
pricing.style.left = '50%';
pricing.style.transform = 'translate(-50%, -50%)';
pricing.style.lineHeight = '1.5';
pricing.style.textAlign = 'center';

pricing.style.display = 'none';

imagineBox.addEventListener('mouseenter', (event) => {
    imagineBox.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'img/person-on-lake.jpg\')';
    pricing.style.display = 'block';
});

imagineBox.addEventListener('mouseleave', () => {
    imagineBox.style.backgroundImage = 'url(\'img/person-on-lake.jpg\')';
    pricing.style.textShadow = '3px 3px black';
});

// resize

let navigationBar = document.querySelector('.main-navigation');

window.addEventListener('resize', () => {
    navigationBar.style.background = '#FFEBCD';
});

// change navigation border color on click
// to demonstrate stop propagation on Contact link

navigationBar.addEventListener('click', () => {
    navigationBar.style.borderBottom= '12px dashed #17A2B8';
});

// change

let newContactSection = document.createElement('section');
newContactSection.innerHTML = "<h4>Get In Touch</h4><div><form method=\"post\"></form><label>Name</label><input type=\"text\" placeholder=\"Full name\"><form method=\"post\"></form><label>Email</label><input type=\"text\" placeholder=\"Your email\"><label>Destination</label><select class=\"getaway\"><option value=\"\">Select One...</option><option value=\"beach\">Fun in the Sun</option></select></label><p class=\"message\"></p></div><div class=\"btn\">Take Me Away!</div>";

newContactSection.className = 'destination';

homeContent.appendChild(newContactSection);

const selection = document.querySelector('.getaway');

selection.addEventListener('change', (event) => {
    const msg = document.querySelector('.message');
    msg.textContent = `The ${event.target.value} getaway is $2,880`;
});

// focus & blur

const field = document.querySelectorAll('input[type="text"]');

field.forEach(element => {
    element.addEventListener('focus', event => {
        event.target.style.background = '#FFEBCD';
    })

    element.addEventListener('blur', event => {
        event.target.style.background = '';
    })
});

// stop navigation items from refreshing page

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
    });
});

// animates header image

document.querySelector('header img').addEventListener("click", () => {
    gsap.to('header img', {
        duration: 2,
        rotateY: 180,
        ease: "slow(1, 0.75, false)"
    })
})

// mouseover
//  wheel *
//  drag / drop * 
//  load *
//  focus
//  resize
//  scroll
//  select

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation items from refreshing the page by using preventDefault()

// mouseenter
// mouseleave