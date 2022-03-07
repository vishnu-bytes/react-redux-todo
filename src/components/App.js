import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Home from "./Home";
import EditData from "./EditData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsList from "./Items/ItemsList";

const App = () => {
  return (
    <div className="wrapper">
      <div className="wrapper_content">
        <h1>TODOS</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditData />} />
          </Routes>
          <ItemsList />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default connect()(App);
