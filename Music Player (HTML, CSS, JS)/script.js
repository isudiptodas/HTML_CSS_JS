let song = document.querySelector(".audio");
let timeSlider = document.querySelector(".time-slider");
let playPause= document.querySelector(".play-pause");
let prevSong = document.querySelector(".previous");
let nextSong = document.querySelector(".next");
let songName = document.querySelector(".song-name");
let artistName = document.querySelector(".artist-name");
let currentTime = document.querySelector(".current-time");
let totalTime = document.querySelector(".song-duration");
let songCover = document.querySelector(".song-image");
let lyricsContainer = document.querySelector(".lyrics-container")

let colorThief = new ColorThief();

let songs = [
    {src: "Justin Bieber - Ghost.mp3", cover: "justin bieber.jpg", name: "Ghost", singer:"Justin Bieber"},
    {src: "One Direction - Right Now .mp3", cover: "one-direction.jpg", name: "Right Now", singer:"One Direction"},
    {src: "Charlie Puth - That's Hilarious.mp3", cover: "charlie.jpg", name: "That's Hilarious", singer:"Charlie Puth"},
    {src: "ZAYN - When Love's Around .mp3", cover: "zayn.jpg", name:"When Love's Around", singer:"ZAYN"},
];

// let lyrics = [
//     `Young blood thinks there's always tomorrow\n I miss your touch on nights when I'm hollow\nI know you crossed a bridge that I can't follow\nSince the love that you left is all that I get\nI want you to know that\nIf I can't be close to you, I'll settle for the ghost of you\nI miss you more than life (more than life)\nAnd if you can't be next to me, your memory is ecstasy\nI miss you more than life\nI miss you more than life\nYoung blood thinks there's always tomorrow\nI need more time, but time can't be borrowed\nI'd leave it all behind if I could follow\nSince the love that you left is all that I get\nI want you to know that\nIf I can't be close to you, I'll settle for the ghost of you\nI miss you more than life (yeah)\nAnd if you can't be next to me, your memory is ecstasy (whoa)\nI miss you more than life\nI miss you more than life\nWhoa-oh-oh\nNa-na-na\nMore than life, oh\nSo if I can't get close to you, I'll settle for the ghost of you\nI miss you more than life\nAnd if you can't be next to me, your memory is ecstasy\nI miss you more than life\nI miss you more than life\n`
//     `Lights go down, and the night is calling to me, yeah\nI hear voices singing songs in the street\nAnd I know that we won't be going home for so long, for so long\nBut I know that I won't be on my own, yeah\nI love this feeling and\nRight now\nI wish you were here with me (Oh-ooh)\n'Cause right now\nEverything is new to me (Oh-ooh)\nYou know I can't fight the feeling\nAnd every night I feel it\nRight now\nI wish you were here with me (Oh-ooh)\nLate night spaces\nWith all our friends, you and me, yeah\nLove these faces\nJust like how it used to be\nAnd we won't be going home\nFor so long, for so long\nBut I know, I won't be on my own\nOn my own, I'm feeling like\nRight now\nI wish you were here with me (Oh-ooh)\n'Cause right now\nEverything is new to me (Oh-ooh)\nYou know I can't fight the feeling\nAnd every night I feel it\nRight now\nI wish you were here with me (Oh-ooh)\nAnd I could do this forever (Woah-oh-oh, woah-oh-oh)\nAnd let's go crazy together (Woah-oh-oh, woah-oh-oh)\nLights go down, and\nI hear you calling to me, yeah\nRight now\nI wish you were here with me (Oh-ooh)\n'Cause right now\nEverything is new to me (Oh-ooh)\nYou know I can't fight the feeling\nAnd every night I feel it\nRight now\nI wish you were here with me (Oh-ooh)\n`
//     `Look how all the tables\nLook how all the tables have turned\nGuess you're finally realizin' how bad you messed it up\nGirl, you're only makin'\nGirl, you're only makin' it worse\nWhen you call like you always do when you want someone\nYou took away a year\nOf my fuckin' life and I can't get it back no more\nSo when I see those tears\nComin' out your eyes, I hope it's me they're for\nYou didn't love when you had me\nBut now you need me so badly\nYou can't be serious (ha-ha-ha)\nThat's hilarious (ha-ha-ha-ha-ha)\nThinkin' I would still want you\nAfter the things you put me through\nYeah, you're delirious (ha-ha-ha)\nThat's hilarious (ha-ha-ha-ha-ha)\nNow you put the blame in (now you put the blame in)\nNow you put the blame in reverse\nTryna make me feel guilty for everything you've done\nYou're another lesson (you're another lesson)\nYou're just another lesson I learned\nDon't give your heart to a girl who's still got a broken one\nYou took away a year (took away a year)\nOf my fuckin' life and I can't get it back no more\nSo when I see those tears (when I see those tears)\nComin' out your eyes, I hope it's me they're for\nYou didn't love when you had me\nBut now you need me so badly\nYou can't be serious (ha-ha-ha)\nThat's hilarious (ha-ha-ha-ha-ha)\nThinkin' I would still want you\nAfter the things you put me through\nYeah, you're delirious (you're delirious, ha-ha-ha)\nThat's hilarious (that's hilarious, ha-ha-ha-ha-ha)\nYou didn't love when you had me\nBut now you need me so badly\nYou can't be serious (you can't be serious, ha-ha-ha)\nThat's hilarious (that's hilarious, ha-ha-ha-ha-ha)\nThinkin' I would still want you\nAfter the things you put me through\nYeah, you're delirious (you're delirious, ha-ha-ha)\nThat's hilarious (that's hilarious, ha-ha-ha-ha-ha)\n(Ha-ha-ha)\n(Ha-ha-ha-ha-ha)\n`
//     `Mm, ever been in love?\nEver really loved someone?\nPeople tend to rush\nPeople to run to love\nOnly takes a one\nTo show you what it means to love, love\nI'm missin' you tonight, yeah (yeah, yeah, yeah)\nI'm wishin' you were right here\n'Cause when the love's around\n'Cause when the love's around\n(Yeah, oh, oh, oh)\nNever feels right\nNever feel that type of way\nBut I need you in my life\nYeah, you could be my wifе for real\nOnly takes a woman\nTo show what it means to lovе (love)\nTo love\nI'm missin' you tonight, yeah (yeah, yeah, yeah, yeah)\nI'm wishin' you were right here\n'Cause when the love's around\n'Cause when the love's around\n'Cause when the love's around\n'Cause when the love's around\nKeep me up until the mornin'\nYou could see it in my eyes\nYou've been givin' it your all for you\nKeep me up until the mornin'\nYou could see it in my eyes\nYou've been givin' it your all for you, for you\n'Cause when the love's around\n'Cause when the love's around\n'Cause when the love's around\n'Cause when the love's around\n'Cause when the love's around\n`
// ];

