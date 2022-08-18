import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import DishDetail from './DishdetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import  Contact  from './ContactComponent';
import About from './AboutComponet';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';






const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    leaders : state.leaders,
    comments : state.comments,
    promotions : state.promotions
  }
}

const mapDispatchtoProps = (dispatch) =>({
  
   addComment : (dishId, rating, author, comment)=>{dispatch(addComment(dishId, rating, author, comment))},
   fetchDishes : ()=> {dispatch(fetchDishes())}
})

class Main extends Component{

constructor(props){
  super(props);

}
componentDidMount(){
  this.props.fetchDishes();
}

  render(){
     
    const HomePage = ()=>{
        return(
            <Home  dishes={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]} 
              isLoading={this.props.dishes.isLoading}
              errMsg={this.props.dishes.errMsg}
              leaders={this.props.leaders.filter((leader)=> leader.featured)[0]} 
              promotions={this.props.promotions.filter((promo)=> promo.featured)[0]}
             />
        )
    };
    const DishWithId = ({match})=>{
        return(
            <DishDetail  dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}  
               isLoading={this.props.dishes.isLoading}
               errMsg={this.props.dishes.errMsg}
               comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}  
               addComment={this.props.addComment}  />
        );
    }

    return (
      <>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={()=>  <Menu dishes={this.props.dishes} />}   />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route path='/contactus'  component={Contact}  />
        <Route path='/aboutus' component={()=> <About leaders={this.props.leaders} />} />
        <Redirect to='/home' />
      </Switch>
      <Footer />
      </>
    );
  }
}

  


export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
