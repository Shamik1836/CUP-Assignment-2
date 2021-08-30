import React from 'react'

import SearchResultItem from './SearchResultItem'

export default function searchResults(props) {
    const {superheroData=[]}=props;
    return (
        <div>
        {superheroData.map(superhero=>
            <SearchResultItem data={superhero}/>
            
        )}
            
            
        </div>
    )
}
