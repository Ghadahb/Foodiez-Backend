import React from "react";
import CateItem from "./CateItem";
import cateStores from "../Stores/cateStores";
import { observer } from "mobx-react";
import { useState } from "react";
import cateStore from "../Stores/cateStores";

function CateList(props) {
//   const [query, setQuery] = useState("");

  const cateList = cateStore.categories
//   .filter((category) =>
//     category.name.toLowerCase().includes(query.toLowerCase())
//   )
  .map((category)=><CateItem category={category}/>)

  return <div> {cateList}</div>;
}

export default observer(CateList);
