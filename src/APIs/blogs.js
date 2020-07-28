import axios from 'axios'

export default axios.create({
    baseURL: "https://talha-blog-app-server.herokuapp.com/blogs"
})