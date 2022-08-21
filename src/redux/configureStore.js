
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Dishes} from './dishes';
import {Leaders} from './leaders';
import {Comments} from './comments';
import {Promotions} from './promotions';
import { initialFeedBack } from "./form";

export const  ConfigureStore = ()=>{
     
    const store =  createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            leaders : Leaders,
            promotions : Promotions ,
            ...createForms({
                    feedback : initialFeedBack
            })
        }),
        applyMiddleware(thunk ,logger)
    );

    return store ;
};