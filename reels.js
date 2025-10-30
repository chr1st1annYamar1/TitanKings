document.addEventListener('DOMContentLoaded', () => {
    const reelsContainer = document.querySelector('.reels-container');
    const reelItems = document.querySelectorAll('.reel-item');
    let currentIndex = 0;

    // Function to scroll to the next reel
    const goToNextReel = () => {
        if (currentIndex < reelItems.length - 1) {
            currentIndex++;
            // Scroll to the next reel-item element
            reelItems[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Ensure the new video starts playing
            playCurrentVideo();
        }
    };

    // Function to play the video at the current index and set up listener
    const playCurrentVideo = () => {
        // Pause all videos first
        document.querySelectorAll('.reel-video').forEach(video => {
            video.pause();
            // Remove previous 'ended' listener to prevent multiple triggers
            video.removeEventListener('ended', goToNextReel);
        });

        const currentVideo = reelItems[currentIndex].querySelector('.reel-video');
        if (currentVideo) {
            // Re-add the 'ended' listener for the current video
            currentVideo.addEventListener('ended', goToNextReel);
            
            // Start video playback
            // A try-catch is good practice for autoplay issues
            currentVideo.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // You might display a "Play" button here for user interaction
            });
        }
    };

    // Initial play for the first video
    playCurrentVideo();

    // Optional: Handle playing/pausing videos based on visibility/scroll position
    // For a simple implementation, we'll rely on the initial playCurrentVideo
    // and the auto-scroll on 'ended'.

    // Optional: Auto-play the visible video when a user scrolls to it
    reelsContainer.addEventListener('scroll', () => {
        // Debounce or Throttle this for performance in a real app
        reelItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            // Check if the reel is mostly in the viewport
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                if (currentIndex !== index) {
                    currentIndex = index;
                    playCurrentVideo();
                }
            }
        });
    });
});

function act()
{
	alert("These features aren't working yet!")
}