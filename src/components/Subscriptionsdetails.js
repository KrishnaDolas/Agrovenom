import { IndianRupeeIcon } from "lucide-react";
import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Subscriptionsdetails() {
    const divstyle={
        paddingTop:'80px',
    }
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return ( 
       <Base>
       <div style={divstyle}>
        <div className="text-center">
        <h5><IndianRupeeIcon/>&nbsp;Business Details</h5><hr className='text-success'/>
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
            <label for="subscription" class="col-sm-2 col-form-label ">Subscription</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="subscription" placeholder="Subscription"
                readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="duration" class="col-sm-2 col-form-label">Duration</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="duration" placeholder="Duration" readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="amount" class="col-sm-2 col-form-label">Amount</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="amount" placeholder="Amount" />
            </div>
          </div>
          <div fxLayoutGap="25px"><br/>
            <button type="button" class="btn btn-primary">Update</button>&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger" routerLink="/home/subscription">Close</button>
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

export default Subscriptionsdetails;