import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PaginationTable from './Components/PaginationTable'
import JsonDetail from  './Components/JsonDetail'
import {addData} from './Redux/Reducer'
import {useDispatch} from 'react-redux'
import axios from 'axios'
function App() {
const [page,setPage] = useState(0)
const dispatch = useDispatch()

useEffect(()=>{
axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
.then((response) =>{
  dispatch(addData(response.data))
})
.catch((error) => console.log(error))
},[page])
useEffect(()=>{
  const interval = setTimeout(()=>{
    setPage(prev => prev+1)
  },10000)
  if(page===49){
    clearTimeout(interval)
  }
})

  return (
    <BrowserRouter>
<h2 style ={{textAlign:'center'}}> Pagination App </h2>
     <Switch>
     <Route exact path= '/' render = {(props) => <PaginationTable pageNumber={page}/>}/>
     <Route exact path= '/JsonDetail' component={JsonDetail} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
