const axios = require("axios")

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  mortgage: "",
  rent: "",
  houses: [],
  isLoading: "",
  err: ""
}

//Constants
const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
const UPDATE_RENT = "UPDATE_RENT"
const GET_HOUSES = "GET_HOUSES"
const ADD_HOUSE = "ADD_HOUSE"
const DELETE_HOUSE = "DELETE_HOUSE"
//actioncreators
export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name
})
export const updateAddress = address => ({
  type: UPDATE_ADDRESS,
  payload: address
})
export const updateCity = city => ({
  type: UPDATE_CITY,
  payload: city
})
export const updateState = state => ({
  type: UPDATE_STATE,
  payload: state
})
export const updateZip = zipcode => ({
  type: UPDATE_ZIP,
  payload: zipcode
})
export const updateMortgage = mortgage => ({
  type: UPDATE_MORTGAGE,
  payload: mortgage
})
export const updateRent = rent => ({
  type: UPDATE_RENT,
  payload: rent
})
export const getHouses = () => {
  return {
    type: GET_HOUSES,
    payload: axios.get("/api/houses")
    // .then(res => {
    //   console.log(res.data)
    //   return res.data
    // })
  }
}
export const deleteHouse = id => {
  return {
    type: DELETE_HOUSE,
    payload: axios.delete(`/api/houses/${id}`)
    // .then(res => {
    //   return res.data
    // })
  }
}
export const addHouse = house => {
  return {
    type: ADD_HOUSE,
    payload: axios.post("/api/houses", house)
    // .then(result => {
    // return result.data
    // })
  }
}
//reducer
const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_ADDRESS: {
      return {
        ...state,
        address: action.payload
      }
    }
    case UPDATE_CITY: {
      return {
        ...state,
        city: action.payload
      }
    }
    case UPDATE_STATE: {
      return {
        ...state,
        state: action.payload
      }
    }
    case UPDATE_ZIP: {
      return {
        ...state,
        zipcode: action.payload
      }
    }
    case `${GET_HOUSES}_PENDING`:
      return {
        ...state,
        isLoading: true
      }

    case `${GET_HOUSES}_FULFILLED`:
      console.log(action.payload.data)
      return Object.assign({}, state, { houses: action.payload.data })

    case `${GET_HOUSES}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        err: true
      }
    case ADD_HOUSE: {
      return {
        ...state,
        houses: action.payload
      }
    }
    case DELETE_HOUSE: {
      return {
        ...state,
        house: action.payload
      }
    }
    case UPDATE_MORTGAGE: {
      return {
        ...state,
        mortgage: action.payload
      }
    }
    case UPDATE_RENT: {
      return {
        ...state,
        rent: action.payload
      }
    }
    default:
      return state
  }
}
export default reducer
