import React from 'react'
import { Button } from "@material-ui/core";
import { useState } from 'react';
import SignIn from './SignIn';

function SignInButton() {

    const [isOpen, setIsOpen] = useState(false);
     const closeModal = () => setIsOpen(false);
     const openModal = () => setIsOpen(true);

    return (
        
        <div>
        <Button variant= {"contained"} color={"primary"} onClick = {openModal}> SignInnn</Button>
        <SignIn isOpen={isOpen} closeModal={closeModal} />
        
        </div>
       
    );
}

export default SignInButton;