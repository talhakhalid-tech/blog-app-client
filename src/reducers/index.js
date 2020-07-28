import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

const func = (state = {}, action) => {
    if (action.type === "FETCH_USER") {
        return { ...state, user: action.payload }
    } else if (action.type === "FETCH_ALL") {
        return { ...state, allUsers: action.payload }
    }
    return state
}

const func2 = (state = {}, action) => {
    if (action.type === "CREATE_BLOG") {
        return { ...state, blogs: [...state.blogs, action.payload] }
    } else if (action.type === "FETCH_BLOGS") {
        return { ...state, blogs: action.payload }
    } else if (action.type === "FETCH_BLOG") {
        return { ...state, blog: action.payload }
    } else if (action.type === "RESET_BLOG") {
        return { ...state, blog: action.payload }
    } else if (action.type === "FETCH_USER_BLOG") {
        return { ...state, userBlogs: action.payload }
    } else if (action.type === "RESET_USER_BLOGS") {
        return { ...state, userBlogs: action.payload }
    }
    return state
}

export default combineReducers({
    users: func,
    blogs: func2,
    form: formReducer
})