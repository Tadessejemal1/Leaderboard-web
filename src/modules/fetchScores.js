import Scores from './scoresGame.js';

const scoresSection = document.querySelector('.scores-section');
const btnRefresh = document.querySelector('.btn-refresh');

const renderScore = async () => {
  const addScores = await Scores.getScores();

  scoresSection.innerHTML = '';

  addScores.forEach(({ user, score }) => {
    const scoreLists = document.createElement('li');
    scoreLists.classList.add('score');
    scoreLists.innerHTML = `<span>${user}</span><span>${score}</span>`;
    scoresSection.appendChild(scoreLists);
  });
};
// addEventListener on refresh button
btnRefresh.addEventListener('click', () => {
  Scores.getScores();
  renderScore();
  window.location.reload();
});

export default renderScore;