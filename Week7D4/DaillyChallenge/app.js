// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”


let Video = class{
    constructor(title, uploader,time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
};
// Instantiate a new Video instance and call the watch() method.
let newVideo = new Video("myVideo1.mp4", "Atef", 540);
newVideo.watch()
// Instantiate a second Video instance with different values.
let newVideo2 = new Video("myVideo2.mp4", "Sam", 400);
newVideo2.watch()
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
let videos =[
    new Video("myVideo.mp1", "Atef", 540),
    new Video("myVideo.mp2", "Sam", 400),
    new Video("myVideo.mp3", "Rafa", 300),
    new Video("myVideo.mp4", "Eyal", 699),
    new Video("myVideo.mp5", "Alex", 700)
];
