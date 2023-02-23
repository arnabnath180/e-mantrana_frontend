import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
export default function Index({status,hide}) {
    const submit=(e)=>{
        e.preventDefault();

        hide();
    }
  return (
    <div>
        <Modal show={status} onHide={hide}>
              <Modal.Header>
              <Modal.Title>Enter details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={submit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Enter doctor email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={hide}>Cancel</button>
              </Modal.Footer>
            </Modal>
    </div>
  )
}
