import './styles/main.scss';
import renderAddScore from './modules/domDisplayAddScore.js';
import renderScore from './modules/domDisplayScores.js'

window.addEventListener('load', () => {
  renderScore();
  renderAddScore();
});
