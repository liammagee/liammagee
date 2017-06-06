var canvas;
var mic;
var points = [];
var $ = window.$;

$(window).scroll(function() {
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


  var queueLength = 40;
  var circleInc = queueLength * 1;
  var offset = queueLength * 0.25;
  for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var altI = points.length - i;
      var r = offset + i * (circleInc - offset) / points.length;
      var alphaStroke = i * 1;
      var alphaFill = i * 0.5;
      stroke(64, alphaStroke);
      fill(0, 255, 0, alphaFill);
      ellipse(p.x, p.y, r, r);
  }
  if (points.length > queueLength) {
    points = points.slice(points.length - queueLength);
  }
  points.push(createVector(mouseX, mouseY));
}
