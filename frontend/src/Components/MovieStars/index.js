import {ReactComponent as StarFull} from '../../assets/img/star-full.svg';
import {ReactComponent as StarHalf} from '../../assets/img/star-half.svg';
import {ReactComponent as StarEmpety} from '../../assets/img/star-empyt.svg';
import './styles.css';

function MovieStars(){
    return(
     <div className="dsmovie-stars-conatiner">
         <StarFull />
         <StarFull />
         <StarFull />
         <StarHalf />
         <StarEmpety />
     </div>

    );
}

export default MovieStars;