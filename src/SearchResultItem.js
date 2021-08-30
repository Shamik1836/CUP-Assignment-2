import React, { useState } from 'react'



export default function SearchResultItem(props) {
    const { data } = props;
    const [viewDetails, setViewDetails] = useState(false);
    
    return (
        
        <div>
            {
                viewDetails ? <div className="card" style={{width: "18rem"}}>
                    <img src={data.image.url} class="card-img-top" alt={data.name} />
                    <div class="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">Gender: {data.appearance.gender}
                                                <br/>
                                                Race: {data.appearance.race}
                                                <br/>
                                                Height: {data.appearance.height[0]}</p>
                    </div>
                </div> : <div className="card" style={{ width: "18rem" }}>
                    <img src={data.image.url} className="card-img-top" alt={data.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">Publisher:{data.biography.publisher}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Intelligence:{data.powerstats.intelligence}</li>
                        <li className="list-group-item">Speed:{data.powerstats.speed}</li>
                        <li className="list-group-item">Power:{data.powerstats.power}</li>
                    </ul>
                </div>
            }
            <button onClick={() => setViewDetails(false)} className="btn btn-primary">Minimize Details</button>
            <button onClick={() => setViewDetails(true)} className="btn btn-danger">View Details</button>
        </div>

    )
}






















