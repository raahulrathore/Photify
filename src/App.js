import logo from "./logo.svg";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import NavigationButton from "./components/Footer/NavigationButton";
import NavbarComp from "./components/Navbar/NavbarComp";
import ImageCard from "./components/Card/Card";
function App() {
  const [nav, setNav] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [nextClicked, setNextClicked] = useState(false);

  const usePreviousValue = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  return (
    <div className="App">
      <NavbarComp setNav={setNav} pageNo={pageNo} setPageNo={setPageNo} />
      <ImageCard imageData={nav} />
      {!!nav.length && (
        <NavigationButton
          pageNo={pageNo}
          setPageNo={setPageNo}
          setNextClicked={setNextClicked}
        />
      )}
    </div>
  );
}

export default App;
