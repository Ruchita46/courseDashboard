export const FETCH_COURSE_REQUEST = "FETCH_COURSE_REQUEST";
export const FETCH_COURSE_SUCCESS = "FETCH_COURSE_SUCCESS";
export const FETCH_COURSE_FAILURE = "FETCH_COURSE_FAILURE";

export const fetchCourseRequest = () => ({ type: FETCH_COURSE_REQUEST });
export const fetchCourseSuccess = (user) => ({
  type: FETCH_COURSE_SUCCESS,
  payload: user,
});
export const fetchCourseFailure = (error) => ({
  type: FETCH_COURSE_FAILURE,
  payload: error,
});

