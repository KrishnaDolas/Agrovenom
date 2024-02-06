import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserIcon } from "lucide-react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Usersdetails() {
    

    // server stuff from here 
const [formData, setFormData] = React.useState({
  username: '',
  mobileno: '',
  businessid: '',
  userrole: '',
  useraccess: '',
  androidid: '',
  deviceinfo:'',
  status:'',
});

const { mobileno } = useParams();
const { androidid } = useParams();
const navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/GetUserDetails/${mobileno}/${androidid}`);
      const result = await response.json();

      if (result.status === 'success') {
        setFormData({
          username: result.data[0].username,
          mobileno: result.data[0].mobileno,
          businessid: result.data[0].businessid,
          userrole: result.data[0].userrole,
          useraccess: result.data[0].useraccess,
          androidid: result.data[0].androidid,
          deviceinfo: result.data[0].deviceinfo,
          status: result.data[0].status,
        });
      } else {
        console.error('API request failed:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [mobileno, androidid]);


const handleUpdate = async () => {
  try {
    // Send updated data to the server for the specific farmer
    const response = await fetch(`/api/GetUserDetails/${mobileno}/${androidid}`, {
      method: 'GET',
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
              <input type="text" formControlName="username" class="form-control" placeholder="User Name" value={formData.username}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="mobileno" class="col-sm-2 col-form-label">Mobile No.</label>
            <div class="col-sm-10">
              <input type="text" formControlName="mobileno" class="form-control" placeholder="Mobile No" value={formData.mobileno}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="businessid" class="col-sm-2 col-form-label">Business ID</label>
            <div class="col-sm-10">
              <input type="text" formControlName="businessid" class="form-control" placeholder="Business ID" disabled value={formData.businessid}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="userrole" class="col-sm-2 col-form-label">User Role</label>
            <div class="col-sm-10">
              <input type="text" formControlName="userrole" class="form-control" placeholder="User Role" disabled value={formData.userrole}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="useraccess" class="col-sm-2 col-form-label">User Access</label>
            <div class="col-sm-10">
              <div class="dropdown-with-arrow">
                <select class="form-control" aria-label="Default select example" formControlName="useraccess" value={formData.useraccess}>
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
              <input type="text" formControlName="androidid" class="form-control" placeholder="Android ID" disabled value={formData.androidid}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="deviceinfo" class="col-sm-2 col-form-label">Device Info</label>
            <div class="col-sm-10">
              <input type="text" formControlName="deviceinfo" class="form-control" placeholder="Device Info" disabled value={formData.deviceinfo}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="status" class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-10">
              <input type="text" formControlName="status" class="form-control" placeholder="Status" disabled value={formData.status}/>
            </div>
          </div>

          <div fxLayoutGap="25px"><br/>
            <button type="button" class="btn btn-primary" onClick={handleUpdate}>Update</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-success">Make New User</button>&nbsp;&nbsp;
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