import React from 'react'

export default function searchBar(props) {
    const {handleChange,searchText}=props;
    return (
        <div>
            <input type="search" onChange={handleChange} id="searchbar" placeholder="Search For Superheroes" value={searchText}/>
        </div>
    )
}
