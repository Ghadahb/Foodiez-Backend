import React from 'react';
import { Redirect, useParams } from "react-router";
import cateStores from '../Stores/cateStores';

const CateDetails = () => {
    const { categorySlug } = useParams();
    const category = cateStores.categories.find((category) => category.slug === categorySlug);
    if (!category) return <Redirect to="/category" />;

    return (
        <div className="detail">
        <img className="detail-img" src={category.image} alt={category.name} />
        <h2 className="title">{category.name}</h2>
     </div>
    );
};

export default CateDetails
