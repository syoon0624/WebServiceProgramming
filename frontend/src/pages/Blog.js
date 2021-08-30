import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/sidebar';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BlogPage = () => {
  return (
    <Container>
      <Sidebar />
      <Main>This is Blog Page.</Main>
    </Container>
  );
};

export default BlogPage;
