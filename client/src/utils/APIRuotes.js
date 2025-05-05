// host
export const LOCAL = "http://localhost:5000";
export const LIVE_SERVER = "https://wundt.onrender.com";

// admin
export const URL_ADMIN = `${LOCAL}/api/admin`;
export const URL_LOGIN = `${URL_ADMIN}/login`;
export const URL_GET_CURRENT_ADMIN = `${URL_ADMIN}/current-admin`;
export const URL_GET_ADMIN = `${URL_ADMIN}/get-admin`;

// appointment
export const URL_APPTS = `${LOCAL}/api/appointment`;
export const URL_APPROVE_APPT = `${URL_APPTS}/updated-status`;
