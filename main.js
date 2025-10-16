const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const block = document.getElementById('block');

// Добавляем обработчик события окончания первого видео
video1.addEventListener('ended', function() {
    block.style.display = 'block';
    this.pause();
    this.currentTime = this.duration - 0.05;

    block.addEventListener('click', () => {
        video2.style.display = 'block';
        video2.play();
        video1.remove();
        block.remove();
    });
    
});