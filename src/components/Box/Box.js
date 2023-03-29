import styled from 'styled-components';

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  typography,
  grid,
  background,
  border,
  position,
  shadow
);

export default Box;
