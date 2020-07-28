import history from '../history'
import users from '../APIs/users'
import blogs from '../APIs/blogs'

export const registerUser = (data) => async dispatch => {
    try {
        await users.post("/register", data)
        alert("Account successfully registered!")
        history.push("/Login")
    } catch (e) {
        alert("Account not registered!")
    }
}

export const loginUser = (data) => async dispatch => {
    try {
        const res = await users.post('/login', data)
        if (res.error) {
            throw new Error(res.error)
        }
        localStorage.setItem('authToken', res.data.token);
        alert("Successfully Logged In!")
        history.push('/')
    } catch (e) {
        alert("Wrong Credentials!")
    }
}

export const logoutUser = () => async dispatch => {
    try {
        const token = localStorage.getItem("authToken")
        console.log(token)
        const res = await users.post("/logout", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.error) {
            throw new Error(res.error)
        }
        localStorage.removeItem("authToken")
        history.push("/Login")

    } catch (e) {
        alert(e)
    }
}

export const fetchUser = () => async dispatch => {
    try {
        const token = localStorage.getItem("authToken")
        const res = await users.post("/fetchuser", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "FETCH_USER",
            payload: res.data.user
        })
    } catch (e) {
        console.log(e)
    }
}

export const fetchAllUsers = () => async dispatch => {
    try {
        const res = await users.post("/fetchallusers")
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "FETCH_ALL",
            payload: res.data.users
        })
    } catch (e) {
        console.log(e)
    }
}

export const createBlog = (data) => async dispatch => {
    try {
        const token = localStorage.getItem("authToken")
        const res = await blogs.post("/create", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "CREATE_BLOG",
            payload: res.data.blog
        })
        history.push('/')

    } catch (e) {
        console.log(e)
    }
}


export const fetchBlogs = () => async dispatch => {
    try {
        const res = await blogs.post("/fetchall")
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "FETCH_BLOGS",
            payload: res.data.blogs
        })
    } catch (e) {
        console.log(e)
    }
}

export const fetchBlog = (id) => async dispatch => {
    try {
        const res = await blogs.post("/fetchbyid", { id })
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "FETCH_BLOG",
            payload: res.data.blog
        })
    } catch (e) {
        console.log(e)
    }
}

export const fetchUserBlogs = (authorID) => async dispatch => {
    try {
        const res = await blogs.post("/fetchbyuser", { authorID })
        if (res.error) {
            throw new Error(res.error)
        }
        dispatch({
            type: "FETCH_USER_BLOG",
            payload: res.data.blogs
        })
    } catch (e) {
        console.log(e)
    }
}

export const resetBlog = () => dispatch => {
    dispatch({
        type: "RESET_BLOG",
        payload: null
    })
}

export const resetUserBlogs = () => dispatch => {
    dispatch({
        type: "RESET_USER_BLOGS",
        payload: null
    })
}