StartupEvents.registry('item', function(event) {
    event.create('modified:pokedollar')
      .displayName('§6Poké-dollar')
      .texture('modified:item/pokedollar')
      .maxStackSize(64);
  });