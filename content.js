// content.js
// https://stackoverflow.com/questions/7404544/jquery-count-number-of-divs-with-a-certain-class
// https://robots.thoughtbot.com/how-to-make-a-chrome-extension

var commentToScrollTo = 0;
var identifier = "#";
var firstRecComment;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      // GET ENTIRE LIST OF COMMENTS
      var rec = document.getElementsByClassName("c-comments__list");
      firstRecComment = rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[0].id;

      var numDivs = $('.c-comments__recommended').length;
      console.log("Num of divs: " + numDivs);

      // GET ONLY RECOMMENDED COMMENTS
      // for (i = 0; i < numDivs; i++) { 
      //   console.log(rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[i].id);
      // }
      
      if(commentToScrollTo < numDivs) {
        var recCommentId = rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[commentToScrollTo].id;
        var result = identifier.concat(recCommentId);
        
        $('html, body').animate({
            scrollTop: $(result).offset().top
        }, 500);
        commentToScrollTo++;
      } else {
        commentToScrollTo = 0;
        var result = identifier.concat(firstRecComment);
        $('html, body').animate({
            scrollTop: $(result).offset().top
        }, 500);
        commentToScrollTo++;
      }
      console.log("Count" + commentToScrollTo);
    }
  }
);
