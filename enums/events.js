var Enum = require('enum');
var Event = require('../models/Event');
var Tier = require('../models/Tier');

module.exports.EVENTS_TYPES = new Enum([
    "Multiplayer",
    "Hot Pursuit",
    "Race",
    "Interceptor",
    "Duel",
    "Gauntlet",
    "Preview",
    "Rapid Response",
    "Time Trial",
    "Multiplayer"
]);

module.exports.EVENTS_TIERS = new Enum([
    "Hyper",
    "Exotic",
    "Super",
    "Performance",
    "Sports",
    "Special Response",
    "Speed Enforcement",
    "Rapid Deployment",
    "Highway Patrol",
    "Traffic Police",
    "Any"
]);

module.exports.EVENTS_PLAYERS = new Enum([
    "Racer",
    "Police",
    "Both"
]);

module.exports.EVENTS_MP = [
    new Event("Arms Race", "Rockingham Point", 22.8, "Multiplayer"),
    new Event("Blacklisted", "East Gorge Canyon", 19.1, "Multiplayer"),
    new Event("Calm Before the Storm", "East Gorge Canyon", 26.5, "Multiplayer"),
    new Event("Charged Attack", "Oakmont Valley", 24.7, "Multiplayer"),
    new Event("Close Call", "Carson Ridge Reservoir", 17.2, "Multiplayer"),
    new Event("Coast To Coast", "Oakmont Valley", 19.8, "Multiplayer"),
    new Event("Complete Control", "Eagle Crest", 14.7, "Multiplayer"),
    new Event("Cut To The Chase", "Grand Ocean Coast", 18.9, "Multiplayer"),
    new Event("Dark Horse", "Carson Ridge Reservoir", 12.0, "Multiplayer"),
    new Event("Dust Storm", "Memorial Valley", 19.3, "Multiplayer"),
    new Event("End Of The Line", "Memorial Valley", 26.7, "Multiplayer"),
    new Event("Escape To The Beach", "Mission Beach", 16.0, "Multiplayer"),
    new Event("Extreme Truth", "Fox Lair Pass", 10.9, "Multiplayer"),
    new Event("Fight Or Flight", "Rockingham Point", 23.3, "Multiplayer"),
    new Event("First Offence", "Big Timber Forest", 12.3, "Multiplayer"),
    new Event("Future Perfect", "Grand Ocean Coast", 12.2, "Multiplayer"),
    new Event("Highway Battle", "Oakmont Valley", 24.0, "Multiplayer"),
    new Event("Hit The Beach", "Boulder Desert", 17.4, "Multiplayer"),
    new Event("Into The Fire", "Fox Lair Pass", 11.5, "Multiplayer"),
    new Event("Lakeside Dream", "Rockingham Point", 17.7, "Multiplayer"),
    new Event("Law And Disorder", "Coral Bay", 17.1, "Multiplayer"),
    new Event("Midnight Run", "Big Timber Forest", 10.6, "Multiplayer"),
    new Event("No Substitute", "Memorial Valley", 12.1, "Multiplayer"),
    new Event("Ocean Blue", "Grand Ocean Coast", 20.7, "Multiplayer"),
    new Event("Pedal To The Metal", "Boulder Desert", 12.9, "Multiplayer"),
    new Event("Porsche Patrol", "Memorial Valley", 18.6, "Multiplayer"),
    new Event("Razor's Edge", "Carson Ridge Reservoir", 17.0, "Multiplayer"),
    new Event("Roadsters Reborn", "Grand Ocean Coast", 13.6, "Multiplayer"),
    new Event("Run To The Hills", "Fox Lair Pass", 18.4, "Multiplayer"),
    new Event("Sand Timer", "Mission Beach", 18.0, "Multiplayer"),
    new Event("Self Preservation", "Mission Beach", 17.8, "Multiplayer"),
    new Event("Shock And Awe", "Boulder Desert", 17.1, "Multiplayer"),
    new Event("Slide Show", "Coral Bay", 12.6, "Multiplayer"),
    new Event("Snake Pit", "Rockingham Point", 22.0, "Multiplayer"),
    new Event("Snowblind", "Eagle Crest", 19.9, "Multiplayer"),
    new Event("Spirit Of Performance", "Carson Ridge Reservoir", 10.7, "Multiplayer"),
    new Event("Summit Assault", "Eagle Crest", 20.0, "Multiplayer"),
    new Event("Sun, Sand And Supercars", "Boulder Desert", 18.3, "Multiplayer"),
    new Event("Tough Justice", "Eagle Crest", 20.2, "Multiplayer"),
    new Event("Untouchable", "East Gorge Canyon", 18.4, "Multiplayer"),
];

module.exports.EVENTS_SP = [
    new Event("Against All Odds", "Grand Ocean Coast", 20.3, "Hot Pursuit", new Tier("Exotic", "Racer")),
    new Event("Arms Race", "Rockingham Point", 22.7, "Hot Pursuit", new Tier("Speed Enforcement", "Police"))
];