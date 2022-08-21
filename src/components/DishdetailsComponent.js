import React, {Component}from "react";
import {Card, CardImg ,CardText ,CardTitle, CardBody, Breadcrumb , 
  BreadcrumbItem,Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form'
import {Loading}  from './LoadingComponent';
import {baseUrl} from '../sheared/baseUrl';


   
const required = (val)=> val && val.length;
const minLength = (len)=>(val)=> (!val) || (val.length >= len);
const maxLength = (len)=>(val)=> (!val) || (val.length <= len);

  function RenderDish({dish}){
    if (dish != null) 
      return(
      <div className="col-12 col-md m-1">
        <Card>
          <CardImg top width="100%" src={baseUrl + dish.image}  alt={dish.name}/>
           <CardBody>
             <CardTitle> {dish.name} </CardTitle>  
             <CardText> {dish.description} </CardText>
           </CardBody>
        </Card>
       </div>
      )
    else
      return(
          <div></div>
         )
    }
  function RenderComment({comments, postComment, dishId}){
        if (comments != null) 
          return(
            <div className="col-12 col-md m-1">
                 <h3> Comments</h3>
              <ul className="list-unstyled">
                {comments.map((comment)=> {
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p> ---- {comment.author} <pre>
                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                             </pre></p>
                        </li>
                    )
                })}
              </ul>
                <CommentsForm postComment={postComment} dishId={dishId} />
            </div>
            
          )
        else
          return(
              <div></div>
             )
        }


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
   this.toggleModal();
   this.props.postComment(this.props.dishId , values.rating, values.comment, values.author );
 
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
                            <Control.text model=".author" id="author" 
                              name="author" className="form-control"
                              validators={{
                                  required, minLength : minLength(3),
                                            maxLength : maxLength(15)
                              }} />
                            <Errors model=".author"
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
                          <Control.textarea model=".comment" id="comment" 
                               name="comment" className="form-control"  rows="12"/>
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

   
   const DishDetail= (props)=>{
    if (props.isLoading) {
      return(
        <div className="container">
          <div className="row">
             <Loading />
          </div>
        </div>
      )
    }
    if (props.errMsg) {
      return(
        <div className="container">
          <div className="row">
             <h4> {props.errMsg} </h4>
          </div>
        </div>
      )
      
    }else
       if (props.dish != null ) 
        return(
         <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem> <Link to='/menu'> Menu</Link> </BreadcrumbItem>
                <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                 <hr />
              </div>
                <div className="col-12 col-md-5 m-1">
                   <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                  <RenderComment comments={props.comments} 
                                 postComment={props.postComment}
                                 dishId={props.dish.id}  />
                </div>
            </div>

         </div>
        )
        else
          return(
            <div></div>
          )
        
    }


export default DishDetail; 