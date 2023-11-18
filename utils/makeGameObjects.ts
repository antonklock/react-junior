import shuffleGameObjects from "../utils/shuffleGameObjects";

const makeGameObjects = (countries: { name: string; capital: string }[]) => {
  const countryNames = countries.map((country) => {
    return {
      id: country.name,
      selection: country.name,
      answer: country.capital,
      status: "unanswered" as
        | "unanswered"
        | "correct"
        | "incorrect"
        | "selected",
    };
  });

  const capitalNames = countries.map((country) => {
    return {
      id: country.capital,
      selection: country.capital,
      answer: country.name,
      status: "unanswered" as
        | "unanswered"
        | "correct"
        | "incorrect"
        | "selected",
    };
  });

  const gameObjects = [...countryNames, ...capitalNames];

  return shuffleGameObjects(gameObjects);
};

export default makeGameObjects;