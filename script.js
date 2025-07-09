const audio       = document.getElementById('audioPlayer');
const playBtn     = document.getElementById('playPauseBtn');
const shuffleBtn  = document.getElementById('shuffleBtn');
const repeatBtn   = document.getElementById('repeatBtn');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const seekBar     = document.getElementById('seekBar');
const currentTime = document.getElementById('currentTime');
const duration    = document.getElementById('duration');
const volumeBtn   = document.getElementById('volumeBtn');
const volumeSlider= document.getElementById('volumeSlider');

function formatTime(sec=0) {
  const m = Math.floor(sec/60);
  const s = Math.floor(sec%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

playBtn.addEventListener('click', () => {
  if (audio.paused) { audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; }
  else            { audio.pause(); playBtn.innerHTML = '<i class="fas fa-play"></i>'; }
});

shuffleBtn.addEventListener('click', () => {
  shuffleBtn.classList.toggle('active');
});
repeatBtn.addEventListener('click', () => {
  repeatBtn.classList.toggle('active');
});


audio.addEventListener('loadedmetadata', () => {
  seekBar.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});


audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});


seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
});


volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeBtn.innerHTML = audio.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});


volumeSlider.addEventListener('input', e => {
  audio.volume = e.target.value;
  audio.muted = false;
  volumeBtn.innerHTML = audio.volume > 0.5
    ? '<i class="fas fa-volume-up"></i>'
    : '<i class="fas fa-volume-down"></i>';
});

audio.addEventListener('pause', () => playBtn.innerHTML = '<i class="fas fa-play"></i>');
audio.addEventListener('play',  () => playBtn.innerHTML = '<i class="fas fa-pause"></i>');

const coverArt = document.getElementById('cover-art');
coverArt.addEventListener('click', () => {
  document.querySelector('.music-player').classList.add('hidden');
  document.querySelector('.maincontent').style.marginBottom = '1rem';
});
const profileBtn = document.querySelector('.profile-circle');
const sidebar    = document.querySelector('.sidebar');
const main       = document.querySelector('.maincontent');

profileBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  main.classList.toggle('sidebar-hidden');
});
