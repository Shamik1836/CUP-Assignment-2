import React from 'react'

export default function Details(props) {
    const {details}=props;
    return (
        <div>
            <h1>{details?.appearance?.gender}</h1>
        </div>
    )
}
