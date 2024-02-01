var ytplayerList;

function onPlayerReady(e) {
    var video_data = e.target.getVideoData(),
        label = video_data.video_id+':'+video_data.title;
    e.target.ulabel = label;
}
function onPlayerError(e) {
}
function onPlayerStateChange(e) {
    var label = e.target.ulabel;
    if (e["data"] == YT.PlayerState.PLAYING) {
        pauseOthersYoutubes(e.target);
    }
    if (e["data"] == YT.PlayerState.PAUSED) {
    }
    if (e["data"] == YT.PlayerState.ENDED) {
    }
    if (e["data"] == YT.PlayerState.BUFFERING) {
        e.target.uBufferingCount?++e.target.uBufferingCount:e.target.uBufferingCount=1; 
        if( YT.PlayerState.UNSTARTED ==  e.target.uLastPlayerState ){
            pauseOthersYoutubes(e.target);
        }
    }
    if( e.data != e.target.uLastPlayerState ) {
        e.target.uLastPlayerState = e.data;
    }
}
function initYoutubePlayers(){
    ytplayerList = null; 
    ytplayerList = []; 
    for (var e = document.getElementsByTagName("iframe"), x = e.length; x-- ;) {
        if (/youtube.com\/embed/.test(e[x].src)) {
            ytplayerList.push(initYoutubePlayer(e[x]));
        }
    }
    
}
function pauseOthersYoutubes( currentPlayer ) {
    if (!currentPlayer) return;
    for (var i = ytplayerList.length; i-- ;){
        if( ytplayerList[i] && (ytplayerList[i] != currentPlayer) ){
            ytplayerList[i].pauseVideo();
        }
    }  
}

function initYoutubePlayer(ytiframe){
    var ytp = new YT.Player(ytiframe, {
        events: {
            onStateChange: onPlayerStateChange,
            onError: onPlayerError,
            onReady: onPlayerReady
        }
    });
    ytiframe.ytp = ytp;
    return ytp;
}
function onYouTubeIframeAPIReady() {
    initYoutubePlayers();
}
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);