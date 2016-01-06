var app = angular.module("app", ['jtt_youtube']);
app.controller('controller', ['$scope', 'youtubeFactory', function($scope, youtubeFactory) {

    var _apiKey = "<YOUR_YOUTUBE_API_KEY>";

    youtubeFactory.getVideosFromChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        maxResults: "50",
        key: _apiKey,
    }).then(function (_data) {
        console.info("videos from channel by id", _data);
    });

    youtubeFactory.getVideosFromSearchByParams({
        q: "fcbayern",
        maxResults: "50",
        key: _apiKey,
    }).then(function (_data) {
        console.info("videos from search by q", _data);
    });

    youtubeFactory.getVideosFromSearchByParams({
        location: "37.42307,-122.08427",
        locationRadius: "1000m",
        maxResults: "50",
        key: _apiKey,
    }).then(function (_data) {
        console.info("videos from search by location", _data);
    });

    youtubeFactory.getVideosFromPlaylistById({
        playlistId: "PLNLa2lbKPczGCueOYxjrwYDuNTBtQveK0",
        maxResults: "50",
        key: _apiKey,
    }).then(function (_data) {
        console.info("videos from playlist by id", _data);
    });

    youtubeFactory.getVideoById({
        videoId: "rG-haoIhH9o",
        key: _apiKey,
    }).then(function (_data) {
        console.info("video by id", _data);
    });

    youtubeFactory.getChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        key: _apiKey,
    }).then(function (_data) {
        console.info("channel by id", _data);
    });


}]);
