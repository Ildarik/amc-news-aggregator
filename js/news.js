var News = {};

const API_KEY = "64ddb2a50e4a4a8f993bb110839bed71";

let category = "";

let page = 1;

$(document).ready(function() {
  $("#pagination").twbsPagination({
    totalPages: 5,
    visiblePages: 10,
    onPageClick: function(event, page) {
      News.getNews(page, category);
    }
  });
  $("#business").click(function() {
    category = "business";
    News.getNews(page, category);
  });
  $("#sports").click(function() {
    category = "sports";
    News.getNews(page, category);
  });
  $("#general").click(function() {
    category = "general";
    News.getNews(page, category);
  });
  $("#entertainment").click(function() {
    category = "entertainment";
    News.getNews(page, category);
  });
  $("#health").click(function() {
    category = "health";
    News.getNews(page, category);
  });
  $("#science").click(function() {
    category = "science";
    News.getNews(page, category);
  });
  $("#technology").click(function() {
    category = "technology";
    News.getNews(page, category);
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
      moment(oneNews.publishedAt)
        .startOf("hour")
        .fromNow() +
      "</span><br><p>" +
      oneNews.description +
      "</p></div><hr/></div>";
    if (oneNews.urlToImage != null) {
      $newsList.append(htmlNewsRow);
    }
  }
};

News.getNews = function(pageNumber, category) {
  $.ajax({
    url:
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "category=" +
      category +
      "&pageSize=10&" +
      "apiKey=64ddb2a50e4a4a8f993bb110839bed71&" +
      "page=" +
      pageNumber,
    success: function(responce) {
      News.renderNews(responce.articles);
    }
  });
};
