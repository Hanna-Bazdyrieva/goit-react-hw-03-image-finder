import { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import LoadMoreButton from 'components/LoadMoreButton';
import { getSearchedPicturesApi } from 'services/PixabayAPI';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Title from 'components/Title';
import Section from 'components/Section';

class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: '',
    modalData: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.query) {
      return { page: 1, query: props.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (
      (prevProps.query !== query && query !== '') ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setImages();
    }
  }

  setImages = async () => {
    const { page, query } = this.state;

    this.setState({ isLoading: true, error: null });

    try {
      const data = await getSearchedPicturesApi(query, page);

      if (data.hits.length === 0) {

        throw new Error("OOPS... We found nothing... Sorry..")};

      this.setState(prevState => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      // console.log(error);

      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState((prevState)=>({page: prevState.page + 1}))
  };

  openModal = modalData => {
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { isLoading, error, images, modalData } = this.state;
    return (
      <Section>
        {isLoading && <Loader />}
        {error ? (
          <Title>{error}</Title>
        ) : (
          <>

            <Gallery images={images}>
              {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  url={webformatURL}
                  urlLarge={largeImageURL}
                  openModal={this.openModal}
                />
              ))}
            </Gallery>
            {images.length > 0 && (
              <LoadMoreButton onClick={this.changePage} />
            )}
            {modalData && <Modal {...modalData} closeModal={this.closeModal} />}
          </>
        )}
      </Section>
    );
  }
}
export default ImageGallery;
