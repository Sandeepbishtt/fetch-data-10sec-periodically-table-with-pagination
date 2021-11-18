import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router'

const JsonDetail = () => {
    const [rawJson,setRawJson] = useState([])
    const location:any = useLocation();
    
  useEffect(() => {
    setRawJson(location.state)
  })
    return (
        <div>
            <h1>Raw JSON Data</h1>
           {JSON.stringify(rawJson)}
        </div>
    )
}

export default JsonDetail
