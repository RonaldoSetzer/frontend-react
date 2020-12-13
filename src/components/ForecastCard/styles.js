import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 0;
  margin: 0 0.5rem 0.5rem 0.5rem;
  background: var(--primary);
  color: var(--foreground);

  display: flex;
  flex-direction: column;

  border: none;
  border-radius: 5px;
`;

export const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.strong`
  border-radius: 5px 5px 0 0;
  background: white;
  color: var(--background);
  padding: 0.5rem;
`;
