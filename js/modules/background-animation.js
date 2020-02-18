/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Source: https://codepen.io/xposedbones/pen/XXpgpj
// Variables
import imgSrc from '../../img/canvas-bg.jpg';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
const img = new Image();
const useGrid = true;
const imgInfo = {};
const imgs = [];
const grids = [];
const magnet = 2000;
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

    if (useGrid) {
      createGrid();
    }
    populateCanvas(numberToShow * 4);

    // Image is ready and we're ready to go
    canvas.classList.add('ready');
    return render();
  };

  return (img.src = imgSrc);
};

var addListeners = function() {
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', updateMouse);
  return window.addEventListener('touchmove', updateMouse);
};

var updateMouse = function(e) {
  mouse.x = e.clientX;
  return (mouse.y = e.clientY);
};

var resizeCanvas = function() {
  width = canvas.width = window.innerWidth;
  return (height = canvas.height = window.innerHeight);
};

// Magic
var populateCanvas = function(nb) {
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

var createGrid = function() {
  const imgScale = 0.5;
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

var gridItem = function(x, y, w, h) {
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

var Photo = function() {
  const seed = Math.random() * (2.5 - 0.7) + 0.7;
  const w = imgInfo.width / seed;
  const h = imgInfo.height / seed;
  let x = window.innerWidth * Math.random();
  const finalX = x;
  let y = window.innerHeight * Math.random();
  const finalY = y;
  // console.log(`INIT Y :: ${finalY} || INIT X :: ${finalX}`);
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

var rotateAndPaintImage = function(
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

var render = function() {
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

init();
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
