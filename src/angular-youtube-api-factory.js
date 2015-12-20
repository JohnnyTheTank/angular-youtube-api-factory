"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-youtube-api-factory
 @licence MIT
 */

angular.module("jtt_youtube", [])
    .factory('youtubeFactory', ['$http', 'youtubeSearchDataService', function ($http, youtubeSearchDataService) {

        var youtubeFactory = {};

        youtubeFactory.getVideosFromChannelById = function (_params) {

            var youtubeSearchData = youtubeSearchDataService.getNew("videosFromChannelById", _params);

            return $http({
                method: 'GET',
                url: youtubeSearchData.url,
                params: youtubeSearchData.object,
            });
        };

        youtubeFactory.getVideosFromSearchByParams = function (_params) {

            var youtubeSearchData = youtubeSearchDataService.getNew("videosFromSearchByParams", _params);

            return $http({
                method: 'GET',
                url: youtubeSearchData.url,
                params: youtubeSearchData.object,
            });
        };

        youtubeFactory.getVideosFromPlaylistById = function (_params) {

            var youtubeSearchData = youtubeSearchDataService.getNew("videosFromPlaylistById", _params);

            return $http({
                method: 'GET',
                url: youtubeSearchData.url,
                params: youtubeSearchData.object,
            });
        };

        youtubeFactory.getChannelById = function (_params) {

            var youtubeSearchData = youtubeSearchDataService.getNew("channelById", _params);

            return $http({
                method: 'GET',
                url: youtubeSearchData.url,
                params: youtubeSearchData.object,
            });
        };

        youtubeFactory.getVideoById = function (_params) {

            var youtubeSearchData = youtubeSearchDataService.getNew("videoById", _params);

            return $http({
                method: 'GET',
                url: youtubeSearchData.url,
                params: youtubeSearchData.object,
            });
        };

        return youtubeFactory;
    }])
    .service('youtubeSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://content.googleapis.com/youtube/v3/";
        };

        this.getNew = function (_type, _params) {

            var youtubeSearchData = {
                object: {
                    part: "id,snippet",
                    key: _params.key,
                },
                url: "",
            };

            switch (_type) {
                case "videosFromChannelById":
                    youtubeSearchData.object.type = "video";
                    youtubeSearchData.object.channelId = _params.channelId;

                    if (typeof _params.order !== "undefined") {
                        youtubeSearchData.object.order = _params.order;
                    } else {
                        youtubeSearchData.object.order = "date";
                    }
                    if (typeof _params.q !== "undefined") {
                        youtubeSearchData.object.q = _params.q;
                    }
                    if (typeof _params.maxResults !== "undefined") {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl() + "search?";

                    if (typeof _params.nextPageToken !== "undefined") {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videosFromSearchByParams":
                    youtubeSearchData.object.type = "video";
                    if (typeof _params.order !== "undefined") {
                        youtubeSearchData.object.order = _params.order;
                    } else {
                        youtubeSearchData.object.order = "date";
                    }
                    if (typeof _params.q !== "undefined") {
                        youtubeSearchData.object.q = _params.q;
                    }
                    if (typeof _params.location !== "undefined") {
                        youtubeSearchData.object.location = _params.location;
                    }
                    if (typeof _params.locationRadius !== "undefined") {
                        youtubeSearchData.object.locationRadius = _params.locationRadius;
                    } else {
                        if (typeof _params.location !== "undefined") {
                            youtubeSearchData.object.locationRadius = "5000m"
                        }
                    }
                    if (typeof _params.maxResults !== "undefined") {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl()+"search?";
                    if (typeof _params.nextPageToken !== "undefined") {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videosFromPlaylistById":
                    youtubeSearchData.object.playlistId = _params.playlistId;
                    youtubeSearchData.object.type = "video";

                    if (typeof _params.maxResults !== "undefined") {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl()+"playlistItems?";
                    if (typeof _params.nextPageToken !== "undefined") {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videoById":
                    youtubeSearchData.object.id = _params.videoId;

                    youtubeSearchData.url = this.getApiBaseUrl()+"videos?";
                    if (typeof _params.nextPageToken !== "undefined") {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "channelById":
                    youtubeSearchData.object.type = "channel";

                    youtubeSearchData.url = this.getApiBaseUrl()+"search?";
                    if (typeof _params.nextPageToken !== "undefined") {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;
            }

            return youtubeSearchData;
        };
    });