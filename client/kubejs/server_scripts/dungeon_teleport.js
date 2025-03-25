// File: kubejs/server_scripts/dungeon_teleport.js

// Object to track per-player teleport cooldowns (in milliseconds).
var portalCooldowns = {};

// Tick event: checks each tick if a player is standing in a dungeon portal block.
ServerEvents.tick(function(event) {
  var now = Date.now();
  var players = event.server.getPlayers();
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    // Get the player's current block coordinates.
    var pos = {
      x: Math.floor(player.x),
      y: Math.floor(player.y),
      z: Math.floor(player.z)
    };

    var world = player.level;
    var block = world.getBlock(pos.x, pos.y, pos.z);
    if (!block) continue;
    
    // If the block is our dungeon portal...
    if (block.id === 'modified:dungeon_portal') {
      // Only teleport if the player is not on cooldown (5 seconds).
      if (!portalCooldowns[player.uuid] || (now - portalCooldowns[player.uuid] > 5000)) {
        // Teleport the player to 0 -63 0 in the dungeon dimension.
        event.server.runCommand(
          'execute as ' + player.uuid + ' in dungeon:dungeon_dimension run tp @s 0 -63 0'
        );
        portalCooldowns[player.uuid] = now;
      }
    }
  }
});
