import Container from "@mui/material/Container";
import React from "react";
import {Outlet} from 'react-router'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MainLayout(){
    return(
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    )

}

export default MainLayout;