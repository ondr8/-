import React from "react";
import React_img from "../../../../assets/logo.svg";

function Post({name, message}) {
    return(
        <div className="post">
            <img src={React_img} className="user-name-photo" alt="Фото профиля"/>
            <div className="userName">
                <h2 className="user-name-name">{name}</h2>
                <h3 className="post-text">{message}</h3>
            </div>
        </div>
    );
}

export default Post;
