import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export function AddPlayer(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitHandle(e) {
    e.preventDefault();
    let obj = {
      name: e.target.elements.player.value,
      score: parseInt(e.target.elements.score.value),
    };
    prop.addsPlayer(obj);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-100">
        ADD PLAYER
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandle}>
          <Modal.Body>
            <Form.Group className="d-flex justify-content-between m-2">
              <Form.Label htmlFor="">Player Name</Form.Label>
              <Form.Control type="text" name="player" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-between m-2">
              <Form.Label htmlFor="">Player Score</Form.Label>
              <Form.Control type="text" name="score" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
