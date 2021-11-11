import React from "react";
import { Typography } from "@material-ui/core";

function Home() {
  return (
    <>
      <Typography
        variant={"h4"}
        color={"primary"}
        align={"center"}
        style={{ marginBottom: "90px" }}
      >
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      <h1 textalign="center"> ♞ </h1>

      {/* <RecipeList /> */}
    </>
  );
}

export default Home;
