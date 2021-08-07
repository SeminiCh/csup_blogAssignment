import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function HeaderComponent() {
    return (
        <header>
        <div className="header-container"> 
            <div className="right-Menu">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <Link to= "/"> MY BLOG </Link>  
            </div>
            <div className="left-Menu">
                    <Link to ="/">Home </Link>
                    <Link to ="/create" className="button-container"> Add Post </Link>
            </div>
        </div>
    </header>
    );

    
};

export default HeaderComponent;
