/*
 * Do not edit this file manually.
 * This file is generated by "build/data-api/generate-endpoint-js".
 */
(function(window) {

var DataAPI = window.MT.DataAPI.v1;

DataAPI.on('initialize', function() {
    this.generateEndpointMethods(
[
   {
      "verb" : "POST",
      "id" : "authentication",
      "route" : "/authentication"
   },
   {
      "verb" : "POST",
      "id" : "token",
      "route" : "/token"
   },
   {
      "verb" : "GET",
      "id" : "list_blogs",
      "route" : "/users/:user_id/sites"
   },
   {
      "verb" : "GET",
      "id" : "list_comments_for_entries",
      "route" : "/sites/:site_id/entries/:entry_id/comments"
   },
   {
      "verb" : "GET",
      "id" : "list_trackbacks_for_entries",
      "route" : "/sites/:site_id/entries/:entry_id/trackbacks"
   },
   {
      "verb" : "GET",
      "id" : "stats_provider",
      "route" : "/sites/:site_id/stats/provider"
   },
   {
      "verb" : "GET",
      "id" : "stats_pageviews_for_path",
      "route" : "/sites/:site_id/stats/path/pageviews"
   },
   {
      "verb" : "GET",
      "id" : "stats_visits_for_path",
      "route" : "/sites/:site_id/stats/path/visits"
   },
   {
      "verb" : "GET",
      "id" : "stats_pageviews_for_date",
      "route" : "/sites/:site_id/stats/date/pageviews"
   },
   {
      "verb" : "GET",
      "id" : "stats_visits_for_date",
      "route" : "/sites/:site_id/stats/date/visits"
   },
    {
        "id": "list_endpoints",
        "route": "/endpoints",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "authenticate",
        "route": "/authentication",
        "verb": "POST",
        "resources": null
    },
    {
        "id": "get_token",
        "route": "/token",
        "verb": "POST",
        "resources": null
    },
    {
        "id": "revoke_authentication",
        "route": "/authentication",
        "verb": "DELETE",
        "resources": null
    },
    {
        "id": "revoke_token",
        "route": "/token",
        "verb": "DELETE",
        "resources": null
    },
    {
        "id": "get_user",
        "route": "/users/:user_id",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "update_user",
        "route": "/users/:user_id",
        "verb": "PUT",
        "resources": [
            "user"
        ]
    },
    {
        "id": "list_blogs_for_user",
        "route": "/users/:user_id/sites",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "get_blog",
        "route": "/sites/:blog_id",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_entries",
        "route": "/sites/:site_id/entries",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "create_entry",
        "route": "/sites/:site_id/entries",
        "verb": "POST",
        "resources": [
            "entry"
        ]
    },
    {
        "id": "get_entry",
        "route": "/sites/:site_id/entries/:entry_id",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "update_entry",
        "route": "/sites/:site_id/entries/:entry_id",
        "verb": "PUT",
        "resources": [
            "entry"
        ]
    },
    {
        "id": "delete_entry",
        "route": "/sites/:site_id/entries/:entry_id",
        "verb": "DELETE",
        "resources": null
    },
    {
        "id": "list_categories",
        "route": "/sites/:site_id/categories",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_comments",
        "route": "/sites/:site_id/comments",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_comments_for_entry",
        "route": "/sites/:site_id/entries/:entry_id/comments",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "create_comment",
        "route": "/sites/:site_id/entries/:entry_id/comments",
        "verb": "POST",
        "resources": [
            "comment"
        ]
    },
    {
        "id": "create_reply_comment",
        "route": "/sites/:site_id/entries/:entry_id/comments/:comment_id/replies",
        "verb": "POST",
        "resources": [
            "comment"
        ]
    },
    {
        "id": "get_comment",
        "route": "/sites/:site_id/comments/:comment_id",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "update_comment",
        "route": "/sites/:site_id/comments/:comment_id",
        "verb": "PUT",
        "resources": [
            "comment"
        ]
    },
    {
        "id": "delete_comment",
        "route": "/sites/:site_id/comments/:comment_id",
        "verb": "DELETE",
        "resources": null
    },
    {
        "id": "list_trackbacks",
        "route": "/sites/:site_id/trackbacks",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_trackbacks_for_entry",
        "route": "/sites/:site_id/entries/:entry_id/trackbacks",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "get_trackback",
        "route": "/sites/:site_id/trackbacks/:ping_id",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "update_trackback",
        "route": "/sites/:site_id/trackbacks/:ping_id",
        "verb": "PUT",
        "resources": [
            "trackback"
        ]
    },
    {
        "id": "delete_trackback",
        "route": "/sites/:site_id/trackbacks/:ping_id",
        "verb": "DELETE",
        "resources": null
    },
    {
        "id": "upload_asset",
        "route": "/sites/:site_id/assets/upload",
        "verb": "POST",
        "resources": null
    },
    {
        "id": "list_permissions",
        "route": "/users/:user_id/permissions",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "publish_entries",
        "route": "/publish/entries",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "get_stats_provider",
        "route": "/sites/:site_id/stats/provider",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_stats_pageviews_for_path",
        "route": "/sites/:site_id/stats/path/pageviews",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_stats_visits_for_path",
        "route": "/sites/:site_id/stats/path/visits",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_stats_pageviews_for_date",
        "route": "/sites/:site_id/stats/date/pageviews",
        "verb": "GET",
        "resources": null
    },
    {
        "id": "list_stats_visits_for_date",
        "route": "/sites/:site_id/stats/date/visits",
        "verb": "GET",
        "resources": null
    }
]
    );
});

})(window);
