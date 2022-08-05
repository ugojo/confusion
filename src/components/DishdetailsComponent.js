import React from "react";
import {Card, CardImg ,CardText ,CardTitle, CardImgOverlay, CardBody} from "reactstrap";


   

  function RenderDish({dish}){
    if (dish != null) 
      return(
      <div className="col-12 col-md m-1">
        <Card>
          <CardImg top width="100%" src={dish.image}  alt={dish.name}/>
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
  function RenderComment({comments}){
        if (comments != null) 
          return(
            <div className="col-5 col-md m-1">
                 <h3> Comments</h3>
              <ul className="list-unstyled">
                {comments.map((comment)=> {
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p> {comment.author} </p>
                            <p> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </li>
                    )
                })}
              </ul>
            </div>
            
          )
        else
          return(
              <div></div>
             )
        }
   
   const DishDetail= (props)=>{       
       if (props.dish != null ) 
        return(
         <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComment comments={props.dish.comments} />
            </div>
         </div>
        )
        else
          return(
            <div></div>
          )
        
    }


export default DishDetail; 