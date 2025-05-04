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
})

ServerEvents.recipes(event=> {
  event.remove({id: "cobblemon:master_ball"})
})