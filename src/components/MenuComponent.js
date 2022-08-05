import React from "react";
import {Card, CardImg ,CardText ,CardTitle, CardImgOverlay, CardBody} from "reactstrap";

import DishDetails from './DishdetailsComponent';


         
  function RenderMeunIteam({dish, onClick}) {
       return(
        <Card  
              onClick ={()=> onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
       )
  }     

  function Menu(props) {

      const menu = props.dishes.map((dish)=>{
          return(
           <div className="col-12 col-md-5 " key={dish.id} >
             <RenderMeunIteam  dish={dish} onClick={props.onClick} />    
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