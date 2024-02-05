import Base from "./Base";
import React from "react";
import Person2Icon from '@mui/icons-material/Person2';


function Changepassword() {
    const divstyle={
        paddingTop:'80px',
    }
    return ( 
        <Base>
        <div style={divstyle}>
        <h5 className='text-center'><Person2Icon/>&nbsp;Subscriptions</h5><hr className='text-success'/>

        <div class="container text-center">
        <div class="row">
            <div class="col">
            {/* Column1 */}
            </div>
            <div class="col-10">
            <form>
                    <div class="row mb-3">
                        <label for="newPassword" class="col-sm-2 col-form-label">New Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" formControlName="adminpassword"
                                placeholder="New Password"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="retypeNewPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" formControlName="confirmPassword"
                                placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <div fxLayoutGap="15px"><br/>
                        <button type="button" class="btn btn-primary">Change Password</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-danger" routerLink="/home/dashboard">Close</button>
                    </div>
                </form>
            </div>
            <div class="col">
            {/* Column3 */}
            </div>
        </div>
        </div>

        
        </div>
        
        </Base>
     );
}

export default Changepassword;