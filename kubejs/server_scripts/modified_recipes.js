ServerEvents.recipes(event => {
  
    event.remove({ output: 'explorerscompass:explorerscompass' })
    event.shaped(
    'explorerscompass:explorerscompass',
    [
      'EGE',
      'MRD',
      'EFE'
    ],
    {
      E: 'minecraft:ender_eye',
      R: 'minecraft:recovery_compass',
      D: 'minecraft:diamond_block',
      F: 'alltheores:fluorite_block',
      G: 'minecraft:gold_block',
      M: 'minecraft:emerald_block'
    })
});

ServerEvents.recipes(event=> {
  event.remove({id: "cobblemon:master_ball"})
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
})