import React from 'react'
import { useLocation } from 'react-router'

const JsonDetail = () => {
    const location:any = useLocation();
    return (
        <div>
            <h1>Raw JSON Data</h1>
           {JSON.stringify(location.state)}
        </div>
    )
}

export default JsonDetail
