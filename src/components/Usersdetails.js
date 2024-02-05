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

function Usersdetails() {
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
            <label for="username" class="col-sm-2 col-form-label">User Name</label>
            <div class="col-sm-10">
              <input type="text" formControlName="username" class="form-control" placeholder="User Name"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="mobileno" class="col-sm-2 col-form-label">Mobile No.</label>
            <div class="col-sm-10">
              <input type="text" formControlName="mobileno" class="form-control" placeholder="Mobile No" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="businessid" class="col-sm-2 col-form-label">Business ID</label>
            <div class="col-sm-10">
              <input type="text" formControlName="businessid" class="form-control" placeholder="Business ID" readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="userrole" class="col-sm-2 col-form-label">User Role</label>
            <div class="col-sm-10">
              <input type="text" formControlName="userrole" class="form-control" placeholder="User Role" readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="useraccess" class="col-sm-2 col-form-label">User Access</label>
            <div class="col-sm-10">
              <div class="dropdown-with-arrow">
                <select class="form-control" aria-label="Default select example" formControlName="useraccess">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div class="arrow-down"></div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="androidid" class="col-sm-2 col-form-label">Android ID</label>
            <div class="col-sm-10">
              <input type="text" formControlName="androidid" class="form-control" placeholder="Android ID"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="deviceinfo" class="col-sm-2 col-form-label">Device Info</label>
            <div class="col-sm-10">
              <input type="text" formControlName="deviceinfo" class="form-control" placeholder="Device Info"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="status" class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-10">
              <input type="text" formControlName="status" class="form-control" placeholder="Status" readonly />
            </div>
          </div>

          <div fxLayoutGap="25px"><br/>
            <button type="button" class="btn btn-primary"></button>
            <button type="button" class="btn btn-success"></button>
            <button type="button" class="btn btn-danger" routerLink="/home/users">Close</button>
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

export default Usersdetails;