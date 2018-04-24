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
      "<div class='newsItem'>" +
      '<div><img width="500" src="' +
      oneNews.urlToImage +
      '"/></div><div class="info"><a target="_blank" href="' +
      oneNews.url +
      '"><h5>' +
      oneNews.title +
      "</h5></a><span class='source'>" +
      oneNews.source.name +
      "</span><span class='source'>" +
      oneNews.publishedAt +
      "</span><br><p>" +
      oneNews.description +
      "</p></div><hr/></div>";

    $newsList.append(htmlNewsRow);
  }
};

News.getNews = function() {
  $.ajax({
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=64ddb2a50e4a4a8f993bb110839bed71",
    success: function(responce) {
      News.renderNews(responce.articles);
    }
  });
};
