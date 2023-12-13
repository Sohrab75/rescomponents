import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({show, close}) => {
  const handleClose = () => {
    close(); // Call the close function passed from the parent component
  };
  return (
    <>
    <Modal show={show} onHide={close} centered size='sm'>
      <Modal.Body>
        hello Modal
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Ok..............</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default CustomModal