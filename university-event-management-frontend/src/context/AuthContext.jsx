import { createContext, useContext, useEffect, useState } from "react";
import { getReq } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchStudents = () => {
            try {
                const getAllStudents = getReq('/students');
                console.log('getAllStudents',getAllStudents);
                
            } catch (error) {
                console.log(error);
                
            }
        }

        fetchStudents();
    }, [])
}

export const AuthUser = () => useContext(AuthContext);
