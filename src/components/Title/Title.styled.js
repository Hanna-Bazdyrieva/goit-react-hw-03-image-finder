import styled from "styled-components";

export const StyledHeader = styled.h2`
margin: ${p => p.theme.space[5]}px auto;
max-width: ${p => p.theme.sizes[4]}px;
padding: ${p => p.theme.space[6]}px;
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
letter-spacing: ${p => p.theme.letterSpacings.title};
text-align: center;
font-style: italic;
background-color:${p => p.theme.colors.red};
border-radius: ${p => p.theme.radii.normal};
`;
