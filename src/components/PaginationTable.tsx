import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getAllData, isLoadingData } from "../Redux/PostSlice";
import { Paper } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Pagination } from "@mui/material";

const PaginationTable = (props: any) => {
  const history = useHistory();
  const data = useSelector(getAllData);
  const load = useSelector(isLoadingData);
  console.log(data)

  const columns = [
    { id: "created_at", label: "Created_at", minWidth: 170 },
    { id: "title", label: "Title", minWidth: 100 },
    { id: "author", label: "Author", minWidth: 170 },
    { id: "Url", label: "Url", minWidth: 170 },
  ];

  const [page, setPage] = useState(0);
  const [pageValue, setPageValue] = useState(0);

  const modalClickHandler = (id: number, val: any) => {
    history.push({
      pathname: `/JsonDetail/${id}`,
      state: { val },
    });
  };

  const changeHandler = (e: any, val: any) => {
    setPage(val);
    setPageValue(val - 1);
  };

  return (
    <>
      <div style={{ height: 750 }}>
        <h1 style={{ textAlign: "center" }}>Pagination with API</h1>

        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#baffdb",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(pageValue * 20, pageValue * 20 + 20)
                  .map((val: any, index: any) => {
                    return (
                      <TableRow
                        key={val.created_at_i}
                        onClick={() => modalClickHandler(val.created_at_i, val)}
                      >
                        <TableCell>{val.created_at}</TableCell>
                        <TableCell>{val.title}</TableCell>
                        <TableCell>{val.author}</TableCell>
                        <TableCell>{val.url} </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>

            {load && (
              <Pagination
                style={{ margin: "2rem", marginLeft: "50%" }}
                count={props.pageNumber + 1}
                page={page}
                onChange={changeHandler}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            )}
          </TableContainer>
        </Paper>
      </div>
    </>
  );
};

export default PaginationTable;
