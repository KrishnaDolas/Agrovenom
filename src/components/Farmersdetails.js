import { User2Icon } from "lucide-react";
import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



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
  

// server stuff from here 
const [formData, setFormData] = React.useState({
  businessname: '',
  contactno: '',
  subscriptiondate: '',
  subscription: '',
  transactionDetails: '',
  multiuser: false,
});

const { businessid } = useParams();
const navigate = useNavigate();

    React.useEffect(() => {
      const fetchData = async () => {
        try { 
          const response = await fetch(`/api/BusinessDetails/${businessid}`);
          const result = await response.json();

          // Check if the response status is success
          if (result.status === 'success') {
            // Set data from the nested structure
            setFormData({
              businessname: result.data.businessname,
              contactno: result.data.contactno,
              subscriptiondate: result.data.subscriptiondate,
              multiuser: result.data.multiuser === 1, // Convert 0/1 to boolean
            });
          } else {
            console.error('API request failed:', result.message);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [businessid]);
    

const handleUpdate = async () => {
  try {
    // Send updated data to the server for the specific farmer
    const response = await fetch(`/api/farmers/${businessid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle success as needed
    console.log('Update successful');
    } catch (error) {
      console.error('Error updating data:', error);
    }
};

const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === 'checkbox' ? checked : value,
  }));
};

const divstyle = {
  paddingTop: '80px',
};

  return ( 
    <Base>
    <div style={divstyle}>
      <div className="text-center">
      <h5><User2Icon/>&nbsp;Farmers Details</h5><hr className='text-success'/>
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
            <label for="businessname" class="col-sm-2 col-form-label">Farmers Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="Farmersname" placeholder="Farmers Name"  value={formData.businessname} disabled />
            </div>
          </div>
          <div class="row mb-3">
            <label for="contactno" class="col-sm-2 col-form-label">Mobile No.</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" formControlName="contactno" placeholder="Mobile No."  value={formData.contactno} disabled />
            </div>
          </div>
          <div class="row mb-3">
            <label for="subscriptiondate" class="col-sm-2 col-form-label">Subscription Date</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" formControlName="activationdate"  value={formData.subscriptiondate} disabled />
            </div>
          </div>

          <form>
            <div class="row mb-3">
              <label for="subscription" class="col-sm-2 col-form-label">Subscription</label>
              <div class="col-sm-10">
                <div class="dropdown-with-arrow">
                  <select class="form-control" aria-label="Default select example" formControlName="amount"  value={formData.subscription}>
                    <option value="" selected>-- Select Subscription --</option>
                    <option>Monthly- Rs.149</option>
                    <option>Yearly Single User- Rs.999</option>
                    <option>Yearly MultiUser- Rs.1799</option>
                  </select>
                  <div class="arrow-down"></div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label for="perticulars" class="col-sm-2 col-form-label">Transaction Details</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" formControlName="status" placeholder="Transaction Details"  value={formData.transactionDetails} />
              </div>
            </div><br/>

            <div class="flex-container mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" formControlName="multiuser" style={ipstyle}  value={formData.multiuser}/>
                <label class="form-check-label" for="exampleCheckbox" style={labelstyle}>
                  Enable multiuser?
                </label>
              </div>
            </div><br/>

            <div fxLayoutGap="25px" className="d-grid gap-2 d-md-block"><br/>
              <button type="submit" class="btn btn-primary" onClick={handleUpdate}>Update</button>&nbsp;&nbsp;&nbsp;
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