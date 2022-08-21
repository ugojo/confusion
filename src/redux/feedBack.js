import * as ActionType  from './ActionType';

export  function feedback(state={
                    errMsg : null,
                    feedback : []
                } ,action) {
    switch (action.type) {
        case ActionType.ADD_FEEDBACK:
             var feedback = action.payload ;
             return {...state, errMsg: null ,feedback: state.feedback.concat(feedback)}
          
        default:
            return state;
    }
}
