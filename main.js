const videos = [
  "videos/v1.mp4",
  "videos/v2.mp4",
  "videos/v3.mp4",
  "videos/v4.mp4",
  "videos/v5.mp4",
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const player = document.getElementById("player");
const chosen = pickRandom(videos);

player.src = chosen;
