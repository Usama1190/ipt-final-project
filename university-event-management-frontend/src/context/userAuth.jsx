import { createContext, useEffect, useState } from "react";
import { getReq } from "../api/axios";

const authContext = createContext();

const userAuth = ({ children }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const getCandidates = await getReq('/students');
            console.log(getCandidates);
            setUsers(getCandidates.data.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    fetchUsers();
  }, [])
  return (
    <div>
      <authContext.Provider value={users}>{children}</authContext.Provider>
    </div>
  );
};

export default userAuth;
