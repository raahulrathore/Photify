import "./NavigationButton.css";
import { Button } from "@mui/material";
import { useState } from "react";
const NavigationButton = (props) => {
  return (
    <>
      <div className="navigationButtons">
        <div className="previousButton">
          <Button
            variant="contained"
            disabled={props.pageNo === 1 ? true : false}
            onClick={() => {
              {
                props.pageNo > 1
                  ? props.setPageNo(props.pageNo - 1)
                  : props.setPageNo(1);
              }
              window.scrollTo(0, 0);
            }}
          >
            &laquo; Previous
          </Button>
        </div>
        <div className="nextButton">
          <Button
            variant="contained"
            onClick={() => {
              props.setPageNo(props.pageNo + 1);
              props.setNextClicked(true);
              window.scrollTo(0, 0);
            }}
          >
            Next &raquo;
          </Button>
        </div>
      </div>
      <div className="upArrow">
        <i
          className="fa fa-arrow-circle-up"
          style={{ color: "red", fontSize: "50px" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        ></i>
      </div>
    </>
  );
};

export default NavigationButton;
