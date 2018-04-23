var News = {};

const API_KEY = "64ddb2a50e4a4a8f993bb110839bed71";

$(document).ready(function() {
  News.getNews();
});

News.renderNews = function(articles) {
  var $newsList = $("#news");

  $newsList.empty();

  for (var newsIndex = 0; newsIndex < articles.length; newsIndex++) {
    var oneNews = articles[newsIndex];
    var htmlNewsRow =
      "<div>" +
      oneNews.title +
      "</div>" +
      '<img src="' +
      oneNews.urlToImage +
      '"/>';

    $newsList.append(htmlNewsRow);
  }
};

News.getNews = function() {
  $.ajax({
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=64ddb2a50e4a4a8f993bb110839bed71",
    success: function(responce) {
      News.renderNews(responce.articles);
    }
  });
};
