import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { clear } from "../../Ducks/ModalReducer/ModalReducer";
import { connect } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const CustomModal = ({ open, message, clear }) => (
  <ReactModal
    isOpen={open}
    style={customStyles}
    overlayClassName="bg-black"
    shouldCloseOnOverlayClick
    onRequestClose={clear}
    ariaHideApp={false}
  >
    <div className="relative">
      <h1 className="text-center">{message}</h1>
      <button className="text-center my-8" onClick={clear}>
        Close
      </button>
    </div>
  </ReactModal>
);

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired
};

const mS = state => ({
  open: state.modal.open,
  message: state.modal.message
});

const mD = { clear };

export default connect(
  mS,
  mD
)(CustomModal);
