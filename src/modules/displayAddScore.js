import renderScore from './fetchScores.js';
import Scores from './scoresGame.js';

// validate the name
const NAME_INVALID = 'Name can have alphabets only!';
const validateNameInput = (name) => {
  const nameValue = name.value.trim();
  const nameRegex = /^[a-zA-Z ]*$/;

  if (!nameRegex.test(nameValue)) {
    return false;
  }

  return true;
};
// add Event on the submit button
const formSubmit = () => {
  const addScoreForm = document.getElementById('form-add-score');
  const labelError = document.querySelector('.input-errors');

  addScoreForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, score } = addScoreForm.elements;
    const isValidName = validateNameInput(name);
    if (isValidName) {
      labelError.style.display = 'none';
      await Scores.addScore({ user: name.value, score: Number(score.value, 10) });

      event.target.reset();

      renderScore();
    } else {
      labelError.style.display = 'block';
      labelError.innerHTML = `${NAME_INVALID}!\n`;

      setTimeout(() => {
        labelError.style.display = 'none';
      }, 2000);
    }
  });
};

// render the user and score
const renderAddScore = () => {
  const mainContainer = document.getElementById('main');
  const addScoreDiv = document.createElement('div');
  addScoreDiv.classList.add('add-score');
  addScoreDiv.innerHTML = `
        <h2 class="score-title">Add your score</h2>
        <form action="" id="form-add-score">
          <input type="text" name="name" id="name" placeholder="Enter your name" required>
          <input type="number" name="score" id="score" placeholder="Enter your score" required>
          <input type="submit" value="Submit" id="add-btn"><p class="input-errors"></p>
        </form>`;

  mainContainer.appendChild(addScoreDiv);
  formSubmit();
};

export default renderAddScore;