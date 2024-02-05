import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserIcon } from "lucide-react";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Appconfigurationdetails() {
    const divstyle={
        paddingTop:'80px',
    }
    return ( 
        <Base>
         <div style={divstyle}>
        <div className="text-center">
        <h5><UserIcon/>&nbsp;Business Details</h5><hr className='text-success'/>
        </div>
        <div class="container text-center">
        <div class="row">
            <div class="col">
            {/* empty */}
            </div>
            <div class="col-10">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* empty */}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {/* empty */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* empty */}
                    </Typography>
                    <Typography variant="body2">
                    <form>
                    <div class="row mb-3">
                        <label for="configuration" class="col-sm-2 col-form-label">Configuration</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" formControlName="configname"
                                placeholder="Configuration" readonly />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="value" class="col-sm-2 col-form-label">Value</label>
                        <div class="col-sm-10">
                                <input type="text" class="form-control" formControlName="configvalue"
                                    placeholder="Value" />
                                {/* <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg, image/webp"
                                    class="form-control" formControlName="base64_code" placeholder="Value"></input> */}
                                        <br/>
                                {/* <div>
                                    <img height="150px" width="150px" />
                                </div> */}
                        </div>
                    </div>

                    <div fxLayoutGap="25px"><br/>
                        <button type="button" class="btn btn-primary">Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-danger" routerLink="/home/appConfig">Close</button>
                    </div>
                </form>
                    
                    </Typography>
                </CardContent>
                </Card>
            </div>
            <div class="col">
            {/* empty */}
            </div>
        </div>
        </div>
        </div>
        </Base>
     );
}

export default Appconfigurationdetails;