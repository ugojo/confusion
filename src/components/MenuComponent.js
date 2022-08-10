import React from "react";
import {Card, CardImg ,CardText ,CardTitle, CardImgOverlay, CardBody} from "reactstrap";
import { Link } from 'react-router-dom';



         
  function RenderMeunIteam({dish}) {
       return(
        <Card >
          <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          </Link>
        </Card>
       )
  }     

  function Menu(props) {

      const menu = props.dishes.map((dish)=>{
          return(
           <div className="col-12 col-md-5 " key={dish.id} >
             <RenderMeunIteam  dish={dish} />    
           </div>
        )
            
        }) ;
        return(
          <div className="container">
            <div className="row">
               {menu}
            </div>
          </div>
        )
    
  }
   

  


export default Menu;