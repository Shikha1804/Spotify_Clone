console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio ('mysong/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Let me Love You", filePath:"mysong/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Blank Space", filePath:"mysong/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"A Thousand Years", filePath:"mysong/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Bari", filePath:"mysong/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Perfect", filePath:"mysong/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"We Found Love", filePath:"mysong/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Alone", filePath:"mysong/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Kesariya", filePath:"mysong/8.mp3",coverPath:"covers/8.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
audioElement.src='mysong/${index+1}.mp3';
audioElement.currentTime=0;
audioElement.play();
e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
})
})