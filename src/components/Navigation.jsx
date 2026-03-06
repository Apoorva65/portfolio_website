import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

function Navigation(){

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <AppBar position="fixed" sx={{ flexGrow: 1,backgroundColor: "rgba(40,40,40,0.9)", backdropFilter: "blur(8px)"}}>
            <Toolbar>
            <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>Apoorva Dixit</Typography>
            {isMobile ? (
                <IconButton>
                    <MenuIcon />
                </IconButton>
            ):(
                <>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/")}>
                        Home
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/experience")}>
                        Experience
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/projects")}>
                        Projects
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/skills")}>
                        Skills
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/contact")}>
                        Contact
                    </Button>
                </>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;