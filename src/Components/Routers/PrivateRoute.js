import { Route, Navigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

export default function PrivateRoute({roles: role, ...rest}) {
    const {roles, isLogget} = useAuth();


    if (role && !roles(role)) return <Navigate to="/" />;

    if (!isLogget()) return <Navigate replace to="/login"/> 
    
    return (
        <Route {...rest}/>
    )
}

