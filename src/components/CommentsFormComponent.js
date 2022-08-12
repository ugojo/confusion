import React, { Component } from "react";
import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { LocalForm, Control, Errors} from 'react-redux-form'


const required = (val)=> val && val.length;
const minLength = (len)=>(val)=> (!val) || (val.length >= len);
const maxLength = (len)=>(val)=> (!val) || (val.length <= len);


class CommentsForm extends Component{
  constructor(props){
    super(props);

    this.state = {
          isModalOpen : false 
    }
     this.toggleModal = this.toggleModal.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  } 
  toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen 
        })

  }
  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
 
}

  render(){
    return(
        <div className="container">
            <Button outline onClick={this.toggleModal}>Submit Comment </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}></ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                       <Row className="form-group">
                       <Label md={2} htmlFor="rating" >Rating</Label>
                        <Col md={12}>
                           <Control.select model='.rating' id="rating" name="rating" className="form-control">
                             <option> 1 </option>
                             <option> 2 </option>
                             <option> 3 </option>
                             <option> 4 </option>
                             <option> 5 </option>
                           </Control.select>
                        </Col>
                       </Row>
                       <Row className="form-group">
                       <Label md={2} htmlFor="name" > Name</Label>
                         <Col md={12}>
                            <Control.text model=".name" id="name" 
                              name="name" className="form-control"
                              validators={{
                                  required, minLength : minLength(3),
                                            maxLength : maxLength(15)
                              }} />
                            <Errors model=".name"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required : "Name is required",
                                        minLength : "Name is too short",
                                        maxLength : "Name is too long"
                                    }} />
                         </Col>
                       </Row>
                       <Row className="form-group">
                       <Label md={2} htmlFor="commentText">Comment </Label>
                        <Col md={12}>
                          <Control.textarea model=".commentText" id="commmentText" 
                               name="commentText" className="form-control"  rows="12"/>
                        </Col>
                       </Row>
                       <Row className='form-group'>
                                <Col md={{size: 7, offset: 4}}>
                                    <Button type="submit" color="primary">
                                        Submit comment
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div> 
        
    )
  }
}

export default CommentsForm;