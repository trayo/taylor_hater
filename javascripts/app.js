var haters     = "f"
var gonna      = "g"
var hate       = "h"
var shakeItOff = "v"
var shake      = "b"
var stop       = "n"
var plays      = 1;

ion.sound({
  sounds: [
    {
      name: "shakeitoff",
      sprite: {
        "haters": [45.14, 0.36],
        "gonna": [45.55, 0.3],
        "hate1": [45.85, 0.35],
        "hate2": [46.20, 0.35],
        "hate3": [46.58, 0.4],
        "hate4": [47.10, 0.25],
        "hate5": [47.35, 0.79],
        "shake": [48.15, 2.8],
        "shakeitoff": [51, 2],
      },
    },
  ],

  volume: 0.7,
  path: "sounds/",
  preload: true,
  multiplay: true,
});

Mousetrap.bind(haters, function(e) {
  ion.sound.stop("shakeitoff");
  ion.sound.play("shakeitoff", { part: "haters" });
  plays = 1;
});

Mousetrap.bind(gonna, function(e) {
  ion.sound.stop("shakeitoff");
  ion.sound.play("shakeitoff", { part: "gonna" });
  plays = 1;
});

Mousetrap.bind(hate, function(e) {
  ion.sound.stop("shakeitoff");
  ion.sound.play("shakeitoff", { part: "hate" + plays });
  plays = plays === 5 ? 1 : ++plays;
});

Mousetrap.bind(shake, function(e) {
  ion.sound.stop("shakeitoff");
  ion.sound.play("shakeitoff", { part: "shake" });
  plays = 1;
});

Mousetrap.bind(shakeItOff, function(e) {
  ion.sound.stop("shakeitoff");
  ion.sound.play("shakeitoff", { part: "shakeitoff" });
  plays = 1;
});

Mousetrap.bind(stop, function(e) {
  ion.sound.stop("shakeitoff");
});

function play(key) {
  Mousetrap.trigger(key);
}
