import { Margin, WidthNormal } from "@mui/icons-material";
import React from "react";
import Box from '@mui/material/Box';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import PeopleIcon from '@mui/icons-material/People';
import Base from "./Base";

function Home() {
    const divstyle={
        paddingTop:'80px'
    }
    return (
        <Base>
        <>
        <div style={divstyle}>
        <h1 className="text-center">Welcome To Agro App Admin Panel</h1><hr class="border border-primary border-3 opacity-75"/>
        
        <div class="container text-center">
            <div class="row">
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><PeopleIcon/>&nbsp;Total Farmers</div>
                <div className="card-body">
                <h5 className="card-title">100</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><SupervisorAccountSharpIcon/>&nbsp;Unsubsribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
            </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><VerifiedUserSharpIcon/>&nbsp;Subscribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
            </div>
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><PeopleIcon/>&nbsp;Total Farmers</div>
                <div className="card-body">
                <h5 className="card-title">100</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><SupervisorAccountSharpIcon/>&nbsp;Unsubsribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
            </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><VerifiedUserSharpIcon/>&nbsp;Subscribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
            </div>
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><PeopleIcon/>&nbsp;Total Farmers</div>
                <div className="card-body">
                <h5 className="card-title">100</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><SupervisorAccountSharpIcon/>&nbsp;Unsubsribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
            </div>
                <div class="col">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="d-flex mb-3">
                <div className="p-2">
                <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header"><VerifiedUserSharpIcon/>&nbsp;Subscribed Farmers</div>
                <div className="card-body">
                <h5 className="card-title">50</h5>
                </div>
                </div>
                </div>
                </Box>
                </div>
            </div>
        </div>
        </div>
        </>
        </Base>
    )
}
export default Home;