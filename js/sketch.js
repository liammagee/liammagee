var canvas;
var mic;
var points = [];

$(window).scroll(function() {
  console.log('got here');
  resizeCanvas(windowWidth, windowHeight);
  if (canvas !== undefined) {
    var st = $(this).scrollTop();
    canvas.position(0, st);
    canvas.style('z-index', '-1');
  }
});

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var density = displayDensity();
  pixelDensity(density);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function mouseMove() {
  points.push(new p5.Vector(mouseX, mouseY));
  if (points.length > 30) {
    points = points.slice(points.length - 30);
  }
}
function draw() {
  background(255);
  // stroke(0);
  // fill(0);
  // translate(-width / 2, -height / 2, 0);
  //box();
  stroke(64, 10);
  fill(0, 255, 0, 5);
  points.push(new p5.Vector(mouseX, mouseY));
  for (var i = 0; i < points.length; i++) {
      var p = points[i];
      ellipse(p.x, p.y, 100, 100);
  }
  if (points.length > 20) {
    points = points.slice(points.length - 20);
  }
}
