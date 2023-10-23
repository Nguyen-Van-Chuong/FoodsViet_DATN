import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  customer_detail: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    customersRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    customersSuccess: (state, action) => {
      return {
        ...state,
        customers: action.payload,
        loading: false,
        error: null,
      };
    },
    updateCustomerRequest: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    updateCustomerSuccess: (state, action) => {
      return {
        ...state,
        error: null,
      };
    },
    requestFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    customerDetailRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    customerDetailSuccess: (state, action) => {
      return {
        ...state,
        customer_detail: action.payload,
        loading: false,
        error: null,
      };
    },
    setLoadingCustomer: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    // admin
    creatUserRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    createUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
    deleteUserRequest: (state, action) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    deleteUserSuccess: (state, action) => {
      const updateUser = state.customers.filter(
        (user) => user._id !== action.payload.id
      );
      return {
        ...state,
        customers: updateUser,
        loading: false,
        error: null,
      };
    },
    updateUserRequest: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    updateUserSuccess: (state, action) => {
      return {
        ...state,
        error: null,
      };
    },
  },
});

export const {
  customersRequest,
  customersSuccess,
  updateCustomerRequest,
  updateCustomerSuccess,
  requestFailure,
  customerDetailRequest,
  customerDetailSuccess,
  creatUserRequest,
  createUserSuccess,
  deleteUserRequest,
  deleteUserSuccess,
  updateUserRequest,
  updateUserSuccess,
  setLoadingCustomer,
} = authSlice.actions;
export default authSlice.reducer;
