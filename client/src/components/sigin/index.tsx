import React, {useState} from "react";
import Register from "../register/register";
import Login from "../login";

export default function Enter() {
    const [showLogin, setShowLogin] = useState<boolean>(true) 
    const [showCadastro, setShowCadastro] = useState<boolean>(false);

    const handleShowCadastro = () => {
        setShowLogin(false);
        setShowCadastro(true);
    }

    const handleShowLogin = () => {
        setShowCadastro(false);
        setShowLogin(true)
    }

    return (
        <>
            {showCadastro === true && showLogin === false && 
                <Register handleShowLogin={handleShowLogin}/>
            }
            {showCadastro === false && showLogin === true &&
                <Login handleShowCadastro={handleShowCadastro}/>
            }
        </>
    )
}