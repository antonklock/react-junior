type GameObjects = {
  id: string;
  selection: string;
  answer: string;
  status: "unanswered" | "correct" | "incorrect" | "selected";
}[];

const setGameObjectStatus = (
  id: string,
  gameObjectsArray: GameObjects,
  newStatus: "unanswered" | "correct" | "incorrect" | "selected"
) => {
  return gameObjectsArray.map((gameObject) => {
    if (gameObject.id === id) {
      gameObject.status = newStatus;
      return gameObject;
    }
    return gameObject;
  });
};

export default setGameObjectStatus;