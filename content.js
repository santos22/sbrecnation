// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      // GET ENTIRE LIST OF COMMENTS
      var rec = document.getElementsByClassName("c-comments__list");
      console.log("Num of rec comments: " + rec.length);
      console.log(rec[0]);

      // GET ONLY RECOMMENDED COMMENTS
      console.log(rec[0].getElementsByClassName('c-comments__comment c-comments__recommended')[1].id)

      //var IDs = [];
      //$("#mydiv").find("span").each(function(){ IDs.push(this.id); });

      //console.log();

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

// $(function() {
//     var recs = document.querySelector('div.c-comments__comment c-comments__recommended').innerHTML;
//     console.log("Num of rec comments: " + recs);
// });