import { StyledModal, Overlay, Img } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEscape);
  }

  closeModalByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { id, url } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModalOnBackdrop}>
        <StyledModal>
            <Img src={url} alt={id} />
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
