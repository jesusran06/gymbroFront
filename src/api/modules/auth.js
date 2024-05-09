import { apiHttp } from '../AxiosApi';

const login = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);
  try {
    let response = await apiHttp('POST', '/token', formData, null)
      return response
  } catch (error) {
    let e = error
    throw e;
  }
};

export {
  login,
};