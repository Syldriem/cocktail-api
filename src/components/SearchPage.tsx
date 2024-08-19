import { FormEventHandler, ReactElement, useState } from "react";
import { Cocktail } from "../interfaces";

export function SearchPage(): ReactElement {
  const [drink, getDrink] = useState<Cocktail>();
  const [inputValue, getInputValue] = useState("");
  const getDrinkByName = async (name: string) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      if (!res.ok) {
        console.log("response not ok");
      }
      const data = await res.json();
      console.log(data);
      getDrink(data.drinks[0]);
    } catch (err) {
      console.error("there was an error", err);
    }
  };
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getDrinkByName(inputValue);
    console.log(drink);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => getInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
