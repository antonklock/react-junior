type GameObject = {
        id: string;
        selection: string;
        answer: string;
        status: "unanswered" | "correct" | "incorrect" | "selected";
    };

    type GameObjects = GameObject[];

const checkAnswer = (selection: string, answer: string, gameObjects: GameObjects) => {
    const gameObject = gameObjects.find(
      (gameObject) => gameObject.selection === selection
    );

    if (gameObject?.answer === answer) {
      return true;
    } else if (gameObject?.answer) {
      return false;
    } else {
      return false;
    }
};
  
export default checkAnswer;