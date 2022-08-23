const renderAddScore = () => {
  const mainContainer = document.getElementById('main');
  const addScoreDiv = document.createElement('div');
  addScoreDiv.classList.add('add-score');
  addScoreDiv.innerHTML = `
        <h2 class="score-title">Add you score</h2>
        <form action="" id="form-add-score">
          <input type="text" name="name" id="name" placeholder="Enter your name" required>
          <input type="number" name="score" id="score" placeholder="Enter your score" required>
          <input type="submit" value="Submit" id="add-btn">
        </form>`;
  mainContainer.appendChild(addScoreDiv);
};

export default renderAddScore;
