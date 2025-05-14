StartupEvents.registry('item', function(event) {
  event.create('modified:pokedollar')
    .displayName('§6PokéDollar')
    .texture('modified:item/pokedollar')
    .maxStackSize(99);
    
  event.create('modified:mtoken')
    .displayName('§dMaster Token')
    .texture('modified:item/mtoken')
    .maxStackSize(99);
});

StartupEvents.registry('block', function(event) {
  event.create('modified:pokedollar_pile')
    .displayName('§6PokéDollar Pile')
    .texture('modified:block/pokedollar_pile');

  event.create('modified:pokedollar_block')
    .displayName('§6Block of PokéDollars')
    .texture('modified:block/pokedollar_block');

    event.create('modified:mtoken_pile')
    .displayName('§dMaster Token Pile')
    .texture('modified:block/mtoken_pile');

  event.create('modified:mtoken_block')
    .displayName('§dBlock of Master Tokens')
    .texture('modified:block/mtoken_block');
});