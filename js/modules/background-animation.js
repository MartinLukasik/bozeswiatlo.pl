import imgSrc from '../../img/canvas-bg.jpg';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight * 0.55);
const img = new Image();
const imgInfo = {};
const imgs = [];
const grids = [];
const magnet = 2050;
const mouse = {
  x: 1,
  y: 0,
};

const init = function() {
  addListeners();

  img.onload = function(e) {
    // Check for firefox.
    imgInfo.width = e.path ? e.path[0].width : e.target.width;
    imgInfo.height = e.path ? e.path[0].height : e.target.height;

    const numberToShow =
      Math.ceil(window.innerWidth / imgInfo.width) *
      Math.ceil(window.innerHeight / imgInfo.height);

    createGrid();
    if (window.matchMedia('(min-width: 500px)').matches) {
      populateCanvas(numberToShow * 15);
    }

    // Image is ready and we're ready to go
    canvas.classList.add('ready');
    render();
  };

  return (img.src = imgSrc);
};

let addListeners = function() {
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', updateMouse);
  window.addEventListener('touchmove', updateMouse);
};

let updateMouse = function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

let resizeCanvas = function() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
};

// Magic
let populateCanvas = function(nb) {
  let i = 0;
  return (() => {
    const result = [];
    while (i <= nb) {
      const p = new Photo();
      imgs.push(p);
      result.push(i++);
    }
    return result;
  })();
};

let createGrid = function() {
  const imgScale = 0.4;
  const grid = {
    row: Math.ceil(window.innerWidth / (imgInfo.width * imgScale)),
    cols: Math.ceil(window.innerHeight / (imgInfo.height * imgScale)),
    rowWidth: imgInfo.width * imgScale,
    colHeight: imgInfo.height * imgScale,
  };

  for (
    let r = 0, end = grid.row, asc = 0 <= end;
    asc ? r < end : r > end;
    asc ? r++ : r--
  ) {
    const x = r * grid.rowWidth;
    for (
      let c = 0, end1 = grid.cols, asc1 = 0 <= end1;
      asc1 ? c < end1 : c > end1;
      asc1 ? c++ : c--
    ) {
      const y = c * grid.colHeight;

      const item = new gridItem(x, y, grid.rowWidth, grid.colHeight);
      grids.push(item);
    }
  }

  return __range__(0, grids.length, false).map(i => grids[i].draw());
};

let gridItem = function(x, y, w, h) {
  if (x == null) {
    x = 0;
  }
  if (y == null) {
    y = 0;
  }
  this.draw = function() {
    ctx.drawImage(img, x, y, w, h);
  };
};

let Photo = function() {
  const seed = Math.random() * 2.5 + 1;
  const w = imgInfo.width / seed;
  const h = imgInfo.height / seed;
  let x = window.innerWidth * Math.random();
  const finalX = x;
  let y = window.innerHeight * Math.random();
  const finalY = y;
  const r = Math.random() * (180 - -180) + -180;

  let forceX = 0;
  let forceY = 0;

  const TO_RADIANS = Math.PI / 180;

  this.update = function() {
    const x0 = x;
    const y0 = y;
    const x1 = mouse.x;
    const y1 = mouse.y;

    const dx = x1 - x0;
    const dy = y1 - y0;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const powerX = x0 - ((dx / distance) * magnet) / distance;
    const powerY = y0 - ((dy / distance) * magnet) / distance;

    forceX = (forceX + (finalX - x0) / 2) / 2.1;
    forceY = (forceY + (finalY - y0) / 2) / 2.2;

    x = powerX + forceX;
    y = powerY + forceY;
  };
  this.draw = () =>
    rotateAndPaintImage(ctx, img, r * TO_RADIANS, x, y, w / 2, h / 2, w, h);
};

let rotateAndPaintImage = function(
  context,
  image,
  angle,
  positionX,
  positionY,
  axisX,
  axisY,
  widthX,
  widthY
) {
  context.translate(positionX, positionY);
  context.rotate(angle);
  context.drawImage(image, -axisX, -axisY, widthX, widthY);
  context.rotate(-angle);
  return context.translate(-positionX, -positionY);
};

let render = function() {
  let x = 0;
  let y = 0;
  ctx.clearRect(0, 0, width, height);
  while (y < grids.length) {
    grids[y].draw();
    y++;
  }
  while (x < imgs.length) {
    imgs[x].update();
    imgs[x].draw();
    x++;
  }

  return requestAnimationFrame(render);
};

function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}

init();
