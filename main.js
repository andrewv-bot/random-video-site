const videos = [
  "videos/v1.mp4",
  "videos/v2.mp4",
  "videos/v3.mp4",
  "videos/v4.mp4",
  "videos/v5.mp4",
];

function pickDifferentVideo(videoList) {
  const last = sessionStorage.getItem("lastVideo");
  let chosen = videoList[Math.floor(Math.random() * videoList.length)];

  // If there was a last choice and there’s more than 1 video, re-roll until different
  if (last && videoList.length > 1) {
    while (chosen === last) {
      chosen = videoList[Math.floor(Math.random() * videoList.length)];
    }
  }

  sessionStorage.setItem("lastVideo", chosen);
  return chosen;
}

const player = document.getElementById("player");
const chosen = pickDifferentVideo(videos);
player.src = chosen;