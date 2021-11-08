import React from 'react'
import { Button } from "@material-ui/core";
import { useState } from 'react';
import SignUp from "./SignUp";

function SignUpButton() {

    const [isOpen, setIsOpen] = useState(false);
     const closeModal = () => setIsOpen(false);
     const openModal = () => setIsOpen(true);

    return (
        
        <div>
        <Button variant= {"contained"} color={"primary"} onClick = {openModal}> SignUp</Button>
        <SignUp isOpen={isOpen} closeModal={closeModal} />
        
        </div>
       
    );
}

export default SignUpButton;
