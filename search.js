"use strict";
 //finish hooking the search button
 // grab everything needed from youtube sample code
 //console log results
 //after it checks out work on display and getting in thumbnails
 //make it clickable

 function buildApiRequest(requestMethod, path, params) {
    params = removeEmptyParams(params);
    var request = gapi.client.request({
          'method': requestMethod,
          'path': path,
          'params': params
      });

  function defineRequest() {

buildApiRequest ('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'toFind',
                 'type': 'video'});

  }};

function displayResults () {};

$('.search').click( function() {
var toFind = $('input').val();

buildApiRequest(toFind);
displayResults();

});




