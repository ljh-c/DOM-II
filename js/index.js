// mouseover

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