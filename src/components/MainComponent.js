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
import { postComment, fetchDishes, fetchLeaders, fetchPromotions, fetchComments, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';






const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    leaders : state.leaders,
    comments : state.comments,
    promotions : state.promotions
  }
}

const mapDispatchtoProps = (dispatch) =>({
  
   postComment : (dishId, rating, author, comment)=>{dispatch(postComment(dishId, rating, author, comment))},
   postFeedback : (firstname, lastname ,telnum, email ,agree ,contactType, message)=>{ dispatch(postFeedback(firstname, lastname ,telnum, email ,agree ,contactType, message))},
   fetchDishes : ()=> {dispatch(fetchDishes())},
   fetchLeaders : ()=> { dispatch(fetchLeaders())},
   fetchPromotions : ()=>{dispatch(fetchPromotions())},
   fetchComments : ()=>{ dispatch(fetchComments())},
   resetfeedBackForm : ()=>{ dispatch(actions.reset('feedback'))}
})

class Main extends Component{

constructor(props){
  super(props);

}
componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchLeaders();
  this.props.fetchPromotions();
  this.props.fetchComments();
}

  render(){
     
    const HomePage = ()=>{
        return(
            <Home  dishes={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]} 
              dishesLoading={this.props.dishes.isLoading}
              dishesErr={this.props.dishes.errMsg}
              promotions={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErr={this.props.promotions.errMsg}
              leaders={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErr={this.props.leaders.errMsg}
             />
        )
    };
    const DishWithId = ({match})=>{
        return(
            <DishDetail  dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}  
               isLoading={this.props.dishes.isLoading}
               errMsg={this.props.dishes.errMsg}
               comments={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}  
               postComment={this.props.postComment}  />
        );
    }

    return (
      <>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={()=>  <Menu dishes={this.props.dishes} />}   />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route path='/contactus'  component={ ()=> < Contact resetfeedBackForm={this.props.resetfeedBackForm }
                                                             postFeedback={this.props.postFeedback}/> }  />
        <Route path='/aboutus' component={()=> <About leaders={this.props.leaders.leaders} 
                                                      leadersLoading={this.props.leaders.isLoading}
                                                      leadersErr={this.props.leaders.errMsg}/>} />
        <Redirect to='/home' />
      </Switch>
      <Footer />
      </>
    );
  }
}

  


export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
