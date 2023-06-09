const REQUEST_URL = import.meta.env.VITE_REQUEST_URL;

export const AUTH_URLS = {
  LOGIN_URL: `${REQUEST_URL}auth/login`,
  REGISTER_URL: `${REQUEST_URL}auth/signup`,
  FORGOT_PASSWORD_URL: `${REQUEST_URL}auth/forgotPassword`,
};

export const USER_URLS = {
  GET_DETAILS: `${REQUEST_URL}user/getUserDetails`,
};

export const QUIZ_URLS = {
  GET_LANGUAGES: `${REQUEST_URL}test/getTests`,
  GET_QUIZ: `${REQUEST_URL}questions/getQuestionsByTest`,
  GET_QUIZ_LIST: `${REQUEST_URL}test/getTests`,
  SUBMIT_QUIZ: `${REQUEST_URL}test/submitTest`,
  GET_SCORE: `${REQUEST_URL}score/getScores`,
};
