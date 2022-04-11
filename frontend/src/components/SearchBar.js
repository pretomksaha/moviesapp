import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function Search() {

    const [items, setItems] = useState([]);


    const [sarch, setSearch] = useState('');


    const searchData = () => {
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
                            <button onClick={searchData} value="Search" class="btn btn-primary mb-2" />
                        </div>
                    </div>

                    {
                        items.map(item => (
                            <div class="row padding">
                                <div class="alert alert-info rounded-pill" role="alert">
                                    <i class="fa fa-user mr-2"></i> <i>{item.title} ({item.year}): {item.plot}</i>
                                </div>
                            </div>       
                        ))
                }
            </div>
        </section>
        );
}


export default Search;