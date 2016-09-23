**angular-youtube-api-factory** is an angularjs module with a youtube api factory.

[![npm version](https://badge.fury.io/js/angular-youtube-api-factory.svg)](https://badge.fury.io/js/angular-youtube-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-youtube-api-factory.svg)](https://badge.fury.io/bo/angular-youtube-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-youtube-api-factory`
    2. `npm install --save angular-youtube-api-factory`
    3. download [angular-youtube-api-factory.zip](https://github.com/JohnnyTheTank/angular-youtube-api-factory/zipball/master)
2. Add **`jtt_youtube`** to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-youtube-api-factory/dist/angular-youtube-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-youtube-api-factory/dist/angular-youtube-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-youtube-api-factory.min.js"></script>
    ```
4. Use `youtubeFactory` via dependency injection


### factory methods

#### getVideo
```js
//docs: https://developers.google.com/youtube/v3/docs/videos/list
youtubeFactory.getVideoById({
    videoId: "<VIDEO_ID>",
    part: "<YOUR_PART>", // (optional) default: 'id,snippet,contentDetails,statistics'
    key: "<YOUR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getVideos
```js
//docs: https://developers.google.com/youtube/v3/docs/channels/list
youtubeFactory.getVideosFromChannelById({
    channelId: "<CHANNEL_ID>", // converter: http://johnnythetank.github.io/youtube-channel-name-converter/
    q: "<SEARCH_STRING>", // (optional) search string
    location: "<SEARCH_LOCATION>", // (optional) The parameter value is a string that specifies latitude/longitude coordinates e.g. '37.42307,-122.08427'.
    locationRadius: "<LOCATION_RADIUS>", // (optional) valid values e.g. '1500m', '5km', '10000ft', and '0.75mi' | default: '5000m'
    order: "<ORDER_TYPE>", // (optional) valid values: 'date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount' | default: 'date'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    publishedAfter: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    publishedBefore: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    regionCode: "<REGION_CODE>", // (optional) ISO 3166-1 alpha-2 country code
    relevanceLanguage: "<RELEVANCE_LANGUAGE>", // (optional) ISO 639-1 two-letter language code
    safeSearch: "<SAFE_SEARCH>", // (optional) valid values: 'moderate','none','strict' | defaut: 'moderate'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    videoEmbeddable: "<VIDEO_EMBEDDABLE>", // (optional) valid values: 'true', 'any' | default: 'true'
    videoLicense: "<VIDEO_LICENSE>", // (optional) valid values: 'any','creativeCommon','youtube'
    videoSyndicated: "<VIDEO_SYNDICATED>", // (optional) restrict a search to only videos that can be played outside youtube.com. valid values: 'any','true' | default: 'any'
    fields: "<FIELDS>", // (optional) Selector specifying which fields to include in a partial response
    nextPageToken: "<NEXT__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    prevPageToken: "<PREV__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    part: "<PART>", // (optional) default: 'id,snippet'
    key: "<YOUR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
//docs: https://developers.google.com/youtube/v3/docs/search/list
youtubeFactory.getVideosFromSearchByParams({
    q: "<SEARCH_STRING>", // (optional) search string
    location: "<SEARCH_LOCATION>", // (optional) The parameter value is a string that specifies latitude/longitude coordinates e.g. '37.42307,-122.08427'.
    locationRadius: "<LOCATION_RADIUS>", // (optional) valid values e.g. '1500m', '5km', '10000ft', and '0.75mi' | default: '5000m'
    order: "<ORDER_TYPE>", // (optional) valid values: 'date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount' | default: 'date'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    publishedAfter: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    publishedBefore: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    regionCode: "<REGION_CODE>", // (optional) ISO 3166-1 alpha-2 country code
    relevanceLanguage: "<RELEVANCE_LANGUAGE>", // (optional) ISO 639-1 two-letter language code
    safeSearch: "<SAFE_SEARCH>", // (optional) valid values: 'moderate','none','strict' | defaut: 'moderate'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    videoEmbeddable: "<VIDEO_EMBEDDABLE>", // (optional) valid values: 'true', 'any' | default: 'true'
    videoLicense: "<VIDEO_LICENSE>", // (optional) valid values: 'any','creativeCommon','youtube'
    videoSyndicated: "<VIDEO_SYNDICATED>", // (optional) restrict a search to only videos that can be played outside youtube.com. valid values: 'any','true' | default: 'any'
    fields: "<FIELDS>", // (optional) Selector specifying which fields to include in a partial response
    nextPageToken: "<NEXT__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    prevPageToken: "<PREV__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    part: "<PART>", // (optional) default: 'id,snippet'
    key: "<YOUR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
//docs: https://developers.google.com/youtube/v3/docs/playlists/list
youtubeFactory.getVideosFromPlaylistById({
    playlistId: "<PLAYLIST_ID>",
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 // default: 5
    nextPageToken: "<NEXT__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    prevPageToken: "<PREV__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    part: "<PART>", // (optional) default: 'id,snippet'
    key: "<YOUR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```


#### getChannel
```js
// docs: https://developers.google.com/youtube/v3/docs/search/list
youtubeFactory.getChannelById({
    channelId: "<CHANNEL_ID>", // converter: http://johnnythetank.github.io/youtube-channel-name-converter/
    nextPageToken: "<NEXT__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    prevPageToken: "<PREV__PAGE_TOKEN>", // (optional) either `nextPageToken` or `prevPageToken`
    part: "<PART>", // (optional) default: 'id,snippet'
    key: "<YOUR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```


## Youtube Data JSON API
* Docs: https://developers.google.com/youtube/v3/docs/
* API Explorer: https://developers.google.com/apis-explorer/#p/youtube/v3/
* Youtube Username to Channel ID Converter: http://johnnythetank.github.io/youtube-channel-name-converter/

## More angular-api-factories
[bandsintown](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory) - [dailymotion](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory) - [facebook](https://github.com/JohnnyTheTank/angular-facebook-api-factory) - [flickr](https://github.com/JohnnyTheTank/angular-flickr-api-factory) - [footballdata](https://github.com/JohnnyTheTank/angular-footballdata-api-factory) - [github](https://github.com/JohnnyTheTank/angular-github-api-factory) - [openweathermap](https://github.com/JohnnyTheTank/angular-openweathermap-api-factory) - [tumblr](https://github.com/JohnnyTheTank/angular-tumblr-api-factory) - [vimeo](https://github.com/JohnnyTheTank/angular-vimeo-api-factory) - [wikipedia](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory) - **youtube**

## License
MIT
