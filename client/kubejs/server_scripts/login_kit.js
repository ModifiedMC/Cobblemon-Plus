PlayerEvents.loggedIn(event => {
    let player = event.player;

    // First Join Check - Give FTB Quest Book
    if (!player.persistentData.hasJoinedBefore) {
        player.persistentData.hasJoinedBefore = true;

    // Give the FTB Quests book
       // player.give(Item.of('ftbquests:book'));
       // player.tell("📖 You have received an FTB Quests book!");
        
        // Run Titanium Rewards disable commands
        event.server.runCommand(`/titanium-rewards disable industrialforegoing:cat_ears normal`);
        event.server.runCommand(`/titanium-rewards disable sushigocrafting:back salmon`);
       };
});