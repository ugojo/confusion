import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './DishdetailsComponent';
import { DISHES } from "../sheared/dishs";
import {COMMENTS} from '../sheared/comments';
import {LEADERS} from '../sheared/leaders';
import {PROMOTIONS} from '../sheared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import  Contact  from './ContactComponent';
import About from './AboutComponet';



class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
        dishes : DISHES,
        comments : COMMENTS,
        leaders : LEADERS ,
        promotions : PROMOTIONS 
    }
}
onDishSelect(dishId){
    this.setState({seletedDish : dishId});
}

  render(){
     
    const HomePage = ()=>{
        return(
            <Home  dishes={this.state.dishes.filter((dish)=> dish.featured)[0]} 
             leaders={this.state.leaders.filter((leader)=> leader.featured)[0]} 
             promotions={this.state.promotions.filter((promo)=> promo.featured)[0]}
             />
        )
    };
    const DishWithId = ({match})=>{
        return(
            <DishDetail  dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}  
               comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}    />
        );
    }

    return (
      <>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={()=>  <Menu dishes={this.state.dishes} />}   />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route path='/contactus'  component={Contact}  />
        <Route path='/aboutus' component={()=> <About leaders={this.state.leaders} />} />
      </Switch>
      <Footer />
      </>
    );
  }
}

  


export default Main;
