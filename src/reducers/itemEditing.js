import * as Types from './../constants/ActionTypes'
let initialState ={};
const itemEditing =(state =initialState , aciton)=>{
    switch(aciton.type){
        case Types.EDIT_PRODUCT:
            return aciton.product
        default:
            return state;
    }
}
export default itemEditing;