"use client";

import { GameButton } from "./GameButton";
import { useState, useEffect } from "react";
import makeGameObjects from "../utils/makeGameObjects";
import getGameObjectByName from "../utils/getGameObjectByName";
import checkAnswer from "../utils/checkAnswer";
import setGameObjectStatus from "../utils/setGameObjectStatus";

type GameAreaProps = {
  countries: {
    name: string;
    capital: string;
  }[];
};

type GameObject = {
  id: string;
  selection: string;
  answer: string;
  status: "unanswered" | "correct" | "incorrect" | "selected";
};

type GameObjects = GameObject[];

export const GameArea = (props: GameAreaProps) => {
  const { countries } = props;

  const [gameObjects, setGameObjects] = useState<GameObjects>();
  const [optionSelected, setOptionSelected] = useState(false);
  const [answer, setAnswer] = useState("");
  const [selection, setSelection] = useState("");

  useEffect(() => {
    const newGameObjects = makeGameObjects(countries);
    setGameObjects(newGameObjects);
  }, [countries]);

  //Selected first button
  useEffect(() => {
    setGameObjects((prevGameObjects) => {
      return prevGameObjects?.map((gameObject) => {
        if (gameObject.selection === selection) {
          gameObject.status = "selected";
          return gameObject;
        }
        return gameObject;
      });
    });
    console.log("Selection: ", selection);
  }, [selection]);

  //ANSWER
  useEffect(() => {
    if (!gameObjects) return console.log("no game objects");
    const selectionString = getGameObjectByName(
      selection,
      gameObjects
    )?.selection;

    if (!selectionString) return console.log("no game object selection");

    const answerObject = getGameObjectByName(answer, gameObjects);
    const selectionObject = getGameObjectByName(selectionString, gameObjects);

    if (checkAnswer(selectionString, answer, gameObjects)) {
      if (answerObject && selectionObject) {
        setGameObjectStatus(answerObject.id, gameObjects, "correct");
        setGameObjectStatus(selectionObject.id, gameObjects, "correct");
      }
    } else {
      if (answerObject && selectionObject) {
        setGameObjectStatus(answerObject.id, gameObjects, "incorrect");
        setGameObjectStatus(selectionObject.id, gameObjects, "incorrect");

        setTimeout(() => {
          if (answerObject && selectionObject) {
            setGameObjectStatus(answerObject.id, gameObjects, "unanswered");
            setGameObjectStatus(selectionObject.id, gameObjects, "unanswered");

            setGameObjects([...gameObjects]);
          }
        }, 1000);
      } else {
        console.log("No game object");
      }
    }
    setOptionSelected(false);
  }, [answer]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!optionSelected) {
      if (event.currentTarget.textContent) {
        setSelection(event.currentTarget.textContent);
        setOptionSelected(true);
      }
    } else {
      if (event.currentTarget.textContent)
        setAnswer(event.currentTarget.textContent);
    }
  };

  return (
    <div className="grid grid-cols-2">
      {gameObjects?.map((gameObject) => {
        return (
          <GameButton
            text={gameObject.selection}
            key={gameObject.id}
            onClick={handleClick}
            status={gameObject.status}
          />
        );
      })}
    </div>
  );
};
