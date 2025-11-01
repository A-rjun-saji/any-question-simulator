// === CEH V13 Simulator — Video Background Version ===
// Realistic Moonlit Village using background video 🌕
// Designed by ChatGPT ⚡

// Remove any existing canvas backgrounds if present
document.querySelectorAll("canvas").forEach((c) => c.remove());

// === Create and inject video element ===
const video = document.createElement("video");
video.id = "bg-video";
video.src = "./test-1.mp4"; // <-- Replace with your actual video file
video.autoplay = true;
video.loop = true;
video.muted = true;
video.playsInline = true;

// === Style the video to fill the background ===
Object.assign(video.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "-1",
  filter: "brightness(0.8) contrast(1.1) saturate(1.1)", // optional mood effect
  backgroundColor: "#000", // fallback in case video fails
});

// Append video to the body
document.body.appendChild(video);

// === Optional overlay glow / atmosphere ===
const overlay = document.createElement("div");
Object.assign(overlay.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.25)",
  zIndex: "-1",
});
document.body.appendChild(overlay);

