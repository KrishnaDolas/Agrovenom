import { IndianRupeeIcon } from "lucide-react";
import Base from "./Base";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams,useNavigate } from "react-router-dom";

function Subscriptionsdetails() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      const [formData, setFormData] = React.useState({
        subscriptionid: '',
        subscription: '',
        duration: '',
        amount: '',
      });
      
      const { subscriptionid } = useParams();
      const navigate = useNavigate();
     
      
          React.useEffect(() => {
            const fetchData = async () => {
              try { 
                const response = await fetch(`/api/SubscriptionsDetails/${subscriptionid}/`,{
                  method : "GET"
                });
                const result = await response.json();
                console.log("response is ",result)
      
                // Check if the response status is success
                if (result.status === 'success') {
                  // Set data from the nested structure
                  setFormData({
                    subscriptionid: result.data.subscriptionid,
                    subscription: result.data.subscription,
                    duration: result.data.duration,
                    amount: result.data.amount, // Convert 0/1 to boolean
                  });
                } else {
                  console.error('API request failed:', result.message);
                }
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
      
            fetchData();
          }, []);
          
      
      const handleUpdate = async () => {
        try {
          // Send updated data to the server for the specific farmer
          const response = await fetch(`/api/SubscriptionsDetails/${subscriptionid}/`, {
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
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      const divstyle = {
        paddingTop: '80px',
      };
    return ( 
       <Base>
       <div style={divstyle}>
        <div className="text-center">
        <h5><IndianRupeeIcon/>&nbsp;Subscription Details</h5><hr className='text-success'/>
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
                disabled value={formData.subscription} />
            </div>
          </div>
          <div class="row mb-3">
            <label for="duration" class="col-sm-2 col-form-label">Duration</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="duration" placeholder="Duration" disabled value={formData.duration} />
            </div>
          </div>
          <div class="row mb-3">
            <label for="amount" class="col-sm-2 col-form-label">Amount</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" formControlName="amount" placeholder="Amount" value={formData.amount} />
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