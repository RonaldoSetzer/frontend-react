import styled from 'styled-components';

import { displays } from '../../utils/colors';

export const Button = styled.button`
  border: none;
  background: transparent;
  width: 3rem;
`;

export const Container = styled.li`
  display: flex;
  background: ${props => props.color || displays.boundarysoft};
  opacity: ${props => (props.status === 'done' ? 0.5 : 1)};
  border-radius: 5px;
  border: none;
  margin-bottom: 0.3rem;
  align-items: center;
`;

export const Content = styled.div`
  flex: 2;
`;
