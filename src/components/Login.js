import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import icon from '../Assets/icon.png';
import LoginIcon from '@mui/icons-material/Login';
import { login } from './help';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
        const[data,setData]=useState({
            adminname:'',
            adminpassword:''
        })

        const navigate = useNavigate();   

        const submitform= async (event)=>{
            event.preventDefault()
            console.log(data);
            try {
                const response = await fetch('/api/AdminLogin/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
          
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
          
                const result = await response.json();
                console.log('Success Log:', result);
                if (result.message === 'Valid User') {
                    // If login is successful, navigate to the home page
                    navigate('/Home');
                  }
              } 
              catch (error) {
                console.error('Error Log:', error);
              }
              
            } 
            
        

        const handelchange=(event,property)=>{
            setData({...data,[property]:event.target.value});
            
        }

        const divstyle={
        paddingTop:'80px',}

    

    return ( 
        <div style={divstyle}>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                {/* empty */}
                </div>
                <div className="col-4 mx-auto p-2">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia>
                            <img src={icon} width={150} height={150}/>
                        </CardMedia>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {/* <LoginIcon/>Login */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <form onSubmit={submitform}>

                            <h3 className="fw-normal mb-3 pb-3"><LoginIcon/>&nbsp;Log in</h3>
                            <div className="form-outline mb-4">
                            <input type="name" class="form-control" id="text" aria-describedby="emailHelp" placeholder='Admin Name' onChange={(e)=>handelchange(e,'adminname')} value={data.adminname}/>

                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder='Password' onChange={(e)=>handelchange(e,'adminpassword')} value={data.adminpassword}/>
                            </div>
                            <div className="pt-1 mb-4">
                            <button className="btn btn-info btn-lg btn-block" type="button" onClick={submitform}>Login</button>
                            </div>
                        </form>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div className="col">
                {/* empty */}
                </div>
            </div>
            </div>
            </div>
     );
    }


export default Login;