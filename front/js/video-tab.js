const video_array = [
  "https://www.youtube.com/embed/GeBog64Ezys",
  "https://www.youtube.com/embed/RLWcYADoV84",
  "https://www.youtube.com/embed/FA8tl0fsYdI",
  "https://www.youtube.com/embed/rA56B4JyTgI",
  "https://www.youtube.com/embed/FDEYHxtimKk",
];

const videoTab = document.getElementById("video-tab");

function getRandomInt(num) {
  const res = Math.floor(Math.random() * 10000000);
  return res % num;
}

videoTab.src = video_array[getRandomInt(video_array.length)];
