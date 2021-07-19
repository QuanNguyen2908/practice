import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DateIcon from "../Svg/DateIcon";
import Avatar from "@material-ui/core/Avatar";
import BoxStatus from "../BoxStatus";
import BoxPoint from "../BoxPoint/Index";
import IconFilter from "../Svg/IconFilter";
import ShowTotal from "../ShowTotal";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface ViewStaticProps {
  chart?: boolean;
}

interface Status {
  bug: boolean;
  bonus: boolean;
  done: boolean;
}

interface Point {
  increase: number;
  reduction: number;
}

interface Data {
  name: string;
  status: Status;
  point: Point;
  total: number
}

function createData(name: string, status: Status, point: Point, total:number): Data {
  return { name, status, point, total };
}

const rows = [
  createData(
    "Nguyen Duc Quan",
    { bug: true, bonus: true, done: true },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "China",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Italy",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "United States",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Canada",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Australia",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Germany",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Ireland",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Mexico",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Japan",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "France",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "United Kingdom",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Russia",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Nigeria",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
  createData(
    "Brazil",
    { bug: true, bonus: true, done: false },
    { increase: 100, reduction: 500 },
    1000
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  avatarStyle: {
    backgroundColor: "#DAE9FC",
  },
});

export default function ViewStatic({ chart }: ViewStaticProps) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }} colSpan={2}>
                {chart ? "Charts" : "View Statistic"}
              </TableCell>
              <TableCell style={{ minWidth: 100 }} align="right" colSpan={2}>
                <Button
                  variant="outlined"
                  startIcon={chart ? <IconFilter /> : <DateIcon />}
                  style={{ textTransform: "none" }}
                >
                  {chart ? "Total" : "Today"}
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell style={{width:50}} >
                      <Avatar className={classes.avatarStyle}>NP</Avatar>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    {chart ? (
                      <>
                        <TableCell align="right">
                          <ShowTotal total={row.total} />
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>
                          <BoxStatus title={row.status} />
                        </TableCell>
                        <TableCell align="right">
                          <BoxPoint point={row.point} />
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
