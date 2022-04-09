import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function Search() {
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
          {
              items.map(item =>(
                <div>
                  <h1>Search</h1>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
              ))
          }  

        </section>
    );
}

export default Search;