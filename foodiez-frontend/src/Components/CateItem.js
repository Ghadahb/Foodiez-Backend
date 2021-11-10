import React, { useState } from "react";
import CateDetail from "./CateDetail";
import { observer } from "mobx-react";

// REVIEW: Don't be lazy with the file and component names, should be CategoryItem
function CateItem({ category }) {
  //   const [newUser, setNewUser] = useState({ user: null });
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
    <div>
      {/* REVIEW: We need to discuss this */}
      <CateDetail category={category} />
      {/* <p>{category.name}</p> */}
    </div>
  );
}

export default observer(CateItem);
