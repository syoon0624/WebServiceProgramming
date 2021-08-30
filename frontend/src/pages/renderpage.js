import React, { useState } from 'react';
import TextItem from './TextItem';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const HomePage = () => {
  const [state, setState] = useState([]);

  const _renderText = () => {
    axios.get('/api/post/').then(res => {
      setState(res.data);
    });
  };

  if (state.length === 0) {
    _renderText();
  }

  return (
    <div className="App">
      <h1>OneLine App</h1>
      <div>
        <button onClick={_renderText}>불러오기</button>
      </div>
      <h2>Long Text</h2>
      {state.map((text, index) => {
        return <TextItem text={text.text} key={index} id={text.id} />;
      })}
    </div>
  );
};

export default HomePage;
