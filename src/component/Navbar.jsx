import { NavLink } from "react-router-dom";



export default function Navbar(){
    return(
        <div className="container-fluid">
            <div className="row px-4">
                <div className="col-12">
                    <NavLink to="/">
                        <img className="logo" src="https://plus.unsplash.com/premium_photo-1709384733835-1628e7ea2aa3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" />
                    </NavLink>
                    
                </div>
            </div>
        </div>
    )
}