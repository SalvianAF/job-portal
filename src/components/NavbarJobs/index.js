import React, {useEffect, useState} from "react";
import { Button, Dropdown, Navbar, Nav } from "react-bootstrap";
import "./index.css";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from "../../redux/profileSlice";

const NavbarJobs = (props) => {

    const [ user, setUser ] = useState([]);
    // const [ profile, setProfile ] = useState([]);
    const profile = useSelector(state => state.profile.data)
    console.log("ppp"+profile)
    const dispatch = useDispatch()
    // const [isLogin, setIsLogin] = useState(false)

    const login = useGoogleLogin({  //login
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {  //get user information
        if (user.length !== 0) {
            console.log("masuk sini")
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    // setProfile(res.data);
                    console.log(res.data)
                    dispatch(updateProfile(res.data))
                    // setIsLogin(true)
                })
                .catch((err) => console.log(err));
        }
    }, [user])

    const logOut = () => { //logout
        googleLogout();
        dispatch(updateProfile({}))
        // setIsLogin(false)
    };

    return(
        <Navbar className="navbar" style={{width:"100%"}}>
            {console.log(profile)}
            <Navbar.Brand href="/" className="d-flex justify-content-between">
                <div className="row mx-1">
                    <h3 className="bold col-7 pt-1 m-0">GitHub</h3> 
                    <p className="title col-5 px-1 m-0">Jobs</p>
                </div>
            </Navbar.Brand>
            <Nav className="ms-auto px-3">
                {Object.values(profile).length !== 0 ? (
                    <Dropdown drop="start">
                        <Dropdown.Toggle id="dropdown-basic">
                            <img src={profile.picture} className="profile-img" />
                        </Dropdown.Toggle>
                
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => logOut()} style={{color:"red"}}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ):(
                    <Button className="login mt-2 my-3" onClick={() => login()}>Google Sign In</Button>
                )}
            </Nav>
        </Navbar>
    )
}
export default NavbarJobs;