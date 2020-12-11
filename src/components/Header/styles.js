import styled from 'styled-components';
import { palette } from '../../utils/colors';

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

export const Line = styled.hr`
  margin: 0 0 1rem;
  padding: 0;
  width: 100%;
  height: 0.2rem;
  border: none;
  background: linear-gradient(
    90deg,
    ${palette.primary} 50%,
    ${palette.secondary} 60%,
    ${palette.danger} 70%,
    ${palette.warning} 80%,
    ${palette.info} 90%
  );
`;
