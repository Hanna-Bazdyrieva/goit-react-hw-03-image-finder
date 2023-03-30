import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin: ${p => p.theme.space[0]} auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}
    ${p => p.theme.space[3]}px;
  max-width: ${p => p.theme.space[11]}px;
  text-align: center;
  background-color: ${p => p.theme.colors.section};
`;

export const Title = styled.h2`
  margin: ${p => p.theme.space[2]}px auto;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacings.title};
  text-align: center;
  font-style: italic;
`;