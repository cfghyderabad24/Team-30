// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ profile }) => {
    return (
        <div className="card">
            <img src={profile.image} alt={profile.name} />
            <div className="info">
                <h2>{profile.name}</h2>
                <p>Age: {profile.age}</p>
                <p>Gender: {profile.gender}</p>
                <p>Location: {profile.location}</p>
                <p><button>Upload</button></p>
            </div>
        </div>
    );
};

export default ProfileCard;
