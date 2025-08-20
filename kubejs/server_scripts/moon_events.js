//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//

// --=[ MODIFIED MOON EVENTS ]=--

// Blue Moon Crescent
ItemEvents.rightClicked('modified:moon_crescent_blue', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:moon_crescent_blue by ${player.username}`); 

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!'); 
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:blue_moon`);
    server.tell(`§b${event.player.username} has triggered the Blue Moon event!`); 
    event.cancel();
});

// Blood Moon Crescent
ItemEvents.rightClicked('modified:moon_crescent_blood', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:moon_crescent_blood by ${player.username}`); 

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!'); 
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:blood_moon`);
    server.tell(`§4${event.player.username} has triggered the Blood Moon event!`); 
    event.cancel();
});

// Harvest Moon Crescent
ItemEvents.rightClicked('modified:moon_crescent_harvest', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:moon_crescent_harvest by ${player.username}`);

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!');
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:harvest_moon`);
    server.tell(`§6${event.player.username} has triggered the Harvest Moon event!`); 
    event.cancel();
});

// SUPER Blue Moon Crescent
ItemEvents.rightClicked('modified:super_moon_crescent_blue', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:super_moon_crescent_blue by ${player.username}`); 

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!'); 
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:super_blue_moon`);
    server.tell(`§d${event.player.username} has triggered the SUPER Blue Moon event!`); 
    event.cancel();
});

// SUPER Blood Moon Crescent
ItemEvents.rightClicked('modified:super_moon_crescent_blood', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:super_moon_crescent_blood by ${player.username}`);

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!');
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:super_blood_moon`);
    server.tell(`§d${event.player.username} has triggered the SUPER Blood Moon event!`); 
    event.cancel();
});

// SUPER Harvest Moon Crescent
ItemEvents.rightClicked('modified:super_moon_crescent_harvest', event => {
    const { item, player, server, level } = event;
    console.log(`[KubeJS Debug] Right-clicked modified:super_moon_crescent_harvest by ${player.username}`); 

    if (level.dimension != "minecraft:overworld") {
        console.log(`[KubeJS] Player ${player.username} tried to use ${item.id} outside the Overworld. Action cancelled.`);
        player.tell('§cThis item can only be used in the Overworld!'); 
        return;
    }

    if (!player.isCreative()) {
        item.count--;
    }

    server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials:super_harvest_moon`);
    server.tell(`§d${event.player.username} has triggered the SUPER Harvest Moon event!`); 
    event.cancel();
});

//
// Copyright (c) 2025 ImpavidEh (@Jaker.zzz on Discord). All rights reserved.
// This file is for use only in "MODIFIED COBBLEMON" projects.
//
