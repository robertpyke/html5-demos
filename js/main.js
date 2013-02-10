var preload = new createjs.PreloadJS();
preload.onFileLoad = handleFileComplete;

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
  for(var i = 0; i < planet_cute_tiles.length; i++) {
    preload.loadFile(planet_cute_tiles[i]);
  }
}

function handleFileComplete(event) {
  console.log("Loaded File", event);
  document.getElementById('side_panel').appendChild(event.result);
}
