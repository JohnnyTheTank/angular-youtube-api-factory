"use strict";

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
                    key: _params.key,
                },
                url: "",
            };

            if (angular.isDefined(_params.part)) {
                youtubeSearchData.object.part = _params.part;
            }

            switch (_type) {
                case "videosFromChannelById":
                    if (angular.isUndefined(_params.part)) {
                        youtubeSearchData.object.part = "id,snippet";
                    }
                    youtubeSearchData.object.type = "video";
                    youtubeSearchData.object.channelId = _params.channelId;

                    if (angular.isDefined(_params.order)) {
                        youtubeSearchData.object.order = _params.order;
                    } else {
                        youtubeSearchData.object.order = "date";
                    }
                    if (angular.isDefined(_params.q)) {
                        youtubeSearchData.object.q = _params.q;
                    }
                    if (angular.isDefined(_params.maxResults)) {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }
                    if (angular.isDefined(_params.publishedAfter)) {
                        youtubeSearchData.object.publishedAfter = _params.publishedAfter;
                    }
                    if (angular.isDefined(_params.publishedBefore)) {
                        youtubeSearchData.object.publishedBefore = _params.publishedBefore;
                    }
                    if (angular.isDefined(_params.regionCode)) {
                        youtubeSearchData.object.regionCode = _params.regionCode;
                    }
                    if (angular.isDefined(_params.relevanceLanguage)) {
                        youtubeSearchData.object.relevanceLanguage = _params.relevanceLanguage;
                    }
                    if (angular.isDefined(_params.safeSearch)) {
                        youtubeSearchData.object.safeSearch = _params.safeSearch;
                    }
                    if (angular.isDefined(_params.videoEmbeddable)) {
                        youtubeSearchData.object.videoEmbeddable = _params.videoEmbeddable;
                    } else {
                        youtubeSearchData.object.videoEmbeddable = true;
                    }
                    if (angular.isDefined(_params.videoLicense)) {
                        youtubeSearchData.object.videoLicense = _params.videoLicense;
                    }
                    if (angular.isDefined(_params.videoSyndicated)) {
                        youtubeSearchData.object.videoSyndicated = _params.videoSyndicated;
                    }
                    if (angular.isDefined(_params.fields)) {
                        youtubeSearchData.object.fields = _params.fields;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl() + "search?";

                    if (angular.isDefined(_params.nextPageToken)) {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videosFromSearchByParams":
                    if (angular.isUndefined(_params.part)) {
                        youtubeSearchData.object.part = "id,snippet";
                    }
                    youtubeSearchData.object.type = "video";
                    if (angular.isDefined(_params.order)) {
                        youtubeSearchData.object.order = _params.order;
                    } else {
                        youtubeSearchData.object.order = "date";
                    }
                    if (angular.isDefined(_params.q)) {
                        youtubeSearchData.object.q = _params.q;
                    }
                    if (angular.isDefined(_params.location)) {
                        youtubeSearchData.object.location = _params.location;
                    }
                    if (angular.isDefined(_params.locationRadius)) {
                        youtubeSearchData.object.locationRadius = _params.locationRadius;
                    } else {
                        if (angular.isDefined(_params.location)) {
                            youtubeSearchData.object.locationRadius = "5000m"
                        }
                    }
                    if (angular.isDefined(_params.maxResults)) {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }
                    if (angular.isDefined(_params.publishedAfter)) {
                        youtubeSearchData.object.publishedAfter = _params.publishedAfter;
                    }
                    if (angular.isDefined(_params.publishedBefore)) {
                        youtubeSearchData.object.publishedBefore = _params.publishedBefore;
                    }
                    if (angular.isDefined(_params.regionCode)) {
                        youtubeSearchData.object.regionCode = _params.regionCode;
                    }
                    if (angular.isDefined(_params.relevanceLanguage)) {
                        youtubeSearchData.object.relevanceLanguage = _params.relevanceLanguage;
                    }
                    if (angular.isDefined(_params.safeSearch)) {
                        youtubeSearchData.object.safeSearch = _params.safeSearch;
                    }
                    if (angular.isDefined(_params.videoEmbeddable)) {
                        youtubeSearchData.object.videoEmbeddable = _params.videoEmbeddable;
                    } else {
                        youtubeSearchData.object.videoEmbeddable = true;
                    }
                    if (angular.isDefined(_params.videoLicense)) {
                        youtubeSearchData.object.videoLicense = _params.videoLicense;
                    }
                    if (angular.isDefined(_params.videoSyndicated)) {
                        youtubeSearchData.object.videoSyndicated = _params.videoSyndicated;
                    }
                    if (angular.isDefined(_params.fields)) {
                        youtubeSearchData.object.fields = _params.fields;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl() + "search?";
                    if (angular.isDefined(_params.nextPageToken)) {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videosFromPlaylistById":
                    if (angular.isUndefined(_params.part)) {
                        youtubeSearchData.object.part = "id,snippet";
                    }
                    youtubeSearchData.object.playlistId = _params.playlistId;
                    youtubeSearchData.object.type = "video";

                    if (angular.isDefined(_params.maxResults)) {
                        youtubeSearchData.object.maxResults = _params.maxResults;
                    }

                    youtubeSearchData.url = this.getApiBaseUrl() + "playlistItems?";
                    if (angular.isDefined(_params.nextPageToken)) {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "videoById":
                    if (angular.isUndefined(_params.part)) {
                        youtubeSearchData.object.part = "id,snippet,contentDetails,statistics";
                    }
                    youtubeSearchData.object.id = _params.videoId;

                    youtubeSearchData.url = this.getApiBaseUrl() + "videos?";
                    if (angular.isDefined(_params.nextPageToken)) {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;

                case "channelById":
                    if (angular.isUndefined(_params.part)) {
                        youtubeSearchData.object.part = "id,snippet";
                    }
                    youtubeSearchData.object.type = "channel";

                    youtubeSearchData.url = this.getApiBaseUrl() + "search?";
                    if (angular.isDefined(_params.nextPageToken)) {
                        youtubeSearchData.url += "pageToken=" + _params.nextPageToken + "&";
                    }
                    break;
            }

            return youtubeSearchData;
        };
    });