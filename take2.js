var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

//console log response! youtube id at the end of the url

//do i need this?
var RESULT_HTML_TEMPLATE = (
  '<div>' +
    '<h2>' +
    '<a class="js-result-name" href="" target="_blank"></a> by <a class="js-user-name" href="" target="_blank"></a></h2>' +
    '<p>Number of watchers: <span class="js-watchers-count"></span></p>' + 
    '<p>Number of open issues: <span class="js-issues-count"></span></p>' +
  '</div>'
);

function getDataFromApi(searchTerm, callback) {
  var query = {
    'path': 'https://www.googleapis.com/youtube/v3/search', 
    'params': {'q': q, 'part': 'snippet'}
  }
  console.log(query);
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}
console.log(getDataFromApi);

//do i need this?
function renderResult(result) {
  var template = $(RESULT_HTML_TEMPLATE);
  template.find(".js-result-name").text(result.name).attr("href", result.html_url);
  template.find(".js-user-name").text(result.owner.login).attr("href", result.owner.html_url);
  template.find(".js-watchers-count").text(result.watchers_count);
  template.find(".js-issues-count").text(result.open_issues);
  return template;
}

function displaySearchData(data) {
  var results = data.items.map(function(item, index) {
    return renderResult(item);
  });
  $('#results').html(results);
}

function watchSubmit() {
  $('.search-form').submit(function(event) {
    event.preventDefault(); //where is js-query?
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = $("input").val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}
console.log(watchSubmit);
$(watchSubmit);
