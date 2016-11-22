$(document).ready(function(){
  var quote = "";
  var author = "";
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data){
    $("#quote").html(data.quote);
    $("cite").html("- " + data.author);
    quote = data.quote;
    author = data.author;
  });
  $("#new-quote").on("click", function(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data){
      $("#quote").html(data.quote);
      $("cite").html("- " + data.author);
      quote = data.quote;
      author = data.author;
    });
  });
  $("#tweet-button").on("click", function(){
    window.open("https://twitter.com/intent/tweet?&text=" + encodeURIComponent("\"" + quote + "\"" + "-" + author));
  });
});
