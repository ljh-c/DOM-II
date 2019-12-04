const stack = document.querySelector('.blocks');
// * * * * * * * * * parent of blocks

const blockList = document.querySelectorAll('.block');
console.log(blockList);
// * * * * * * * * * list of blocks

// * * * * * * * * * block goes to top of stack when clicked
function moveToTop(block) {
  const updatedBlockList = document.querySelectorAll('.block');
  stack.insertBefore(block, updatedBlockList[0]);
}

blockList.forEach(block => {
  block.addEventListener('click', () => {
    moveToTop(block);
  });
});

// * * * * * * * * * global variable to store interval
let blastingOff;

// * * * * * * * * * event listeners for mouseup, mousedown
blockList.forEach(block => {
  block.addEventListener('mousedown', event => {
    blastingOff = setInterval(moveRight, 500, event.target);
  });

  block.addEventListener('mouseup', event => {
    clearInterval(blastingOff);
  });
});

// * * * * * * * * * store distance of each block
let distance = {'block block--red': 10, 'block block--blue': 10, 'block block--green': 10, 'block block--pink': 10, 'block block--gray': 10};

// * * * * * * * * * moves block by increasing left margin
function moveRight(block) {
  const color = block.className;
  
    distance[color] += 40;
    console.log(distance[color]);
    block.style.marginLeft = `${distance[color]}px`;
}