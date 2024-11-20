// const BASE_URL = `https://study-notion-ashen-eight.vercel.app`;
// const BASE_URL = "http://localhost:4000/api/v1";
// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: REACT_APP_BASE_URL + "/auth/sendotp",
  SIGNUP_API: REACT_APP_BASE_URL + "/auth/signup",
  LOGIN_API: REACT_APP_BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: REACT_APP_BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: REACT_APP_BASE_URL + "/auth/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: REACT_APP_BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API:
    REACT_APP_BASE_URL + "/profile/getEnrolledCourses",
};

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: REACT_APP_BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: REACT_APP_BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API:
    REACT_APP_BASE_URL + "/payment/sendPaymentSuccessEmail",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: REACT_APP_BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API: REACT_APP_BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: REACT_APP_BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API: REACT_APP_BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: REACT_APP_BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: REACT_APP_BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: REACT_APP_BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: REACT_APP_BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: REACT_APP_BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API:
    REACT_APP_BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: REACT_APP_BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: REACT_APP_BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: REACT_APP_BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    REACT_APP_BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: REACT_APP_BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: REACT_APP_BASE_URL + "/course/createRating",
};

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: REACT_APP_BASE_URL + "/course/getReviews",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: REACT_APP_BASE_URL + "/course/showAllCategories",
};

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: REACT_APP_BASE_URL + "/course/getCategoryPageDetails",
};
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: REACT_APP_BASE_URL + "/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API:
    REACT_APP_BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: REACT_APP_BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: REACT_APP_BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: REACT_APP_BASE_URL + "/profile/deleteProfile",
};
