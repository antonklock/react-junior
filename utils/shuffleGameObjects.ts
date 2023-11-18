import exp from "constants";

type GameObjects = {
  id: string;
  selection: string;
  answer: string;
  status: "unanswered" | "correct" | "incorrect" | "selected";
}[];

const shuffleGameObjects = (gameObjects: GameObjects) => {
  let currentIndex = gameObjects.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [gameObjects[currentIndex], gameObjects[randomIndex]] = [
      gameObjects[randomIndex],
      gameObjects[currentIndex],
    ];
  }

  return gameObjects;
}

export default shuffleGameObjects;