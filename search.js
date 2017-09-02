"use strict";
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




