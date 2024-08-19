import { ReactElement, useEffect, useState } from "react";
import { Cocktail } from "../interfaces";

export function LandingPage(): ReactElement {
  const [cocktail, setCocktail] = useState<Cocktail>();
  useEffect(() => {
    const fetchRandomCocktail = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        if (!response.ok) {
          console.error("response not ok");
        }
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const info = await response.json();
          setCocktail(info.drinks[0]);
          console.log(info.drinks[0]);
        } else {
          const dataText = await response.text();
          console.log("response format: ", dataText);
        }
      } catch (error) {
        console.log("there was an error", error);
      }
    };
    fetchRandomCocktail();
  }, []);

  return (
    <div>
      <img
        src={cocktail?.strDrinkThumb}
        alt={cocktail?.strDrink}
        style={{ width: "300px" }}
      />
      <div>{cocktail?.strDrink}</div>
    </div>
  );
}
