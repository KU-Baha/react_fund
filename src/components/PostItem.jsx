import React from "react";
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router";

const PostItem = ({post, number, remove}) => {
    const router = useHistory();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title} - {post.id}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => remove(post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;