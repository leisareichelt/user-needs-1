---
title: Index
layout: default
---

<header>
  <h1>All maps</h1>
</header>

{% for mapname in site.data.map.name %}
  Name: {{  mapname }}
{% endfor %}
