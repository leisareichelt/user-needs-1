# user-needs

** This is a [Jekyll](http://jekyllrb.com/) site which will generate a user need map that can be previewed using [Github pages.](https://pages.github.com/)**

## You'll need:

- A Github account
- A Github repository
- If you'd like to preview the site locally, you'll also need Jekyll.

## Setup

### Set up a new repository
[Follow the steps here to create a new repository](https://pages.github.com/)

### Clone this repository

git clone git@github.com:gemmaleigh/user-needs.git

## Create a map

### Either edit an existing file, or create a new map data file.

* Maps are generated from `mapname.json` in `_data/maps/mapname.json`

* There's a sample file in `sample-map-name.json`

* **Create one json file per map**

The first item in the map file is the name:

    "name": "Sample map title"

   This name will appear on your map index page.

#### Editing an existing map data file

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

### Add a new map file

In the `_maps` folder - look at the example map `sample-map-name.md`.

You will need to create a map file here for each map.
Each map will need a [YAML front matter block](http://jekyllrb.com/docs/frontmatter/) at the top of each file.

It should look like this:

 * the filename of the map data file at the top
 * the map title (matching the one in mapname.json)

---

      data-maps-filename: sample-map-name
      title: Getting work and being in work


### Add a need file

In the `_needs` folder - look the example need; `locations-for-work.md`.

You will need to create a need file here for each need. Like before, each map will need a [YAML front matter block](http://jekyllrb.com/docs/frontmatter/) at the top of each file.

It should look like this:
- the filename of the map data file at the top
- and a need title (matching the one in mapname.json)

---
        data-maps-filename: sample-map-name
        title: I need to know what locations are feasible for me to consider for work?


## Publish to Github pages

    git push -f origin master:gh-pages

## View on Github pages

http://username.github.io/project-name

e.g. for this example
http://gemmaleigh.github.io/user-needs
