import { apiHttp } from '../AxiosApi';

const createConfig = async(data, token) =>{
    try {
        let response = await apiHttp('POST', '/config/createConfig', data, token)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
const updateConfig = async(data, token) =>{
    let response = await apiHttp('PUT', '/config/updateConfig', data, token)
    console.log(response)
}

export {
    createConfig,
    updateConfig
}