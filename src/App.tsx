import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import JsonDetail from "./components/JsonDetail";
import PaginationTable from "./components/PaginationTable";
import axios from 'axios'
import {
  addData,
  showPagination,
} from "./Redux/PostSlice";
function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((response) => {
        dispatch(addData(response.data));
        dispatch(showPagination());
      })
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 10000);
    if(page === 49){
      clearTimeout(interval)
    }
  }, [page]);

  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/" render={(props) => <PaginationTable pageNumber ={page} />}  />
          <Route exact path="/JsonDetail/:id" component={JsonDetail} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
