import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem ,Media} from 'reactstrap';


function RenderLeader({leader}) {
    return(
        <div className='col-12 mt-5'>
          <Media>
            <Media left middle-top>
                <Media  object src={leader.image} alt={leader.name}  />
            </Media>
            <Media body className='ml-5'>
            <Media heading> {leader.name} 
               <p className='font-weight-lighter'  size='50px' > {leader.description} </p>
            </Media>
          </Media>
          </Media>
        </div>
       
    )
}
function RenderAbout() {
    return(
        <div className="container">
            <div className="row row-content">
                <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link> </BreadcrumbItem>
                  <BreadcrumbItem active> About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h4> About Us </h4>
                    <hr />
                </div>
                <div className="col-12 col-md-5">
                <h3>Our History</h3>
                      
                    <p className='text-justify'>
                     started in 2010, Ristorante con fusion quikly established itn self as a culinaey bicon par exchabnge in Hong 
                     Kong, with its unique brand of word fusion cuisine that can be found nowhere else, 
                     it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the bestvthree-star 
                     Michelin chefs in world, you never know what will arrive on your plate the next time you visit us .
                   </p>
                   <p className='text-justify'>
                     The restaurant trace its humble beginning to the Frying pan, a successful chain started by the CEO, Mr. Peter 
                     pan, that Featured for the first time world best cuisines in a pan. 
                    </p>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <table className='table'>
                       <thead >
                         <tr className='table-primary'>
                            <th > Fact At a Glance</th>
                            <th></th>
                            <th></th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                            <td>
                                started 
                            </td>
                            <td>
                                3 feb.2013 
                            </td>
                         </tr>
                         <tr>
                            <td>
                                Major stake  Holder
                            </td>
                            <td>
                                Hk Fine Foods Inc.
                            </td>
                         </tr>
                         <tr>
                            <td>
                               Last Year's Turnover
                            </td>
                            <td>
                                $1,250,375
                            </td>
                         </tr>
                         <tr>
                            <td>
                              Employees  
                            </td>
                            <td>
                                40
                            </td>
                         </tr>
                       </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <p>
                        You better cut the pizza in four pieces because I'm not hungry  enough to eat six.
                        <blockquote>
                            <figcaption className='blockquote-footer'>
                               Yogi Berra,The Wit and Wisdom of Yogi Berra,P .pepe,Diversion Book,2004.
                            </figcaption>
                        </blockquote>
                    </p>
                </div>
            </div>
        </div>
    );
}

function About(props) {
    const showleaders = props.leaders.map((leader)=>{
        return(   
            <div className="col-12 " key={leader.id} >
                <RenderLeader  leader={leader} />    
           </div>
        )
    })
   return(
    <div className='container'>
        <div className='row'>
                    <RenderAbout />
                    <h4> Corprate Leadership </h4> 
                    <div className='col-12'>
                    {showleaders}
                    </div>
            </div>
    </div>
        
   )
    
}


export default About;