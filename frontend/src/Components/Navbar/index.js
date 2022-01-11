

import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css';


function Navbar(){
    return(
    <header>
       <nav className="container">
         <div className="dsmovie-nav-content">
           <h1>DSMovie</h1>
           <a href="https://github.com/EdirHerison"> 
             <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovies-contact-link">/EdirHerison</p>
             </div>
           </a>
         </div>
       </nav>
     </header>
    );

}

export default Navbar;