"use strict";

 // grab everything needed from youtube sample code
 //console log results
 //after it checks out work on display and getting in thumbnails
 //make it clickable
 //search is hooked up but we need to finish the API auth first

function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
        }).then(

// Search for a specified string.
function search() {
  var q = $('input').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });};

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#results').html('<pre>' + str + '</pre>');
  });
);
// Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', start);

/*
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

*/





