**Work in progress!!

# SCPD-HQ Database

## Introduction

Database design scripts for the mongoDB based database used as part of the SCPD HQ website.

Retracted database location (for obvious reasons).

The intention of this project is to make creation of this database as simple as possible, in case it is required to move it elsewhere.

This is my first mongoDB project so I'm sure there are better ways to script a new database. It's a little more complex than some SQL scripts for sure! :)

## Design

### Database Structure

```.
├── model                       # Namespace for model designs, similar to a Dimension table
│   │                             Data is static and not changed by regular users
│   ├── rank.discord            # Ranks used on the Discord Server
│   ├── rank.police             # In-game Police ranks
│   ├── rank.racer              # In-game Racer ranks
│   ├── event.type              # Game-mode type for an event
│   ├── event.tier              # Vehicle tier of event
│   ├── event.player            # Side user can play
│   ├── event.singleplayer      # Singleplayer events
│   └── event.multiplayer       # Multiplayer events
├── store                       # Namespace for data storage
│   └── user.user               # User information

```
### API Call Functionality (recommended order)

`GET: test` - Test setup and connection to database before making changes (GET can be easily tested)

`PUT: api/db/ranks` - Create rank model tables with the ranks

`PUT: api/db/users` - Create a user collection and add the default (admin) users to it.

`PUT: api/db/events` - Add Event related models and list of in-game events

`PUT: api/db/times` - Create some (real) sample singleplayer event times


### TO-DO

- Multiplayer leaderboard
  - Requires a "total" per player collection and then a collection for each individual event entry
  
- Social media links (eg Discord, YouTube)
  - (Hopefully can load every social media entry)
  - Link
  - Image/icon (consider 512MB db limit)
  - Description
  - 3rd party, eg player YouTube channel
  
- Enhance singleplayer times (number of attempts? controller/kb/wheel used?)

- Vehicle List

- Start location list (for easier grouping and checking?)

...probably a lot more
