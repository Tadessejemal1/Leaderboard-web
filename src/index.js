import './styles/main.scss';
import renderAddScore from './modules/domDisplayAddScore';
import renderScore from './modules/domDisplayScores';

window.addEventListener('load', () => {
  renderScore();
  renderAddScore();
});
