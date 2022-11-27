import  axios from  "axios";

//get post details
export const getPost = async (id) => {
    try{
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/website/post/${id}`,
        )

        return {
            data: res?.data,
            status: res?.status
        }
    } catch(error){
        return {
            error: true,
            status: error?.response?.status
        }
    }
}

//get place details
export const getPlace = async (id) => {
    try{
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/website/place/${id}`,
        )

        return {
            data: res?.data,
            status: res?.status
        }
    } catch(error){
        return {
            error: true,
            status: error?.response?.status
        }
    }
}


//get place details
export const getUser = async (id) => {
    try{
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/website/${id}`,
        )

        return {
            data: res?.data,
            status: res?.status
        }
    } catch(error){
        return {
            error: true,
            status: error?.response?.status
        }
    }
}