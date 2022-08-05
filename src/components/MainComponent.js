import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import  Contact  from './ContactComponent'
import DishDetail from './DishdetailsComponent';
import { DISHES } from "../sheared/dishs";
import Header from './HeaderComponent';
import Footer from './FooterComponent';



class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
        dishes : DISHES
    }
}
onDishSelect(dishId){
    this.setState({seletedDish : dishId});
}

  render(){
     
    const HomePage = ()=>{
        return(
            <Home />
        )
    }

    return (
      <>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/menu' component={()=>  <Menu dishes={this.state.dishes} />}   />
        <Route path='/contactus'  component={Contact}  />
      </Switch>
      <Footer />
      </>
    );
  }
}

  


export default Main;
