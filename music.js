// music.js

// 🎵 List of songs to choose from (you can add your own)
const songs = [
  "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
];

// 🎲 Pick a random song each time page loads
const randomSong = songs[Math.floor(Math.random() * songs.length)];

// 🎧 Create audio player
const bgMusic = new Audio(randomSong);
bgMusic.loop = true;
bgMusic.volume = 0.4; // ✅ Valid range is 0.0 – 1.0

// 🖱️ Start playing after first click (required by browsers)
document.addEventListener("click", () => {
  bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
}, { once: true });

// ✅ Log which song is playing
console.log("Now playing:", randomSong);
