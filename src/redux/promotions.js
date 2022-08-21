import * as ActionType  from './ActionType';

export  function Promotions(state ={
                        isLoading : true,
                        errMsg : null,
                        promotions : []  }
                             , action) {
  
     switch (action.type) {
        case ActionType.ADD_PROMOTIONS:
          return {...state, isLoading: false , errMsg: null ,promotions: action.payload} 
        case ActionType.PROMOTIONS_LOADING:
          return {...state, isLoading: true , errMsg: null ,promotions: []} 
        case ActionType.PROMOTIONS_FAILED:
          return {...state, isLoading: false , errMsg: action.payload ,promotions: []} 
        default:
          return state;     
     }
}