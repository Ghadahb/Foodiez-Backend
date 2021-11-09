// import { Button } from "react-bootstrap";
import React, { useState } from "react";
// import UpdateJam3yaModal from "./UpdateJam3yaModal";
import cateStore from "../Stores/cateStores";
// import Catedetail from "./Catedetail";
import { observer } from "mobx-react";

function CateItem({category}) {
  const [newUser, setNewUser] = useState({ user: null });
//   const [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => setIsOpen(false);

//   const openModal = () => setIsOpen(true);

//   const handleDelete = () => {
//     cateStore.deleteJam3ya(category._id);
//   };

//   const handleJoin = () => {
//     cateStore.joinJam3ya(category._id, newUser);
//   };

  return (
    <div className="item">
      {/* <Jam3yadetail category={category} /> */}
      <p>{category.name}</p>
      {/* <img src={category.image} alt={category.title} />
      <p>{category.limit}</p> */}

      {/* i add this type,clas...... */}
      {/* <button
        type="button"
        variant="outline-success"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleDelete}
      >
        Delete
      </button>

      <button type="button" variant="outline-success" onClick={handleJoin}>
        Join Us
      </button> */}
      {/* <UpdateJam3yaModal
        isOpen={isOpen}
        closeModal={closeModal}
        category={category}
      /> */}
    </div>
  );
}

export default observer(CateItem);
