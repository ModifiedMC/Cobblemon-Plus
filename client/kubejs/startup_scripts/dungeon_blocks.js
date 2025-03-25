StartupEvents.registry('block', function(event) {
    event.create('modified:dungeon_portal_frame')
      .displayName('Dungeon Portal Frame')
      .unbreakable()         // Makes the block unbreakable in survival.
      .requiresTool()        // (Optional) Requires the proper tool.
      .mapColor('stone')
      .soundType('stone')
      .renderType('solid')
      // Texture located at: assets/modified/textures/block/dungeon_portal_frame.png
      //.texture('modified:block/dungeon_portal_frame')
      .item(function(item) {
        item.displayName('Dungeon Portal Frame')
            // Texture located at: assets/modified/textures/item/dungeon_portal_frame.png
            //.texture('modified:item/dungeon_portal_frame');
      });
    
    event.create('modified:dungeon_portal')
      .displayName('Dungeon Portal')
      .hardness(0.3)
      .noCollision()
      .lightLevel(15)
      .mapColor('portal')
      .soundType('glass')
      .renderType('cutout')
      // Texture located at: assets/modified/textures/block/dungeon_portal.png
      //.texture('modified:block/dungeon_portal');
  });
  