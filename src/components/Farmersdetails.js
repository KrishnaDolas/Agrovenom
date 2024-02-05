import { User2Icon } from "lucide-react";
import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Farmersdetails() {
  const ipstyle={
    padding: "11px",
  }
  const labelstyle={
    paddingRight: "700px",
    paddingTop: "5px",
    
  }
  const divstyle={
    paddingTop:'80px',
}
  return ( 
    <Base>
    <div style={divstyle}>
      <div className="text-center">
      <h5><User2Icon/>&nbsp;Business Details</h5><hr className='text-success'/>
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
            <label for="businessname" class="col-sm-2 col-form-label">Business Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="businessname" placeholder="Business Name" readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="contactno" class="col-sm-2 col-form-label">Mobile No.</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" formControlName="contactno" placeholder="Mobile No." readonly />
            </div>
          </div>
          <div class="row mb-3">
            <label for="subscriptiondate" class="col-sm-2 col-form-label">Subscription Date</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" formControlName="activationdate" readonly />
            </div>
          </div>

          <form>
            <div class="row mb-3">
              <label for="subscription" class="col-sm-2 col-form-label">Subscription</label>
              <div class="col-sm-10">
                <div class="dropdown-with-arrow">
                  <select class="form-control" aria-label="Default select example" formControlName="amount">
                    <option value="" selected>-- Select Subscription --</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <div class="arrow-down"></div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label for="perticulars" class="col-sm-2 col-form-label">Transaction Details</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" formControlName="status" placeholder="Transaction Details" />
              </div>
            </div><br/>

            <div class="flex-container mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" formControlName="multiuser" style={ipstyle}/>
                <label class="form-check-label" for="exampleCheckbox" style={labelstyle}>
                  Enable multiuser?
                </label>
              </div>
            </div><br/>

            <div fxLayoutGap="25px" className="d-grid gap-2 d-md-block"><br/>
              <button type="submit" class="btn btn-primary">Update</button>&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-danger" routerLink="/home/business">Close</button>
            </div>
          </form>
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

export default Farmersdetails;