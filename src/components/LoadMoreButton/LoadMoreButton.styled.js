import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  margin: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accent};
  transition: all ${p => p.theme.transitions.cubic};
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  font-style: italic;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  min-width:  ${p => p.theme.sizes[1]}px;
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color ${p => p.theme.transitions.cubic};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.active};
    box-shadow: ${p => p.theme.shadows.hover};

  }
`;
