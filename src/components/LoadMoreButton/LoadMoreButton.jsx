import { Button } from './LoadMoreButton.styled';
// import { StyledBar } from './Searchbar.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
      <Button type="button" onClick={onClick}>
        Load More
      </Button>
  );
};
export default LoadMoreButton;
