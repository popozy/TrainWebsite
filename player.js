// var myPlayer = videojs('my-video');

// myPlayer.src({
//     type: 'video/mp4',
//     src: 'test.mp4'
// });
// myPlayer.ready(function() {
//   setTimeout(function(){
//     myPlayer.pause();
//     console.log("pause!");
//   }, 10000);
// });
// var $ = require("jquery");
// window.$ = $;

var video = document.getElementById('video');
var form = document.querySelector("form");

let startPlay = function() {
    $("video").prop('muted', false);
    console.log("unmuted")
};

window.addEventListener("beforeunload", function(event) {
    $("video").prop('muted', true);
});

video.addEventListener("timeupdate", function() {
    var timeDisplay;
    //用秒数来显示当前播放进度
    timeDisplay = Math.floor(video.currentTime);
    console.log(Math.floor(video.currentTime));
    //当视频播放到 4ss的时候做处理
    if (timeDisplay == 12) {
        $("video").prop('muted', true);
        var videoWrapper = document.getElementById("my-video-wrapper");
        videoWrapper.style.display = "none";
        var course = document.getElementById("course");
        course.style.display = "block";
        setTimeout(function () {
            video.pause();
        }, 1000)
    }
}, false);


let beginPlay = function () {
    var videoWrapper = document.getElementById("my-video-wrapper");
    videoWrapper.style.display = "block";
    var course = document.getElementById("course");
    course.style.display = "none";
    if (video.paused){
        $("video").prop('muted', false);
        video.play()
    }
};

let btnSubmit = function () {
    var rightSelected = $("#contactChoice2").is(":checked");
    console.log(rightSelected);
    if (rightSelected) {
        beginPlay();
    }
};
// form.addEventListener("submit", function (event) {
//     var data = new FormData(form);
//     var rightAnswer = "phone";
//     var selected = "";
//     for (const entry of data) {
//         selected = entry[1]
//     }
//     if (selected === rightAnswer) {
//         beginPlay()
//     }
// });