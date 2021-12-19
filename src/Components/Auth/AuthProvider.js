import {createContext, useState,} from 'react';
import Roles from '../helpers/Roles';

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const login = (userCredentials) => setUser({ id: 1, name: 'Daniel', email: 'ddlazaro@uninorte.edu.co', roles: Roles.Admin});
    const logout = () => setUser(null);

    const isLogget = () => !!user;
    const roles = (roles) => user?.roles == roles;

    const updateUser = (data) => {
		setUser({
			...user,
			...data
		})
	}

    
    const contextValue = {
        user,
        login,
        logout,
        roles,
        isLogget,
        updateUser
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;

}
