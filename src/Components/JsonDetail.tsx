import React from 'react'
import {useLocation} from 'react-router-dom'

const JsonDetail =() => {
	const location = useLocation()
return (
<div data-test='component-app'>
{JSON.stringify(location.state)}
</div>
		)
}

export default JsonDetail