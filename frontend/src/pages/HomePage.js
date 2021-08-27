import React, { useState } from 'react';
import TextItem from './TextItem';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const HomePage = () => {
  const [state, setState] = useState([]);

  const _handleChange = event => {
    this.setState({ value: event.target.value });
  };
  const _handleSubmit = () => {
    const { value } = state;
    axios.post('/api/post/', { text: value }).then(res => _renderText());
  };
  const _renderText = () => {
    axios.get('/api/post/').then(res => {
      setState(res.data);
    });
  };

  return (
    <div className="App">
      <h1>OneLine App</h1>
      <div>
        <label>
          Text:
          <input type="text" value={state.value} onChange={_handleChange} />
        </label>
        <button onClick={_handleSubmit}>submit</button>
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
