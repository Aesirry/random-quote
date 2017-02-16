$(document).ready(function(){
  var quote = "";
  var author = "";

  function getQuote() {$.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json",
  function(data){
    $("#quote").html(data.quote);
    $("cite").html("- " + data.author);
    quote = data.quote;
    author = data.author;
    });
  }
  getQuote();
  $("#new-quote").on("click", getQuote);
  $("#tweet-button").on("click", function(){
    window.open("https://twitter.com/intent/tweet?&text=" + encodeURIComponent("\"" + quote + "\"" + "-" + author));
  });
});
