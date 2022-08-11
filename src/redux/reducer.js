
import { DISHES } from "../sheared/dishes";
import {COMMENTS} from '../sheared/comments';
import {LEADERS} from '../sheared/leaders';
import {PROMOTIONS} from '../sheared/promotions';


export const initialState = {
     dishes : DISHES,
     comments : COMMENTS,
     leaders : LEADERS,
     promotions : PROMOTIONS
};

export const Reducer = (state = initialState ,action) =>{
    
    return state;
};