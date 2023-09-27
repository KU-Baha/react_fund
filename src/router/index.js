import About from "../pages/About";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRouters = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Post, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRouters = [
    {path: '/login', component: Login, exact: true},
]