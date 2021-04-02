/* eslint-disable react/prop-types */
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ButtonToggle } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import CricketData from "./json/Cricket.json";
import Nbadata from "./json/Nba.json";
import { switchto } from "./services/actions/action";
import Cricket from "./components/Cricket.jsx"
import Nba from "./components/Nba.jsx"

const App = () => {
  const toggle = useSelector((state) => state.tG.toggle);
  const score = useSelector((state) => state.tG.data)
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <ButtonToggle color="success" onClick={() => dispatch(switchto(CricketData))}>Cricket / NBA </ButtonToggle>
      <br />
      <br />
      {toggle ? <Cricket score={score} /> : <Nba score={Nbadata} />}
    </div>
  );
}



export default App;






