import './styles/main.scss';
import renderAddScore from './modules/displayAddScore.js';
import renderScore from './modules/fetchScores.js';

window.addEventListener('load', () => {
  renderScore();
  renderAddScore();
});
