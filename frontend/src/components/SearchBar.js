import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function Search({placeholder, data}) {
    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/store');
        const items = await data.json();
        setItems(items)
    };

    return(
      <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Search Movies</h1>
                <form method="POST" action="/Search">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="SearchItem" class="form-control" />
                            <input type="submit" value="Search" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.movie.title} ({item.movie.year}) {item.movie.director}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
            );
}

export default Search;