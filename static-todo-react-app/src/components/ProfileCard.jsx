import React from "react";
const ProfileCard = ({name,age,bio}) =>{
return(
      <div className="profile-card">
      <h3>Name : {name}</h3>
      <p><strong>Age :</strong>{age}<br/></p>
      <strong>Bio :</strong> {bio}
      </div>
)
}

export default ProfileCard;