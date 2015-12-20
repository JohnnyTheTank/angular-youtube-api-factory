**angular-youtube-api-factory** is an angularjs module with a youtube api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))


## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-youtube-api-factory`
2. Add `jtt_youtube` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-youtube-api-factory/src/angular-youtube-api-factory.js"></script>
    ```

4. Use the factory `youtubeFactory`.


### factory methods

#### getVideos


```js
//https://developers.google.com/youtube/v3/docs/channels/list
youtubeFactory.getVideosFromChannelById({
    channelId: "<CHANNEL_ID>",
    q: "<SEARCH_STRING>", // (optional) filters the channel result with your search string
    order: "<ORDER_TYPE>", // (optional) default: 'date'
    maxResults: "<MAX_RESULTS>", // (optional) correct values: 0-50 // default: 5
    pageToken: "<PAGE_TOKEN>", // (optional)
    key: "<YOUR_API_KEY>",
}).success(function (_data) {
    //on success
}).error(function (_data) {
    //on error
});

```
```js
//docs: https://developers.google.com/youtube/v3/docs/search/list
youtubeFactory.getVideosFromSearchByString({
    q: "<SEARCH_STRING>", //search string
    order: "<ORDER_TYPE>", // (optional) default: 'date'
    maxResults: "<MAX_RESULTS>", // (optional) correct values: 0-50 // default: 5
    pageToken: "<PAGE_TOKEN>", // (optional)
    key: "<YOUR_API_KEY>",
}).success(function (_data) {
    //on success
}).error(function (_data) {
    //on error
});
```

```js
//docs: https://developers.google.com/youtube/v3/docs/playlists/list
youtubeFactory.getVideosFromPlaylistById({
    playlistId: "<PLAYLIST_ID>",
    maxResults: "<MAX_RESULTS>", // (optional) correct values: 0-50 // default: 5
    pageToken: "<PAGE_TOKEN>", // (optional)
    key: "<YOUR_API_KEY>",
}).success(function (_data) {
    //on success
}).error(function (_data) {
    //on error
});
```


#### getChannel
```js
// docs: https://developers.google.com/youtube/v3/docs/search/list
youtubeFactory.getChannelById({
    channelId: "<CHANNEL_ID>",
    pageToken: "<PAGE_TOKEN>", // (optional)
    key: "<YOUR_API_KEY>",
}).success(function (_data) {
    //on success
}).error(function (_data) {
    //on error
});
```


## Youtube Data JSON API
* Docs: https://developers.google.com/youtube/v3/docs/
* API Explorer: https://developers.google.com/apis-explorer/#p/youtube/v3/
* Channel-ID Converter: http://kid.yt.j.pfweb.eu/


## License
MIT
