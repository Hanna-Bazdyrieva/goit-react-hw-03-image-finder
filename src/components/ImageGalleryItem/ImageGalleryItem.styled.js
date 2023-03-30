import styled from 'styled-components';

export const GalleryItem = styled.li`
`;

export const ItemImage = styled.img`

  width: 100%;
  height: ${p => p.theme.sizes[1]}px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: box-shadow ${p => p.theme.transitions.cubic}, transform ${p => p.theme.transitions.cubic};

  :hover {
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.max};
    cursor: zoom-in;
  }
`;
