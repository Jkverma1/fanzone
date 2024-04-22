import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { trophy } from "assets/css/trophy";

const PointsTable = () => {
  const theme = useTheme();
  const classes = trophy();
  const tableHead = ["Team", "P", "W", "L", "T", "S/D", "Form", "Pts"];
  return (
    <TableContainer style={{ padding: 0 }} component={Paper}>
      <Table style={{ width: "100%", padding: 0 }}>
        <TableHead>
          <TableRow style={{ backgroundColor: theme.palette.primary.main }}>
            {tableHead.map((value, index) => (
              <TableCell
                key={index}
                style={{
                  border: "none",
                  color: theme.palette.primary.contrastText,
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(12)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>Row</TableCell>
              <TableCell>14</TableCell>
              <TableCell>14</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>120</TableCell>
              <TableCell>
                <Box display="flex" gap={0.5}>
                  {[...Array(5)].map((_, index) => (
                    <Typography
                      className={classes.ballStatus}
                      fontFamily="Montserrat"
                      key={index}
                    >
                      w
                    </Typography>
                  ))}
                </Box>
              </TableCell>
              <TableCell FontWeight="bold">20</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PointsTable;
