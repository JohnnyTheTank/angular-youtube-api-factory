/**
    @name: angular-youtube-api-factory 
    @version: 0.6.2 (23-09-2016) 
    @author: Jonathan Hornung 
    @url: https://github.com/JohnnyTheTank/angular-youtube-api-factory#readme 
    @license: MIT
*/
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
        
        this.fillDataInObjectByList = function (_object, _params, _list) {
            
            angular.forEach(_list, function (value, key) {
                if (typeof value !== "undefined"  && value.constructor === Array) {
                    if (angular.isDefined(_params[value[0]])) {
                        _object.object[value[0]] = _params[value[0]];
                    } else {
                        _object.object[value[0]] = value[1];
                    }
                } else {
                    if (angular.isDefined(_params[value])) {
                        _object.object[value] = _params[value];
                    }
                }
            });
            
            return _object;
        };
        
        this.getNew = function (_type, _params) {
            
            var youtubeSearchData = {
                object: {
                    key: _params.key,
                },
                url: '',
            };
            
            switch (_type) {
                case 'videosFromChannelById':
                    
                    youtubeSearchData = this.fillDataInObjectByList(youtubeSearchData, _params, [
                        ['part', 'id,snippet'],
                        ['type', 'video'],
                        ['order', 'date'],
                        ['videoEmbeddable', true],
                        'channelId',
                        'q',
                        'maxResults',
                        'publishedAfter',
                        'publishedBefore',
                        'regionCode',
                        'relevanceLanguage',
                        'safeSearch',
                        'videoLicense',
                        'videoSyndicated',
                        'fields'
                    ]);
                    
                    youtubeSearchData.url = this.getApiBaseUrl() + 'search?';
    
                    if (_params.nextPageToken || _params.prevPageToken) {
                        youtubeSearchData.url += 'pageToken=' + (_params.nextPageToken || _params.prevPageToken) + '&';
                    }
                    break;
                
                case 'videosFromSearchByParams':
    
                    youtubeSearchData = this.fillDataInObjectByList(youtubeSearchData, _params, [
                        ['part', 'id,snippet'],
                        ['type', 'video'],
                        ['order', 'date'],
                        ['videoEmbeddable', true],
                        'location',
                        'q',
                        'maxResults',
                        'publishedAfter',
                        'publishedBefore',
                        'regionCode',
                        'relevanceLanguage',
                        'safeSearch',
                        'videoLicense',
                        'videoSyndicated',
                        'fields'
                    ]);
                    
                    if (angular.isDefined(_params.locationRadius)) {
                        youtubeSearchData.object.locationRadius = _params.locationRadius;
                    } else {
                        if (angular.isDefined(_params.location)) {
                            youtubeSearchData.object.locationRadius = '5000m'
                        }
                    }
                    
                    youtubeSearchData.url = this.getApiBaseUrl() + 'search?';
                    if (_params.nextPageToken || _params.prevPageToken) {
                        youtubeSearchData.url += 'pageToken=' + (_params.nextPageToken || _params.prevPageToken) + '&';
                    }
                    break;
                
                case 'videosFromPlaylistById':
    
                    youtubeSearchData = this.fillDataInObjectByList(youtubeSearchData, _params, [
                        ['part', 'id,snippet'],
                        ['type', 'video'],
                        'playlistId',
                        'maxResults',
                        'fields'
                    ]);
                    
                    youtubeSearchData.url = this.getApiBaseUrl() + 'playlistItems?';
                    if (_params.nextPageToken || _params.prevPageToken) {
                        youtubeSearchData.url += 'pageToken=' + (_params.nextPageToken || _params.prevPageToken) + '&';
                    }
                    break;
                
                case 'videoById':
                    youtubeSearchData = this.fillDataInObjectByList(youtubeSearchData, _params, [
                        ['part', 'id,snippet,contentDetails,statistics'],
                    ]);
                    
                    youtubeSearchData.object.id = _params.videoId;
                    
                    youtubeSearchData.url = this.getApiBaseUrl() + 'videos?';
                    if (_params.nextPageToken || _params.prevPageToken) {
                        youtubeSearchData.url += 'pageToken=' + (_params.nextPageToken || _params.prevPageToken) + '&';
                    }
                    break;
                
                case 'channelById':
                    youtubeSearchData = this.fillDataInObjectByList(youtubeSearchData, _params, [
                        ['part', 'id,snippet'],
                        ['type', 'channel']
                    ]);
                    
                    youtubeSearchData.url = this.getApiBaseUrl() + 'search?';
                    if (_params.nextPageToken || _params.prevPageToken) {
                        youtubeSearchData.url += 'pageToken=' + (_params.nextPageToken || _params.prevPageToken) + '&';
                    }
                    break;
            }
            
            return youtubeSearchData;
        };
    });