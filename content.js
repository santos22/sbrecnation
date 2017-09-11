// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      // GET ENTIRE LIST OF COMMENTS
      var rec = document.getElementsByClassName("c-comments__list");

      console.log("Num of rec comments: " + rec.length);

      var numDivs = $('.c-comments__recommended').length;
      console.log("Num of divs: " + numDivs);

      // GET ONLY RECOMMENDED COMMENTS
      for (i = 0; i < numDivs; i++) { 
        console.log(rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[i].id);
      }
      
      var comment = rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[2].id;
      console.log(comment);

      $('html, body').animate({
          scrollTop: $("#442860141").offset().top
      }, 2000);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
