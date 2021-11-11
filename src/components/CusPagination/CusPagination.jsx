import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./CusPagination.css";

const lightTheme = createTheme({
  palette: {
    type: "dark",
  },
});
const CusPagination = ({ setPage, numOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      className="PaginationDiv"
      style={{
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: "white",
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <Pagination
          count={numOfPages}
          shape="rounded"
          color="secondary"
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CusPagination;
