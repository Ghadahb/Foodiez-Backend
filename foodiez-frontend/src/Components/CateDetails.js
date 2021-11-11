import React from "react";
import { Redirect, useParams } from "react-router";
import cateStores from "../Stores/cateStores";

function CateDetails ()  {

  return (
    <div className="detail">
      <Link to="/category/recipes">
        <img className="detail-img" src={category.image} alt={category.name} />
        <h2 className="title">{category.name}</h2>
      </Link>
    </div>
  );
};

export default CateDetails;
