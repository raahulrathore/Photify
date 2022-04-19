import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, FormControl, Container } from "react-bootstrap";
import { Button } from "@mui/material";
const ACCESSKEY = `8heMRiyidBskIk28Ehmmn1dgv08tcVR8kqko-iapyh0`;
const NavbarComp = (props) => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetchAPI();
    // setImg("");
    props.setPageNo(1);
  };

  const fetchAPI = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${props.pageNo}&query=${img}&per_page=30&client_id=${ACCESSKEY}`
    );
    const response = await data.json();
    const result = response.results;
    setRes(result);
    props.setNav(result);
  };

  const usePreviousValue = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevValue = usePreviousValue(props.pageNo);
  useEffect(() => {
    if (prevValue !== props.pageNo) {
      fetchAPI();
    }
  }, [props.pageNo, img]);

  return (
    <>
      <Navbar expand="lg" className="Navbar">
        <Container fluid>
          <p className="navbarLogo">Photify</p>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              formSubmitHandler(e);
            }}
          >
            <FormControl
              type="search"
              placeholder="Search Images. . ."
              className="me-2"
              aria-label="Search"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <Button variant="contained" onClick={(e) => formSubmitHandler(e)}>
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