let currentSongIndex = 0;

function loadSong(index){

    song.src = songs[index].src;
    songCover.src = songs[index].cover;
    songName.textContent = songs[index].name; 
    artistName.textContent = songs[index].singer;
    
    songCover.onload = () => {
        let dominantColour = colorThief.getColor(songCover);
        let musicPlayer = document.querySelector('.music-player'); 
        musicPlayer.style.transition = 'background-color 0.7s ease';
        musicPlayer.style.backgroundColor = `rgba(${dominantColour[0]}, ${dominantColour[1]}, ${dominantColour[2]}, 0.8)`;
        let mainDiv = document.querySelector('.main');
        mainDiv.style.backgroundImage = `url('${songCover.src}')`;
        mainDiv.style.backgroundSize = 'cover';
        mainDiv.style.backgroundPosition = 'center';
        mainDiv.style.transition = 'background-image 0.7s ease';
        songCover.style.transition = 'background-image 0.7s ease';
    };

    song.load();
    song.addEventListener('loadedmetadata', () => {
        totalTime.textContent = formatTime(song.duration);
        timeSlider.max = song.duration;
    });

    function setTextColorBasedOnIndex(index) {
        if (index == 0 || index == 1) {
            songName.style.color = 'white';
            artistName.style.color = 'white';
            currentTime.style.color = 'white';
            totalTime.style.color = 'white';
        } 
        else{
            songName.style.color = 'black';
            artistName.style.color = 'black';
            currentTime.style.color = 'black';
            totalTime.style.color = 'black';
        }
    }

    setTextColorBasedOnIndex(currentSongIndex);
}

function togglePlayPause(){
    if(song.paused){
        song.play();
        playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    else{
        song.pause();
        playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function nextsong(){
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    song.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function prevsong(){
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    song.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function formatTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = Math.floor(seconds%60);
    return `${min}:${sec < 10 ? '0':''}${sec}`;
}

song.addEventListener('timeupdate', () => {
    currentTime.textContent = formatTime(song.currentTime);
    timeSlider. value = song.currentTime;
});

timeSlider.addEventListener('input', () => {
    song.currentTime = timeSlider.value;
});

playPause.addEventListener('click', togglePlayPause);
nextSong.addEventListener('click',nextsong);
prevSong.addEventListener('click', prevsong);

loadSong(currentSongIndex);
