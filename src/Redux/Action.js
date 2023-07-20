import { FAIL_REQUEST, GET_STUDENT_LIST, MAKE_REQUEST, DELETE_STUDENT, ADD_STUDENT, UPDATE_STUDENT, GET_STUDENT_OBJ } from "./ActionType";
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
        type:GET_STUDENT_LIST,
        payload:data
    }
}
export const deleteUser =()=>{
    return{
        type:DELETE_STUDENT
    }
}
export const addUser =()=>{
    return{
        type:ADD_STUDENT
    }
}
export const updateUser =()=>{
    return{
        type:UPDATE_STUDENT
    }
}
export const getUserObj =(data)=>{
    return{
        type:GET_STUDENT_OBJ,
        payload:data
    }
}


export const FetchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:4000/list').then(res=>{
            const studentlist=res.data;
            dispatch(getUserList(studentlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}

export const Removestudent=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.delete('http://localhost:4000/list/'+code).then(res=>{
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
            axios.post('http://localhost:4000/list/',data).then(res=>{
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
            axios.put('http://localhost:4000/list/'+code,data).then(res=>{
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
            axios.get('http://localhost:4000/list/'+code).then(res=>{
            const studentlist=res.data;
            dispatch(getUserObj(studentlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}