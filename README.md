# user-needs

This is a jekyll site which will geneate a user need map, which can be previewed using github pages.

## Clone this repo

git clone git@github.com:gemmaleigh/user-needs.git

### Add a map data file

Maps are generated from mapname.json in _data/maps/mapname.json

Either edit an existing file (see sample-map-name.json) or create a new file.

Create one json file per map.

The first item in the map file is the name:

  "name": "Sample map title",

This will appear on your map index page.

#### Editing the map data file

Add tasks, subtasks, user needs and related features to the JSON file in the following format.

{
  "name": "Sample task name",
  "subtasks": [
    {
      "name": "Subtask name",
      "needs": [
        {
          "1": "need 1",
          "2": "need 2"
        }
      ],
      "features": [
        {
          "Name of link one": "http://www.relatedlinkone.com",
          "Name of link two": "http://www.relatedlinktwo.com"
        }
      ]
    }
  ]
}

### Add a map file

In _maps - look at sample-map-name.md, you will need to create a map file here for each map
- with the filename of the map data file at the top
- and a map title (matching the one in mapname.json)

---
data-maps-filename: getting-work
title: Getting work and being in work
---

### Add a need file

In _needs - look at locations-for-work.md, you will need to create a need file here for each need
- with the filename of the map data file at the top
- and a need title (matching the one in mapname.json)

---
data-maps-filename: getting-work
title: I need to know what locations are feasible for me to consider for work?
---

## Publish to Github pages

git push -f origin master:gh-pges

## View on Github pages

http://username.github.io/project-name

e.g. for this example
http://gemmaleigh.github.io/user-needs

