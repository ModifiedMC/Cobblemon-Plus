// Huge thank you to @exbubba on discord for providing the following scripts to patch these exploits;
const DUNGEON_DIM = 'dimdungeons:dungeon_dimension';

BlockEvents.rightClicked(event => {
  const {player, item, level, hand} = event;
  if (!player || level.dimension !== DUNGEON_DIM) return;

  // Block placing enchanted books (and optionally all books)
  const id = item?.id ?? '';
  const isEnchBook = id === 'minecraft:enchanted_book';
  const isAnyBook  = id === 'minecraft:book' || id === 'minecraft:written_book' || id === 'minecraft:writable_book';

  // Also block attempted placement of Supplementaries' book pile if that placement item/block is exposed
  const isBookPile = id === 'supplementaries:book_pile'; // if present in your build

  if (isEnchBook || isBookPile  || isAnyBook) {
    event.cancel();
    player.swing(hand);
    player.tell('§cYou cannot place books in this dimension.');
  }
});

ServerEvents.recipes(event=> {
  event.remove({output:'cobblemon:master_ball'})
  event.remove({output:'regions_unexplored:raw_redstone_block'})
});