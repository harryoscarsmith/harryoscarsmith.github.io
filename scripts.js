document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxVideo = document.getElementById('lightbox-video');
  const closeBtn = document.querySelector('.close');

  // Open lightbox on video click
  document.querySelectorAll('.video-item').forEach(function (item) {
    item.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video');
      lightboxVideo.src = videoUrl;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none';
    lightboxVideo.src = ''; // Stop the video
  });
});
