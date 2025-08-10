//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//

StartupEvents.registry('block', event => {
  event.create('modified:coinblock_pokedollar')
    .displayName('§6Block of PokéDollars')
    .hardness(1.5)
    .requiresTool(false)
    .soundType('chain')
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING);

  event.create('modified:coinpile_pokedollar')
    .displayName('§6PokéDollar Pile')
    .hardness(1.0)
    .requiresTool(false)
    .soundType('chain')
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .box(0.1875, 0, 0.125, 0.8125, 0.9375, 0.6875, false);
});

StartupEvents.registry('item', event => {
  event.create('modified:pokedollar')
    .displayName('§6PokéDollar')
    .texture('modified:item/pokedollar')
    .maxStackSize(99);
});

ItemEvents.modification(event => {
  event.modify('modified:coinblock_pokedollar', item => {
    item.maxStackSize = 99
  })

  event.modify('modified:coinpile_pokedollar', item => {
    item.maxStackSize = 99
  })
});

StartupEvents.registry('block', event => {
  event.create('modified:coinblock_mtoken')
    .displayName('§dBlock of Master Tokens')
    .hardness(1.5)
    .requiresTool(false)
    .soundType('amethyst')
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING);

  event.create('modified:coinpile_mtoken')
    .displayName('§dPile of Master Tokens')
    .hardness(1.0)
    .requiresTool(false)
    .soundType('amethyst')
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .box(0.1875, 0, 0.125, 0.8125, 0.9375, 0.6875, false);
});

StartupEvents.registry('item', event => {
  event.create('modified:mtoken')
    .displayName('§dMaster Token')
    .texture('modified:item/mtoken')
    .maxStackSize(99);
});

ItemEvents.modification(event => {
  event.modify('modified:coinblock_mtoken', item => {
    item.maxStackSize = 99
  })

  event.modify('modified:coinpile_mtoken', item => {
    item.maxStackSize = 99
  })
});

{
console.log('$$$ MODIFIED COINS LOADED $$$')
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

