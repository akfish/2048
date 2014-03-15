// Wait till the browser is ready to render the game (avoids glitches)

window.requestAnimationFrame(function () {
  // Secret!
  var hash = window.location.hash.split("=");
  var startTiles = 2;
var p = {tiles:2, factor:1, size:4};
  if (hash[0] == '#cute_lentty') {
      var args = hash[1].split(",");
      for (var i = 0; i < args.length; i++)
      {
          var segs = args[i].split(":");
          p[segs[0]] = segs[1];
      }
      console.log(p);
  }

  new GameManager(p.size, KeyboardInputManager, HTMLActuator, LocalScoreManager, p.tiles, p.factor);
});
