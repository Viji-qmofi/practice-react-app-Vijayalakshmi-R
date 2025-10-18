import React from "react";
import ProfileCard from "./profileCard";


const ProfileContainer = () =>{

     const profiles = [
    { name: "Alex", age: 25, bio: "A software engineer who loves hiking." },
    { name: "Taylor", age: 30, bio: "A designer passionate about photography." },
    { name: "Joe", age: 28, bio: "A content creator and coffee enthusiast." },
  ];

  return (
    <div className="profile-container">
      <h1>User Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  ); 

};

export default ProfileContainer;