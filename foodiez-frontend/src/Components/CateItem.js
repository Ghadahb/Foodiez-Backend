import React, { useState } from "react";
import CateDetail from './CateDetail'
import { observer } from "mobx-react";

function CateItem ({category}) {
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
    <div >
        <CateDetail category={category}/>
     {/* <p>{category.name}</p> */}
     
    </div>
  );
}

export default observer(CateItem);
