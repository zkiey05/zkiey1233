const video = document.getElementById("myVideo");
const playButton = document.querySelector(".play-icon");

// Thêm sự kiện cho nút Play
playButton.addEventListener("click", function() {
  if (video.paused) {
    video.play(); // Bắt đầu phát video
    video.classList.add("playing"); // Hiển thị video khi phát
    playButton.style.display = "none"; // Ẩn nút play sau khi nhấn
  } else {
    video.pause(); // Dừng video nếu video đang phát
    playButton.style.display = "block"; // Hiển thị lại nút play khi dừng video
  }
});