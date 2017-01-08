var chatMsgs = [
    {timestamp: "1:00 PM", from: "fleft", msg: "Hi, how can I help you."},
    {timestamp: "1:00 PM", from: "fright", msg: "Can you help me sort the tax for xxxx statement?"},
    {timestamp: "1:00 PM", from: "fleft", msg: "Sure. Can I get the key for xxxx statement to review it?"},
    {timestamp: "1:00 PM", from: "fright", msg: "Its xxxxxxxxxx"},
    {timestamp: "1:00 PM", from: "fleft", msg: "Thank you. Give me a min let me review it."},
    {
        timestamp: "1:00 PM",
        from: "fleft",
        msg: "I reviewed and updated the xxxx statement please check and let me know if anything needs to be done"
    },
    {timestamp: "1:00 PM", from: "fright", msg: "Its perfect. Thank you :)"}
];


var curNewsIndex = -1;
function advanceNewsItem() {
    curNewsIndex++;
    if (curNewsIndex >= chatMsgs.length) {
        curNewsIndex = 0;
        document.querySelector('#chatList').innerHTML = '';
    }
    document.querySelector('#chatList').innerHTML += "<li class=\"ad-meet-u-acc__chat-window__message " + chatMsgs[curNewsIndex].from + " clearfix\">\n" +
    "<div class=\"ad-meet-u-acc__chat-window__message__data " + chatMsgs[curNewsIndex].from + "\">\n" +
    "<p class=\"ad-meet-u-acc__chat-window__message__data__text\">" + chatMsgs[curNewsIndex].msg + "</p>\n" +
    "<span class=\"ad-meet-u-acc__chat-window__message__data__secondary-text\">" + chatMsgs[curNewsIndex].timestamp + "</span>\n" +
    "</div>\n" +
    "</li>";
    setTimeout(function () {
        document.querySelector('.ad-meet-u-acc__chat-window__message:last-child').className += ' animate';
    }, 300)
}

// `<li class="ad-meet-u-acc__chat-window__message ${chatMsgs[curNewsIndex].from} clearfix">
//     <div class="ad-meet-u-acc__chat-window__message__data ${chatMsgs[curNewsIndex].from}">
//         <p class="ad-meet-u-acc__chat-window__message__data__text">${chatMsgs[curNewsIndex].msg}</p>
//         <span class="ad-meet-u-acc__chat-window__message__data__secondary-text">${chatMsgs[curNewsIndex].timestamp}</span>
//     </div>
// </li>`

var intervalID = setInterval(advanceNewsItem, 1500);