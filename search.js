"use strict";

 // grab everything needed from youtube sample code
 //console log results
 //after it checks out work on display and getting in thumbnails
 //make it clickable
 //search is hooked up but we need to finish the API auth first

function displayResults () {};

$('.search').click( function() {
var toFind = $('input').val();
console.log(toFind);
defineRequest(toFind);
displayResults();

});


 function buildApiRequest(requestMethod, path, params) {
    params = removeEmptyParams(params);
    var request = gapi.client.request({
          'method': requestMethod,
          'path': path,
          'params': params
      });

  function defineRequest(toFind) {

buildApiRequest ('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'toFind',
                 'type': 'video'});

  }};






