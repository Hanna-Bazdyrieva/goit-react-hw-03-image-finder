import styled from 'styled-components';

export const StyledBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: ${p => p.theme.colors.accent};
  box-shadow: ${p => p.theme.shadows.max};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  
`;

export const ButtonSearch = styled.button`
  display: block;
  width: ${p => p.theme.sizes[5]}px;
  height: ${p => p.theme.sizes[5]}px;
  border: 0;
  background-color:${p => p.theme.colors.section};
    opacity: 0.8;
  transition: opacity ${p => p.theme.transitions.cubic};

  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
    box-shadow: ${p => p.theme.shadows.inner};

  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: ${p => p.theme.sizes[5]}px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  box-shadow:  ${p => p.theme.shadows.inner};
;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
