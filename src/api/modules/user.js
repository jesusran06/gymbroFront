import { apiHttp } from '../AxiosApi';

const getAllUsers = async(token) =>{

    try {
        let response = await apiHttp('GET', '/usersAll', null, token)
        return response
    } catch (error) {
        let e = error
        throw e;
    }
}

export {
    getAllUsers
}