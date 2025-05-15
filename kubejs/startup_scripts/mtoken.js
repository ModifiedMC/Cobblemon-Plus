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
})