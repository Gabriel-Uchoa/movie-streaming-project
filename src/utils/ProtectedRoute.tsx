import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Referência: https://levelup.gitconnected.com/implement-authentication-and-protect-routes-in-react-135a60b1e16f

const ProtectedRoute = (props: any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            navigate('/login')
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    )


}
export default ProtectedRoute;
