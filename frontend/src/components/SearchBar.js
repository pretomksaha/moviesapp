import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

// search and show the list of data 
function Search() {
    const [items, setItems] = useState([]);
    const [sarch, setSearch] = useState('');

    const searchData = () => { // fetch the date from backend
        fetch('http://localhost:4000/search?SearchItem='+sarch)
        .then(response => response.json())
        .then(data => setItems(data));
    }

    return(
      <section>       
            <div class="container-fluid">
                <h1 class="mt-5">Search Movies</h1>
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input onChange={(e)=>setSearch(e.target.value)} type="text" name="SearchItem" class="form-control" />
                            <button onClick={searchData} value="Search" class="btn btn-primary" >Search</button>
                        </div>
                    </div>

                    {
                        // create a list of search data
                        items.map(item => (  
                                <div class="container mt-4 mb-4">
                                    <div class="row bg-info">
                                        <div class="row justify-content-center">
                                            <div class="col-4">
                                                <img src={item.poster} class="img-thumbnail" alt='movie'></img> 
                                            </div>
                                            <div class="col-4 mt-5">
                                                <p class="h2 text-danger text-left">Title: {item.title}</p>
                                                <p class="h4 text-left mt-4">Year: {item.year}</p>
                                                <p class="h4 text-left">Director: {item.director}</p>
                                                <p class="h6 text-left mt-4">{item.plot}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>                                     
                        ))
                        
                    }
               
            </div>
        </section>
        );
}


export default Search;