import React from "react";
import {Card, CardImg ,CardText ,CardTitle, CardImgOverlay, CardBody} from "reactstrap";
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../sheared/baseUrl';



         
  function RenderMeunIteam({dish}) {
   
       return(
        <Card >
          <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          </Link>
        </Card>
       )
  }     

  function Menu(props) {

      const menu = props.dishes.dishes.map((dish)=>{
          return(
           <div className="col-12 col-md-5 " key={dish.id} >
             <RenderMeunIteam  dish={dish} />    
           </div>
        )
            
        }) ;
        if (props.dishes.isLoading) {
          return(
            <div className="container">
              <div className="row">
                 <Loading />
              </div>
            </div>
          )
        }
        if (props.dishes.errMsg) {
          return(
            <div className="container">
              <div className="row">
                 <h4> {props.dishes.errMsg} </h4>
              </div>
            </div>
          )
          
        }
        else
          return(
            <div className="container">
              <div className="row">
                 {menu}
              </div>
            </div>
        )
    
  }
   

  


export default Menu;