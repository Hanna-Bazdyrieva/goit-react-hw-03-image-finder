import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap:  ${p => p.theme.space[4]}px;
  margin-top:  ${p => p.theme.space[4]}px;
  margin-bottom: 0;
  padding: ${p => p.theme.space[3]}px;
  /* background-color:${p => p.theme.colors.section}; */
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
