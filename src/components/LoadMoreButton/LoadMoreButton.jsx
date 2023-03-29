import Box from 'components/Box';
import { Button } from './LoadMoreButton.styled';
// import { StyledBar } from './Searchbar.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <Box mx="auto" my={0} px={6} py={4} bg="container" textAlign="center">
      <Button type="button" onClick={onClick}>
        Load More
      </Button>
    </Box>
  );
};
export default LoadMoreButton;
