import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType";
import axios from "axios";

export const makeRequest =()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest =(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList =(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser =()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser =()=>{
    return{
        type:ADD_USER
    }
}
export const updateUser =()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj =(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}


export const FetchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:4000/user').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}

export const Removeuser=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.delete('http://localhost:4000/user/'+code).then(res=>{
            dispatch(deleteUser());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.post('http://localhost:4000/user/',data).then(res=>{
            dispatch(addUser());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.put('http://localhost:4000/user/'+code,data).then(res=>{
            dispatch(updateUser());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:4000/user/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}