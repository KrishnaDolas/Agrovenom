import Navbar from "./Navbar";
import Sidebar from "./sidebar"


const Base =({title = " welcome to our website ", children }) =>{

    return(
        <div className="container-fluid p-0 m-0">
            {/* <Navbar/> */}
            <Sidebar/>{children}
            
            
        </div>
    );
};

export default Base;