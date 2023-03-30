import styled from 'styled-components';

export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  padding: ${p => p.theme.space[3]}px;
  background-color:${p => p.theme.colors.container};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Img = styled.img`
 max-width: calc(100vw - 60px);
  max-height: calc(100vh - 40px);
height:calc(100% - 24px);
border-radius: ${p => p.theme.radii.normal};
object-fit: contain;
`;

