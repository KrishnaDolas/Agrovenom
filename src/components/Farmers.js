import { Work } from '@mui/icons-material';
import Base from './Base';
import * as React from 'react';
import BasicTable from './Farmerstable';

function Farmers() {
    const divstyle={
        paddingTop:'80px',
    }
    return ( 
        <Base>
        <div style={divstyle}>
        <h5 className='text-center'><Work/>&nbsp;Farmers</h5><hr className='text-success'/>
        <div class="container text-center">
        <div class="row">
        <div class="col">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
        </div>
        <div class="col">
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Select Businesses</option>
            <option value="1">All</option>
            <option value="2">Active</option>
            <option value="3">Trial</option>
            <option value="4">Expired</option>
        </select>
        </div>
        <div class="col">
        <button mat-raised-button type="button" class="btn btn-primary btn-lg">Subscription Status</button>
        </div>
        </div>
        </div>
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col">
                {/* empty space for table to be on specific location   */}
                </div>
            <div class="col-12">
                    <BasicTable/>
            </div>
            <div class="col">
                {/* empty space for table to be on specific location   */}
            </div>
            </div>
        </div>
        </Base>
     );
}


export default Farmers;