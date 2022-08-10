import React from 'react';
import { Card, CardBody,CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';

function RederItem({item}) {
   return(
     <Card>
      <CardImg src={item.image}  alt={item.name} />
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
            <RederItem item={props.dishes} />
           </div>
           <div className='col-12 col-md m-1'>
            <RederItem item={props.promotions} />
           </div>
           <div className='col-12 col-md  m-1'>
            <RederItem item={props.leaders} />
           </div>
        </div>
      </div>
    );
} 

export default Home; 