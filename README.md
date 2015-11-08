## angular-youtube-api-factory
angularjs module with a youtube api factory.

### Information
* Author: Jonathan Hornung
* GitHub: https://github.com/JohnnyTheTank

### Usage

#### dependencies
1. add 'jtt_youtube' to your module dependencies
2. add 'youtubeFactory' to your dependencies

#### factory functions

##### getVideos

    getVideosFromChannelById({
        channelId: <CHANNEL_ID>,
        order: <ORDER-TYPE>, // (optional) default: 'date'
        q: <SEARCH_STRING>, // (optional) filters the channel result with your search string (=q)
        maxResults: <MAX_RESULTS>, // (optional) default: 20
        key: key: <YOUR_API_KEY>,
    });

    getVideosFromSearchByString({
            channelId: <CHANNEL_ID>,
            q: <SEARCH_STRING>, //optional, filters the channel result with your search string (=q)
            maxResults: <MAX_RESULTS>,
            key: key: <YOUR_API_KEY>,

        });


getVideosFromPlaylistById( {} )

##### getChannel
* getChannelById( {} )

Every function requires a youtubeSearchObject
for example:

    {
        part: "id,snippet",
        type: "video",
        q: "tophits",
        order: "date",
        maxResults: 4,
        key: <YOUR_API_KEY>
    }

Read the youtube documentation for more information: https://developers.google.com/youtube/v3/docs/

### Youtube JSON API

* Doku: https://developers.google.com/youtube/v3/docs/
* Api Explorer: https://developers.google.com/apis-explorer/#p/youtube/v3/
* Kanal-ID Converter: http://kid.yt.j.pfweb.eu/
