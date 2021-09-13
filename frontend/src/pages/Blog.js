import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/sidebar';
import TextItem from './TextItem';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Main = styled.div``;

const Container = styled.div``;

const Postwrap = styled.ul`
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-wrap: wrap;
`;

const BlogPage = () => {
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
    <Container>
      <Sidebar />
      <Main>
        <div>
          <button onClick={_renderText}>불러오기</button>
        </div>
        <Postwrap>
          {state.map((text, index) => {
            return (
              <TextItem
                title={text.title}
                key={index}
                id={text.id}
                author={text.author}
                created_date={text.created_date.substring(0, 10)}
                published_date={text.published_date.substring(0, 10)}
              />
            );
          })}
          <TextItem
            title="제목"
            id="id"
            author="저자"
            created_date="날짜"
            published_date="수정일"
          />
          <TextItem
            title="제목"
            id="id"
            author="저자"
            created_date="날짜"
            published_date="수정일"
          />
        </Postwrap>
      </Main>
    </Container>
  );
};

export default BlogPage;
