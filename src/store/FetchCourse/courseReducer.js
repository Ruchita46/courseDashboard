import { FETCH_COURSE_FAILURE, FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS } from "./courseAction";

const initialState = {
  loading: false,
  course: [],
  error: '',
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_REQUEST:
      return { ...state, loading: true };
    case FETCH_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.payload };
    case FETCH_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
