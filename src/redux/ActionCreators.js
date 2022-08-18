import * as ActionType  from './ActionType';
import { DISHES } from "../sheared/dishes";

export const addComment = (dishId, rating, comment ,author)=>({

    type : ActionType.ADD_COMMENTS ,
    payload : {
        dishId : dishId ,
        rating : rating,
        comment : comment,
        author : author
    }
});
export const fetchDishes =() =>(dispatch)=>{

    dispatch(dishesLoading(true))

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
};
export const dishesLoading = () =>({
    type : ActionType.DISHES_LOADING
});
export const dishFailed =(errMsg)=>({
    type : ActionType.DISHES_FAILED,
    payload : errMsg
});
export const addDishes = (dishes)=>({
    type : ActionType.ADD_DISHES,
    payload : dishes
});