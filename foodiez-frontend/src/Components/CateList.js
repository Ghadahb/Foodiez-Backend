import React from "react";
import CateItem from "./CateItem";
import cateStores from "../Stores/cateStores";
import { observer } from "mobx-react";
import { useState } from "react";
import cateStore from "../Stores/cateStores";

// REVIEW: Don't be lazy with the file and component names, should be CategoryList

function CateList() {
  const [query, setQuery] = useState("");

  const cateList = cateStores.categories
    // .filter((category) =>
    // category.name.toLowerCase().includes(query.toLowerCase())
    // )
    .map((category) => <CateItem category={category} />);

  return <div>{cateList}</div>;
}

export default observer(CateList);
