import SettingsIcon from '@mui/icons-material/Settings';
import Base from './Base';
import Appconfigurationtable from './Appconfigurationtable';

function AppConfiguration() {
    const divstyle={
        paddingTop:'80px',
    }
    return ( 
        <Base>
        <div style={divstyle}>
        <h5 className='text-center'><SettingsIcon/>&nbsp;Appconfiguration</h5><hr className='text-success'/>
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
                    <Appconfigurationtable/>
            </div>
            <div class="col">
                {/* empty space for table to be on specific location   */}
            </div>
            </div>
        </div>
        </Base>
     );
}


export default AppConfiguration;