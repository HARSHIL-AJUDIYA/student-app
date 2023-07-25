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
export const getStudentList =(data)=>{
    return{
        type:GET_STUDENT_LIST,
        payload:data
    }
}
export const deleteStudent =()=>{
    return{
        type:DELETE_STUDENT
    }
}
export const addStudent =()=>{
    return{
        type:ADD_STUDENT
    }
}
export const updateStudent =()=>{
    return{
        type:UPDATE_STUDENT
    }
}
export const getStudentObj =(data)=>{
    return{
        type:GET_STUDENT_OBJ,
        payload:data
    }
}


export const FetchStudentList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        setTimeout(()=>{
            axios.get('http://localhost:4000/list').then(res=>{
            const studentlist=res.data;
            dispatch(getStudentList(studentlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        },200)
        
    }
}

export const Removestudent=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.delete('http://localhost:4000/list/'+code).then(res=>{
            dispatch(deleteStudent());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FunctionAddStudent=(data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.post('http://localhost:4000/list/',data).then(res=>{
            dispatch(addStudent());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FunctionUpdateStudent=(data,code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.put('http://localhost:4000/list/'+code,data).then(res=>{
            dispatch(updateStudent());
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}
export const FetchStudentObj=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:4000/list/'+code).then(res=>{
            const studentlist=res.data;
            dispatch(getStudentObj(studentlist));
        }).catch(err=>{
            dispatch(failRequest(err.msg))
        })
        // },2000)
        
    }
}