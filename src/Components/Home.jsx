import { Outlet } from "react-router-dom";
import './estilo.css';

const Welcome = (props) => {
    return(
        <div >
            <h1 className="welcome">Welcome</h1>
            <Outlet/>
        </div>
    );
}
export default Welcome;