

function GetSelectedText () {
    if (document.getSelection) {    // all browsers, except IE before version 9
        var sel = document.getSelection ();
        // sel is a string in Firefox and Opera,
        // and a selectionRange object in Google Chrome, Safari and IE from version 9
        // the alert method displays the result of the toString method of the passed object
        alert (sel);
    }
    else {
        if (document.selection) {   // Internet Explorer before version 9
            var textRange = document.selection.createRange ();
            alert (textRange.text);
        }
    }
}



function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));

  chrome.tabs.create({ 
    url: "http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=" + info.pageUrl,
  });
}



chrome.contextMenus.create({
  "title": "Look up At Multi Function Chinese Character Database",
  "contexts": ["page"],
  "onclick": GetSelectedText}
);

