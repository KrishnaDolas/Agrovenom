import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';import * as React from 'react';
import Subscriptionstable from './Subscriptionstable';
import Base from './Base';

function Subscriptions() {
    const divstyle={
        paddingTop:'80px',
    }
    return ( 
        <Base>
        <div style={divstyle}>
        <h5 className='text-center'><CurrencyRupeeIcon/>&nbsp;Subscriptions</h5><hr className='text-success'/>
        <div class="container text-center">
        <div class="row">
        <div class="col">
        {/* col 1 */}
        </div>
        <div class="col-12">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
        </div>
        <div class="col">
            {/* col3 */}
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
                    <Subscriptionstable/>
            </div>
            <div class="col">
                {/* empty space for table to be on specific location   */}
            </div>
            </div>
        </div>
        </Base>
     );
}


export default Subscriptions;