import React from 'react';
import { Card, CardBody,CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../sheared/baseUrl';

function RederItem({item, isLoading, errMsg}) {
  if (isLoading) {
    return(
      <div className="container">
        <div className="row">
           <Loading />
        </div>
      </div>
    )
  }
  if (errMsg) {
    return(
      <div className="container">
        <div className="row">
           <h4> {errMsg} </h4>
        </div>
      </div>
    )
    
  }
  else
   return(
     <Card>
      <CardImg src={baseUrl + item.image}  alt={item.name} />
       <CardBody>
          <CardTitle> {item.name} </CardTitle>
          { item.designation ? <CardSubtitle> {item. designation} </CardSubtitle> : null }
          <CardText> {item.description} </CardText>    
       </CardBody>
     </Card>
     
   )
}

function Home(props) {
    return(
      <div className="container">
        <div className='row'>
           <div className='col-12 col-md m-1'>
            <RederItem item={props.dishes} 
                    isLoading={props.dishesLoading}
                    errMsg={props.dishesErr} />
           </div>
           <div className='col-12 col-md  m-1'>
            <RederItem item={props.promotions}
                        isLoading={props.promosLoading}
                        errMsg={props.promosErr} />
           </div>
           <div className='col-12 col-md m-1'>
            <RederItem item={props.leaders} 
                       isLoading={props.leadersLoading}
                       errMsg={props.leadersErr}/>
           </div>
        </div>
      </div>
    );
} 

export default Home; 