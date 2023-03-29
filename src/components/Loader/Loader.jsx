import { Blocks } from 'react-loader-spinner';
import Box from 'components/Box/Box';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');
// transfer query for header
const Loader = () => {
  return createPortal(
    <Box mx="auto" my={0} px={6} py={4} bg="container" textAlign="center">
      <h2>Searching for You</h2>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Box>,
    loaderRoot
  );
};
export default Loader;
