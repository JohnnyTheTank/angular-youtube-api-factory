var app = angular.module("app", ['jtt_youtube']);
app.controller('controller', ['$scope', 'youtubeFactory', function($scope, youtubeFactory) {

    var _apiKey = "<YOUR_YOUTUBE_API_KEY>";

    youtubeFactory.getVideosFromChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        maxResults: "50", // (optional) default: 5
        key: _apiKey,
    }).success(function (_data) {
        console.info("videos from channel by id", _data);
    });

    youtubeFactory.getVideosFromSearchByString({
        q: "fcbayern",
        maxResults: "50", // (optional) default: 5
        key: _apiKey,
    }).success(function (_data) {
        console.info("videos from search by string", _data);
    });

    youtubeFactory.getVideosFromPlaylistById({
        playlistId: "PLNLa2lbKPczGCueOYxjrwYDuNTBtQveK0",
        maxResults: "50", // (optional) default: 5
        key: _apiKey,
    }).success(function (_data) {
        console.info("videos from playlist by id", _data);
    });

    youtubeFactory.getVideoById({
        videoId: "rG-haoIhH9o",
        key: _apiKey,
    }).success(function (_data) {
        console.info("video by id", _data);
    });

    youtubeFactory.getChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        key: _apiKey,
    }).success(function (_data) {
        console.info("channel by id", _data);
    });


}]);
