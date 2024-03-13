import React from 'react';
import './App.css';
import { useState } from 'react'

function SingleBox(props) {
  let initialState = false;
  let [isSelected, setIsSelected] = useState(initialState);

  function changeSelected() {
    const newStatus = !isSelected;
    setIsSelected(newStatus);
    props.toChange(newStatus);
  }

  return (
    <div className={`box ${isSelected ? 'selected' : 'box'}`} onClick={changeSelected}></div>
  );
}

export default SingleBox;