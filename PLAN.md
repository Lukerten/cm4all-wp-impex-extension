# current plan:

> ### Impex Outputs "wp:post_content" as
>
>```html
><h2>haha</h2>
><p>hoho</p>
>```

> ### Gutenberg Representation could be like
>
>```html
><!-- wp:heading -->\n
><h2>haha</h2>\n
><!-- /wp:heading -->\n
>\n
><!-- wp:paragraph -->\n
><p>hoho</p>\n
><!-- /wp:paragraph -->
>```

# Plan:
<sl>
<li> Wrap statement in corresponding wp-block on import </li>
<li> Ignore Meta Statements for now </li>
</sl>

### Impex Output Looks Like this for a Elementor Block

```js

{
        "title": "Elementor #7",
        "link": null,
        "pubDate": false,
        "dc:creator": "admin",
        "guid": null,
        "guid_isPermaLink": false,
        "description": null,
        "wp:post_content": " <h2> haha </h2> <p> hoho </p>",
        "wp:post_excerpt": "",
        "wp:post_id": 7,
        "wp:post_date": "2022-07-11 07:34:07",
        "wp:post_date_gmt": "2022-07-11 07:34:07",
        "wp:post_modified_gmt": "2022-07-11 07:35:50",
        "wp:comment_status": "closed",
        "wp:ping_status": "closed",
        "wp:post_name": "elementor-7",
        "wp:status": "publish",
        "wp:post_parent": 0,
        "wp:menu_order": 0,
        "wp:post_type": "page",
        "wp:post_password": "",
        "wp:is_sticky": 0,
        "wp:attachment_url": null,
        "taxonomy_terms": [],
        "meta": [
          {
            "wp:term_meta_key": "_elementor_edit_mode",
            "wp:term_meta_value": "builder"
          },
          {
            "wp:term_meta_key": "_elementor_template_type",
            "wp:term_meta_value": "wp-post"
          },
          {
            "wp:term_meta_key": "_elementor_version",
            "wp:term_meta_value": "3.6.7"
          },
          {
            "wp:term_meta_key": "_edit_lock",
            "wp:term_meta_value": "1657528233:1"
          },
          {
            "wp:term_meta_key": "_wp_page_template",
            "wp:term_meta_value": "default"
          },
          {
            "wp:term_meta_key": "_elementor_data",
            "wp:term_meta_value": "[{\"id\":\"161b0d5\",\"elType\":\"section\",\"settings\":[],\"elements\":[{\"id\":\"055bf8a\",\"elType\":\"column\",\"settings\":{\"_column_size\":100,\"_inline_size\":null},\"elements\":[{\"id\":\"723114c\",\"elType\":\"widget\",\"settings\":{\"title\":\"Elementor Heading\"},\"elements\":[],\"widgetType\":\"heading\"},{\"id\":\"037604e\",\"elType\":\"widget\",\"settings\":{\"editor\":\"<p>geschachtelter Text<\\/p>\"},\"elements\":[],\"widgetType\":\"text-editor\"}],\"isInner\":false}],\"isInner\":false}]"
          },
          {
            "wp:term_meta_key": "_elementor_page_assets",
            "wp:term_meta_value": "a:0:{}"
          }
        ],
        "comments": []
      }


```

### In Gutenberg the same thing should be structured like this

```js
{
"title": "Elementor #7",
"link": null,
"pubDate": false,
"dc:creator": "admin",
"guid": null,
"guid_isPermaLink": false,
"description": null,
"wp:post_content": "<!-- wp:heading -->\n<h2>haha</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>hoho</p>\n<!-- /wp:paragraph -->",
"wp:post_excerpt": "",
"wp:post_id": 7,
"wp:post_date": "2022-07-11 07:34:07",
"wp:post_date_gmt": "2022-07-11 07:34:07",
"wp:post_modified_gmt": "2022-07-11 08:44:13",
"wp:comment_status": "closed",
"wp:ping_status": "closed",
"wp:post_name": "elementor-7",
"wp:status": "publish",
"wp:post_parent": 0,
"wp:menu_order": 0,
"wp:post_type": "page",
"wp:post_password": "",
"wp:is_sticky": 0,
"wp:attachment_url": null,
"taxonomy_terms": [],
"meta": [
{
"wp:term_meta_key": "\_elementor_template_type",
"wp:term_meta_value": "wp-post"
},
{
"wp:term_meta_key": "\_elementor_version",
"wp:term_meta_value": "3.6.7"
},
{
"wp:term_meta_key": "\_edit_lock",
"wp:term_meta_value": "1657529036:1"
},
{
"wp:term_meta_key": "\_wp_page_template",
"wp:term_meta_value": "default"
},
{
"wp:term_meta_key": "\_elementor_data",
"wp:term_meta_value": "[{\"id\":\"161b0d5\",\"elType\":\"section\",\"settings\":[],\"elements\":[{\"id\":\"055bf8a\",\"elType\":\"column\",\"settings\":{\"\_column_size\":100,\"\_inline_size\":null},\"elements\":[{\"id\":\"723114c\",\"elType\":\"widget\",\"settings\":{\"title\":\"Elementor Heading\"},\"elements\":[],\"widgetType\":\"heading\"},{\"id\":\"037604e\",\"elType\":\"widget\",\"settings\":{\"editor\":\"<p>geschachtelter Text<\\/p>\"},\"elements\":[],\"widgetType\":\"text-editor\"}],\"isInner\":false}],\"isInner\":false}]"
},
{
"wp:term_meta_key": "\_elementor_page_assets",
"wp:term_meta_value": "a:0:{}"
}
],
"comments": []
},
```
