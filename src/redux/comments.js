import * as ActionType  from './ActionType';

export  function Comments(state ={
                            errMsg : null,
                            comments : []
                          }, action) {
  
    switch (action.type) {
       case ActionType.ADD_COMMENTS:
          return{...state, errMsg: null ,comments : action.payload} 
        case ActionType.COMMENTS_FAILED:
            return{...state, errMsg: action.payload ,comments : []}   
       case ActionType.ADD_COMMENT: 
            var comment = action.payload;
                return {...state, comments : state.comments.concat(comment)}
       default:
        return state;     
    }
}