import React,{useState} from 'react'
import {Paper,TableContainer,TableRow,TableCell,TableHead,TableBody,Pagination,Table} from '@mui/material'
import {useSelector} from 'react-redux'
import {fetchData} from '../Redux/Reducer'
import moment from 'moment'
import {useHistory} from 'react-router-dom'
const PaginationTable = (props:any) =>{

	const history = useHistory()
const data = useSelector(fetchData)
const [page,setPage] = useState(0)
const [pageValue,setPageValue] = useState(0)
const jsonDetailHandler =(e:any,val:any) =>{
	setPage(val)
	setPageValue(val-1)
}

const detailHandler =(value:any) =>{
	history.push({
		pathname:'/JsonDetail',
		state:{value}
	})
}

return (
	<>
<Paper>
<TableContainer>
<Table stickyHeader aria-label = 'sticky table'>
<TableHead >
<TableRow>
<TableCell>Created_at</TableCell>
<TableCell>Title</TableCell>
<TableCell>Author</TableCell>
<TableCell>URL</TableCell>
</TableRow>
</TableHead>
<TableBody>
{data.slice(pageValue*20,pageValue*20 + 20)
.map((val:any,index:number) =>{
	return <TableRow key={index} onClick={()=>detailHandler(val)}>
<TableCell>{moment(val.created_at).format('LLLL')}</TableCell>
<TableCell>{val.title}</TableCell>
<TableCell>{val.author}</TableCell>
<TableCell>{val.url}TableCell</TableCell>
	</TableRow>
})

}
</TableBody>
</Table>
<Pagination
count={props.pageNumber + 1}
page={page}
onChange={jsonDetailHandler}
color='primary'
variant = 'outlined'
shape='rounded'
/>
</TableContainer>
</Paper>
</>
	)
}

export default PaginationTable