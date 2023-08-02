export enum Service {
    BASE_URL = 'http://localhost:8000/api/',
    CREATE_CONTACT = BASE_URL + 'store/',
    UPDATE_CONTACT = BASE_URL + 'contato/',
    GET_CONTACTS = BASE_URL + 'contatos',
    GET_CONTACT = BASE_URL + 'contato/',
    DELETE_CONTACT = BASE_URL + 'contato/',
    AUTH_LOGIN = BASE_URL + 'login',
    AUTH_REGISTER = BASE_URL + 'register',
    AUTH_LOGOUT = BASE_URL + 'logout',
    AUTH_REFRESH = BASE_URL + 'refresh',

}
