const BASE_URL = 'http://localhost:3000'

export function eventsFetchSuccess(payload){
    return{
        type:"events/get",
        payload
    }
}

export const login = (body) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/loginAdmin`,{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json',
                }
            })
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
            
            localStorage.setItem("access_token", data.access_token)

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}

export const register = (body) =>{
    return async (dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/registerAdmin`,{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json'
                }
            }) 

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


export const fetchEvents = () =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/events`,{
                headers:{
                    'Content-Type':'application/json',
                    //access_token:localStorage.access_token
                }
            })
            if(!response.ok) throw new Error("Something wrong!")
            const data = await response.json()
       
            
            const action = eventsFetchSuccess(data)
            dispatch(action)
       
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
}

export const createEvents = (body) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/events`,{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json',
                    //access_token:localStorage.access_token
                }
            }) 

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            dispatch(fetchevents())
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const editEvents = (id , body) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/events/${id}`,{
                method:"PUT",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json',
                    //access_token:localStorage.access_token
                }
            }) 

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            dispatch(fetchevents())
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const deleteEvents = (id) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/events/${id}`,{
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json',
                    //access_token:localStorage.access_token

                }
            }) 
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            dispatch(fetchevents())
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}