import * as ActionType from '../redux/ActionType';

export  function Leaders(state = {
                         isLoading : true,
                         errMsg : null,
                         leaders : []
                      } , action) {
  
    switch (action.type) {
        case ActionType.ADD_LEADERS :
             return  {...state, isLoading : false , errMsg: null , leaders : action.payload}

        case ActionType.LEADERS_LOADING:
            return  {...state, isLoading : true , errMsg: null , leaders : []}

        case ActionType.LEADERS_FAILED:
            return  {...state, isLoading : false , errMsg: action.payload , leaders : []}
        
       default:
        return state;     
    }
}