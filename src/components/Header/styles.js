import styled from 'styled-components';

export const Background = styled.div`
  height: 4rem;
  background: var(--boundary-soft);
`;

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  margin: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`;
