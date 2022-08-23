import scores from './scoreArray.js';

const scoresSection = document.querySelector('.scores-section');

const renderScore = () => {
  scores.forEach((score) => {
    const scoreLists = document.createElement('li');
    scoreLists.classList.add('score');
    scoreLists.textContent = `${score.name}: ${score.score}`;
    scoresSection.appendChild(scoreLists);
  });
};

export default renderScore;
