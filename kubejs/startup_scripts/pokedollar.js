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
})