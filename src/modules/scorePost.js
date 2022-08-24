const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2dX8Y5bZax8tqAo7c21P/scores';

class Scores {
  static async getScores() {
    return fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => data.result)
      .catch((error) => error);
  }

  static async addScore({ user, score }) {

    fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
}

export default Scores;