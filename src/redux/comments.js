import * as ActionType  from './ActionType';
import {COMMENTS} from '../sheared/comments';

export  function Comments(state = COMMENTS, action) {
  
    switch (action.type) {
       case ActionType.ADD_COMMENTS: 
            var comment = action.payload;
                comment.id = state.length;
                comment.date = new Date().toISOString() ;
                console.log("Comment: ", comment);
                return state.concat(comment);
       default:
        return state;     
    }
}