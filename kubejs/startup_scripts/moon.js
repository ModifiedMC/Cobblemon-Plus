//
// Copyright (c) 2025 ImpavidEh - https://www.curseforge.com/members/impavideh/projects 
// (@Jaker.zzz on Discord) - https://discord.gg/6R6Ch2mNgZ
// 
// 
// This file is for use only in "MODIFIED COBBLEMON" projects.
// https://ModifiedMC.com

// All rights reserved.
//

StartupEvents.registry('item', event => {
    // --- Moon Fragment Items ---
    event.create('modified:moon_fragment_blue')
        .displayName('Blue Moon Fragment') 
        .texture('modified:item/blue_fragment')
        .maxStackSize(64); 

    event.create('modified:moon_fragment_blood')
        .displayName('Blood Moon Fragment')
        .texture('modified:item/blood_fragment')
        .maxStackSize(64);

    event.create('modified:moon_fragment_harvest')
        .displayName('Harvest Moon Fragment')
        .texture('modified:item/harvest_fragment')
        .maxStackSize(64);

    // --- Moon Crescent Items ---
    event.create('modified:moon_crescent_blue')
        .displayName('Blue Moon Crescent')
        .texture('modified:item/blue_crescent')
        .maxStackSize(16);

    event.create('modified:moon_crescent_blood')
        .displayName('Blood Moon Crescent')
        .texture('modified:item/blood_crescent')
        .maxStackSize(16);

    event.create('modified:moon_crescent_harvest')
        .displayName('Harvest Moon Crescent')
        .texture('modified:item/harvest_crescent')
        .maxStackSize(16);

    // --- SUPER Moon Crescent Items ---
    event.create('modified:super_moon_crescent_blue')
        .displayName('SUPER Blue Moon Crescent')
        .texture('modified:item/super_blue_crescent')
        .maxStackSize(16);

    event.create('modified:super_moon_crescent_blood')
        .displayName('SUPER Blood Moon Crescent')
        .texture('modified:item/super_blood_crescent')
        .maxStackSize(16);

    event.create('modified:super_moon_crescent_harvest')
        .displayName('SUPER Harvest Moon Crescent')
        .texture('modified:item/super_harvest_crescent')
        .maxStackSize(16);
});

StartupEvents.registry('block', event => {
  event.create('modified:pedestal')
    .displayName('§dRitual Pedestal')
    .texture('modified:block/pedestal')
});


//
// Copyright (c) 2025 ImpavidEh (@Jaker.zzz on Discord). All rights reserved.
// This file is for use only in "MODIFIED COBBLEMON" projects.
//