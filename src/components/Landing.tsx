import { useEffect } from "react";

export function LandingPage() {
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
          const data = await response.json();
          console.log(data);
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
  return <div>yo</div>;
}
