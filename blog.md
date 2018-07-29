---
published: true
layout: page
header-display: 'false'
title-display: 'true'
toc: 'false'
title: Blog
subtitle: Site that used the Article Index include
---
Displaying the Article Index:

```
{% raw %}
{% for post in site.posts limit: 30 %}
{% include article_index.html %}
{% endfor %}
{% if posts.size > 30 %} [all posts](/archive) {% endif %}
{% endraw %}
```

{% for post in site.posts limit: 30 %}
{% include article_index.html %}
{% endfor %}
{% if posts.size > 30 %} [all posts](/archive) {% endif %}