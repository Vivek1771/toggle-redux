// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ButtonToggle } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { switchto } from "./services/actions/action";
import Cricket from "./components/Cricket.jsx"
import Nba from "./components/Nba.jsx"

const App = () => {
  const toggle = useSelector((state) => state.tG.toggle);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <ButtonToggle color="success" onClick={() => dispatch(switchto())}>Cricket / NBA </ButtonToggle>
      <br />
      <br />
      {toggle ? <Cricket /> : <Nba />}
    </div>
  );
}



export default App;






