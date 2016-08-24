import expect from 'expect';
import Redux, { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';


const reducer = (state = 0 , action ) => {
  switch(action.type) {
    case 'CHANGE_LIGHT':
      if (state === 0){
        return 2;
      }
      else{
        return state - 1;
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

const Light = ({ value }) => {
  let red_light;
  let yellow_light;
  let green_light;

  if(value===0){
    red_light = <div class="red light"></div>
  }
  else{
    red_light = <div class="red light off"></div>
  }
  if(value===1){
    yellow_light = <div class="yellow light"></div>
  }
  else{
    yellow_light = <div class="yellow light off"></div>
  }
  if(value===2){
    green_light = <div class="green light"></div>
  }
  else{
    green_light = <div class="green light off"></div>
  }

  return(
    <div>
      <div class = "traffic-light">
        { red_light }
        { yellow_light }
        { green_light }
      </div>
    <button onClick={ () => {store.dispatch({type: 'CHANGE_LIGHT'})} }> Change Light </button>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <Light value={ store.getState() } />,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();
