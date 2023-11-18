type GameObject = {
        id: string;
        selection: string;
        answer: string;
        status: "unanswered" | "correct" | "incorrect" | "selected";
    };

type GameObjects = GameObject[];

const getGameObjectByName = (name: String, gameObjects: GameObjects) => {
  let gameObject = gameObjects.find(
    (gameObject) => gameObject.selection === name
  );
  return gameObject;
};

export default getGameObjectByName;