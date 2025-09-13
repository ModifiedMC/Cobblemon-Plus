//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//


// -- Misc. Items
ServerEvents.recipes(event => {

  event.remove({ output: 'explorerscompass:explorerscompass' });
  event.shaped(
    'explorerscompass:explorerscompass',
    [
      'EME',
      'SCD',
      'EAE'
    ],
    {
      E: 'minecraft:ender_eye',
      C: 'minecraft:recovery_compass',
      A: 'minecraft:ancient_debris',
      D: 'deeperdarker:heart_of_the_deep',
      M: 'cobblemon:master_ball',
      S: 'minecraft:heart_of_the_sea'
    })
});

// -- Cobblemon Specific
ServerEvents.recipes(event => {
  event.remove({ output: 'cobblemon:master_ball' })
});

ServerEvents.recipes(event => {

  event.shaped(
    'cobblemon:tart_apple',
    [
      ' G ',
      'GBG',
      ' G '
    ],
    {
      B: 'biomeswevegone:green_apple',
      G: 'minecraft:gold_block'
    })
});

ServerEvents.recipes(event => {

  event.shaped(
    'cobblemon:sweet_apple',
    [
      ' S ',
      'SAS',
      ' S '
    ],
    {
      A: 'minecraft:golden_apple',
      S: 'supplementaries:sugar_cube'
    })
});

// Moon Event Items
ServerEvents.recipes(event => {
  const keystone = 'mega_showdown:keystone';

  // -- Crafting Recipes for Moon Crescents
  event.shapeless('modified:moon_crescent_blue', [
    'modified:moon_fragment_blue',
    'modified:moon_fragment_blue',
    keystone
  ]).id('kubejs:moon_crescent_blue_crafting');

  event.shapeless('modified:moon_crescent_blood', [
    'modified:moon_fragment_blood',
    'modified:moon_fragment_blood',
    keystone
  ]).id('modified:moon_crescent_blood_crafting');

  event.shapeless('modified:moon_crescent_harvest', [
    'modified:moon_fragment_harvest',
    'modified:moon_fragment_harvest',
    keystone
  ]).id('modified:moon_crescent_harvest_crafting');

  // -- Crafting Recipes for SUPER Moon Crescents
  event.shapeless('modified:super_moon_crescent_blue', [
    'modified:moon_crescent_blue',
    'modified:moon_crescent_blue',
    keystone
  ]).id('modified:super_moon_crescent_blue_crafting');

  event.shapeless('modified:super_moon_crescent_blood', [
    'kmodified:moon_crescent_blood',
    'modified:moon_crescent_blood',
    keystone
  ]).id('modified:super_moon_crescent_blood_crafting');

  event.shapeless('modified:super_moon_crescent_harvest', [
    'modified:moon_crescent_harvest',
    'modified:moon_crescent_harvest',
    keystone
  ]).id('modified:super_moon_crescent_harvest_crafting');
});

{
  console.log('$$$ MODIFIED RECIPES LOADED $$$')
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
