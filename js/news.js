var News = {};

const API_KEY = "64ddb2a50e4a4a8f993bb110839bed71";

$(document).ready(function() {
  $("#pagination").twbsPagination({
    totalPages: 5,
    visiblePages: 5,
    onPageClick: function(event, page) {
      News.getNews(page);
    }
  });
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
    if (oneNews.urlToImage != null) {
      $newsList.append(htmlNewsRow);
    }
  }
};

News.getNews = function(pageNumber) {
  $.ajax({
    url:
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "category=general&" +
      "pageSize=5&" +
      "apiKey=64ddb2a50e4a4a8f993bb110839bed71&" +
      "page=" +
      pageNumber,
    success: function(responce) {
      News.renderNews(responce.articles);
    }
  });
};
