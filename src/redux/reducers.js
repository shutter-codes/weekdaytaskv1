import { APPLY_FILTERS } from "./actionTypes";

const initialState = {
  role: [],
  numberOfEmployees: [],
  experience: [],
  mode: [],
  minimumSalary: [],
  companyName: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTERS:
      return {
        ...state,
        [action.payload?.filterName]: action.payload?.value,
      };
    default:
      return state;
  }
};

export default filtersReducer;