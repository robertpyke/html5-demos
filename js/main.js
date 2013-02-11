var drawn = [];
var stage = null;
var fps = 30;

// loaded automatically on page load
update_canvas_size = function() {
  var canvas_container = document.getElementById("canvas_container");
  var canvas = document.getElementById("canvas");
  canvas.height = canvas_container.offsetHeight;
  canvas.width  = canvas_container.offsetWidth;

  // Make it visually fill the positioned parent
  canvas.style.width  ='100%';
  canvas.style.height ='100%';

  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

tick = function() {
  var canvas = document.getElementById("canvas");

  stage.update();

  console.log("tick");
  setTimeout(tick, 1000/fps);
}

scroll_stage_left = function(event) {
  stage.x = stage.x + 100;
  var stage_position = document.getElementById("stage_position");
  stage_position.innerHTML = "X: " + stage.x;
  stage.update();
}

scroll_stage_right = function(event) {
  stage.x = stage.x - 100;
  var stage_position = document.getElementById("stage_position");
  stage_position.innerHTML = "X: " + stage.x;
  stage.update();
}

var preload = new createjs.PreloadJS();
preload.onFileLoad = handleFileComplete;

var current_image = null;

var planet_cute_tiles = [
  "img/planet_cute/Brown Block.png",
  "img/planet_cute/Character Boy.png",
  "img/planet_cute/Character Cat Girl.png",
  "img/planet_cute/Character Horn Girl.png",
  "img/planet_cute/Character Pink Girl.png",
  "img/planet_cute/Character Princess Girl.png",
  "img/planet_cute/Chest Closed.png",
  "img/planet_cute/Chest Lid.png",
  "img/planet_cute/Chest Open.png",
  "img/planet_cute/Dirt Block.png",
  "img/planet_cute/Door Tall Closed.png",
  "img/planet_cute/Door Tall Open.png",
  "img/planet_cute/Enemy Bug.png",
  "img/planet_cute/Gem Blue.png",
  "img/planet_cute/Gem Green.png",
  "img/planet_cute/Gem Orange.png",
  "img/planet_cute/Grass Block.png",
  "img/planet_cute/Heart.png",
  "img/planet_cute/Key.png",
  "img/planet_cute/Plain Block.png",
  "img/planet_cute/Ramp East.png",
  "img/planet_cute/Ramp North.png",
  "img/planet_cute/Ramp South.png",
  "img/planet_cute/Ramp West.png",
  "img/planet_cute/Rock.png",
  "img/planet_cute/Roof East.png",
  "img/planet_cute/Roof North East.png",
  "img/planet_cute/Roof North West.png",
  "img/planet_cute/Roof North.png",
  "img/planet_cute/Roof South East.png",
  "img/planet_cute/Roof South West.png",
  "img/planet_cute/Roof South.png",
  "img/planet_cute/Roof West.png",
  "img/planet_cute/Selector.png",
  "img/planet_cute/Shadow East.png",
  "img/planet_cute/Shadow North East.png",
  "img/planet_cute/Shadow North West.png",
  "img/planet_cute/Shadow North.png",
  "img/planet_cute/Shadow Side West.png",
  "img/planet_cute/Shadow South East.png",
  "img/planet_cute/Shadow South West.png",
  "img/planet_cute/Shadow South.png",
  "img/planet_cute/Shadow West.png",
  "img/planet_cute/SpeechBubble.png",
  "img/planet_cute/Star.png",
  "img/planet_cute/Stone Block Tall.png",
  "img/planet_cute/Stone Block.png",
  "img/planet_cute/Tree Short.png",
  "img/planet_cute/Tree Tall.png",
  "img/planet_cute/Tree Ugly.png",
  "img/planet_cute/Wall Block Tall.png",
  "img/planet_cute/Wall Block.png",
  "img/planet_cute/Water Block.png",
  "img/planet_cute/Window Tall.png",
  "img/planet_cute/Wood Block.png"
];

function setup() {
  update_canvas_size();

  var canvas = document.getElementById('canvas');
  stage = new createjs.Stage(canvas);
  stage.mouseEnabled = true;
  console.log(stage);
  stage.onMouseDown = _addImageToStage;

  for(var i = 0; i < planet_cute_tiles.length; i++) {
    preload.loadFile(planet_cute_tiles[i]);
  }

  setTimeout(tick, 1000/fps);

}

function _addImageToStage(event) {
  console.log(event);
  var selImage = new createjs.Bitmap(current_image);
console.log(selImage);
  selImage.x = (parseInt(event.stageX / selImage.image.width) * selImage.image.width);
  selImage.y = (parseInt(event.stageY / ( selImage.image.height / 4 )) * ( selImage.image.height / 4 ));


  drawn.push(selImage);
  stage.addChild(selImage);
  stage.update();
}

function _addImageToSideBar(img) {
  var side_panel = document.getElementById('img_side_panel');
  side_panel.appendChild(img);
  img.onclick = function(event) {
    if ( current_image )
      current_image.className = "";

    current_image = event.target;
    current_image.className = "selected";

  };
}

function handleFileComplete(event) {
  var side_panel = document.getElementById('img_side_panel');

  _addImageToSideBar(event.result);

}
