import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { observer } from "mobx-react";
import CategoryModal from "./CategoryModal";
import CateDetail from "./CateDetail";
import { Link } from "react-router-dom";
// import { useState } from "react";
import cateStores from "../Stores/cateStores";

function CateList() {
  // const [query, setQuery] = useState("");

  const cateList = cateStores.categories.map((category) => (
    <CateDetail key={category._id} category={category} />
  ));

  const options = categories.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (

    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Category Option" />
        )}
      />
      <CategoryModal />
      {cateList}
    </div>

    <center>
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} 
      label="Category Option" 
      style={{marginBottom: "40px"}}
      style={{marginTop: "20px"}}
      />}
    />
    <CategoryModal />
    {cateList}
    </center>

  );
}

const categories = [
  { title: "Arabic" },
  { title: "Italian" },
  { title: "Vegan" },
  { title: "Healthy" },
  { title: "International" },
  { title: "Thai" },
  { title: "Breakfast" },
  { title: "Dessert" },
  { title: "Japanese" },
  { title: "Indian" },
  { title: "Asian" },
  { title: "Bakery" },
  { title: "Kuwaiti" },
  { title: "Persian" },
  { title: "Brunch" },
];

export default observer(CateList);
