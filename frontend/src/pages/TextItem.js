import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostLi = styled.li`
  list-style: none;
  margin: 20px;
  width: 350px;
  height: 300px;
  border-radius: 30px;
  border: 2px solid black;
  box-shadow: #339af0 5px 5px;
  padding: 15px;
`;

const Title = styled.h1`
  margin: 0;
  color: #748ffc;
  border-bottom: 2px solid #63e6be;
`;

const TextItem = ({ title, id, author, created_date, published_date }) => {
  return (
    <PostLi>
      <Title>제목 : {title}</Title>
      <p>작성자 : {author}</p>
      <p>작성일 : {created_date}</p>
      <p>최근 수정일 : {published_date}</p>
      <Link to={'/' + id}>더보기</Link>
    </PostLi>
  );
};

export default TextItem;
