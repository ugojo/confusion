import * as ActionType  from './ActionType';
import {baseUrl} from '../sheared/baseUrl';

export const addComment = (comment)=>({

    type : ActionType.ADD_COMMENT ,
    payload : comment
});
export const postComment =(dishId, rating, comment ,author)=>(dispatch)=>{
    var newComment = {
          dishId : dishId ,
          rating : rating,
          comment : comment,
          author : author
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
                'Content-Type' : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(response=>{
         if(response.ok){
            return response ;
         }
         else{
            var error = new Error('Error' + response.status + ':' + response.statusText )
                error.response = response;
                throw error;
         }
    },error => {
          var errMsg = new Error(error.message);
              throw errMsg;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => (console.log('PostComment' , error.message ),
                             alert('Your comment could not be posted \n :' + error.message)));
            
}
export const fetchDishes =() =>(dispatch)=>{

    dispatch(dishesLoading(true))

    return fetch(baseUrl + 'dishes')
           .then(response =>{
               if (response.ok) {
                  return response ;
               }else{
                 var error = new Error('Error' + response.status + ':' + response.statusText );
                     error.response = response;
                     throw error ;
               }
           },error =>{
            var errMsg = new Error(error.message)
            throw errMsg;
           })
           .then(response => response.json())
           .then(dishes => dispatch(addDishes(dishes)) )
           .catch(error => dispatch(dishFailed(error.message)));;
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

export const fetchLeaders =() =>(dispatch)=>{

    dispatch(leadersLoading(true))

    return fetch(baseUrl + 'leaders')
           .then(response =>{
               if (response.ok) {
                  return response ;
               }else{
                 var error = new Error('Error' + response.status + ':' + response.statusText );
                     error.response = response;
                     throw error ;
               }
           },error =>{
                var errMsg = new Error(error.message)
                throw errMsg;
           })
           .then(response => response.json())
           .then(leaders => dispatch(addleaders(leaders)) )
           .catch(error => dispatch(leadersFailed(error.message)));
};
export const leadersLoading = () =>({
    type : ActionType.LEADERS_LOADING
});
export const leadersFailed =(errMsg)=>({
    type : ActionType.LEADERS_FAILED,
    payload : errMsg
});
export const addleaders = (leaders)=>({
    type : ActionType.ADD_LEADERS,
    payload : leaders
});

export const fetchPromotions =() =>(dispatch)=>{

    dispatch(promotionsLoading(true))

    return fetch(baseUrl + 'promotions')
           .then(response =>{
               if (response.ok) {
                  return response ;
               }else{
                 var error = new Error('Error' + response.status + ':' + response.statusText );
                     error.response = response;
                     throw error ;
               }
           },error =>{
            var errMsg = new Error(error.message)
            throw errMsg;
           })
           .then(response => response.json())
           .then(promotions => dispatch(addPromotions(promotions)) )
           .catch(error => dispatch(promotionsFailed(error.message)));
};
export const promotionsLoading = () =>({
    type : ActionType.PROMOTIONS_LOADING
});
export const promotionsFailed =(errMsg)=>({
    type : ActionType.PROMOTIONS_FAILED,
    payload : errMsg
});
export const addPromotions = (promotions)=>({
    type : ActionType.ADD_PROMOTIONS,
    payload : promotions
});

export const fetchComments = ()=> (dispatch)=>{
     
    return fetch(baseUrl + 'comments')
           .then(response=>{
                if (response.ok) {
                    return response;
                }
                else{
                    var error = new Error('Error' + response.status + ':' + response.statusText );
                        error.response = response;
                        throw error ;
                  }
              },error =>{
               var errMsg = new Error(error.message)
               throw errMsg;
            })
            .then(response=> response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
            
};
export const addComments= (comments)=>({
       type : ActionType.ADD_COMMENTS,
       payload :comments
})
export const commentsFailed = (errMsg) =>({
        type : ActionType.COMMENTS_FAILED,
        payload : errMsg
});


export const addFeedback = (feedback)=>({
         type : ActionType.ADD_FEEDBACK,
         payload : feedback  
});
export const postFeedback =(firstname, lastname ,telnum, email ,agree ,contactType, message)=>(dispatch)=>{

    var  newFeedback ={
        firstname : firstname,
        lastname : lastname,
        telnum : telnum,
        email : email,
        agree : agree,
        contactType : contactType,
        message : message 
    }

    return fetch(baseUrl + 'feedback',{
           method : 'POST',
           body : JSON.stringify(newFeedback),
           headers : {
                  'content-Type' : 'application/json'
           },
           credentials : 'same-origin'
    })
    .then(response => {
         if (response.ok) {
            
            return response;
         }else{
            var error = new Error('Error' + response.status  + ':' + response.statusText )
                error.response = response;
                throw error;
         }
    },error =>{ var errMsg = new Error(error.message)
                throw errMsg
    })
    .then(response=> response.json())
    .then(response=> dispatch(addFeedback(response)))
    .catch(error => (console.log('could not send Feedback' , error.message),
            alert('could not send feedback' + error.message)));

}