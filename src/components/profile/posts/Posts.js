"use strict";

import React from "react";
import React_img from "../../../assets/logo.svg";
import Post from "./post/Post.js";

function Posts() {
    return(
        <div className="posts">
            <h2 className="posts-subtitle">My posts</h2>
            <div className="control"> 
                <input className="control-input" placeholder="Текст публикации"/>
                <button className="control-button">Опубликовать</button>
            </div>
            <div className="public">
                <Post name="Иван Иванов" message="Привет, как дела?"/>
                <Post name="Дональд Трамп" message="Го завтра на Марс?"/>
                <Post name="Билл Гейтс" message="Жду мой новый чип"/>
            </div>
        </div>
    );
}

export default Posts;
