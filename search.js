"use strict";

  function defineRequest() {

buildApiRequest('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'toFind',
                 'type': 'video'});

  };

function displayResults () {};

$('.search').click( function() {
var toFind = $('input').val();

getVideos(toFind);
displayResults();

});




