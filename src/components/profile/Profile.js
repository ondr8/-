import React from "react";
import React_img from "../../assets/logo.svg";
import Posts from "./posts/Posts";

function Profile(props) {
    return(
        <div className="container">
            <div className="profile">
                <img src={React_img} className="profile-photo" alt="Фото профиля"/>
                <h1 className="person-name">{props.name}<br/>LastName</h1>
            </div>
            <Posts name="456" message="789"/>
        </div>
    );
}

export default Profile;
