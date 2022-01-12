import MovieCard from "../../MovieCard";

import Pagination from "../../Pagination";

function Listing(){

    return(
        <>
            <Pagination/>
            <div className="container">
              <div className="row">
                <div className="col">
                <MovieCard />
                </div>
              </div>
            </div>
           
        </>
        
    )
}

export default Listing;