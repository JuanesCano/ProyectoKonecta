import { useNavigate } from 'react-router-dom';
import { AdminPage } from '../components/AdminPage';
import { UserPage } from '../components/UserPage';
import { useEffect } from 'react';
import { getRole } from '../encrypt/roleService';
import { getToken } from '../encrypt/tokenService';

export const Homepage = () => {
    const navigate = useNavigate()
    const role = getRole();

    useEffect(() => {
        const token = getToken();

        if(!token || !role){
            navigate("/");
        }
    },[navigate, role]);
    return(
        <div>
            {role === "admin" ? <AdminPage/> : <UserPage/>}
        </div>
    )
};