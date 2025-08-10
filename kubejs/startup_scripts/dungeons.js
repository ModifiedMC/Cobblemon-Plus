//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//

StartupEvents.registry('block', function(event) {
    event.create('modified:dungeon_portal_frame')
      .displayName('Dungeon Portal Frame')
      .unbreakable()       
      .requiresTool()        
      .mapColor('stone')
      .soundType('stone')
      .renderType('solid')
      // Texture located at: assets/modified/textures/block/dungeon_portal_frame.png
      //.texture('modified:block/dungeon_portal_frame')
      });
  StartupEvents.registry('block', function(event) {  
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

  StartupEvents.registry('item', function(event) {
    event.create('modified:master_dungeon_key')
      .displayName('Master Dungeon Key')
      // Texture located at: assets/modified/textures/item/master_dungeon_key.png
     //.texture('modified:item/master_dungeon_key');
  });

{
console.log('$$$ MODIFIED DUNGEONS LOADED $$$')
}

//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//
  