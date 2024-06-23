// src/components/FarmerProfiles.js
import React, { useState } from 'react';
import './FarmerProfiles.css';

const profiles = [
    {
        id: 1,
        name: 'Ajay Raj',
        age: 26,
        gender: 'Male',
        location: 'Punjab',
        image: 'img1.jpg'
    },
    {
        id: 2,
        name: 'Jaya Rani',
        age: 28,
        gender: 'Female',
        location: 'Chhattisgarh',
        image: 'img2.jpg'
    },
    {
        id: 3,
        name: 'Ronny Singh',
        age: 26,
        gender: 'Male',
        location: 'Pune',
        image: 'img3.jpg'
    },
    {
        id: 4,
        name: 'Emily White',
        age: 26,
        gender: 'Female',
        location: 'Kansas',
        image: 'img4.jpg'
    },
    {
        id: 5,
        name: 'Aditya',
        age: 26,
        gender: 'Male',
        location: 'Noida',
        image: 'img5.jpg'
    },
    {
        id: 6,
        name: 'David',
        age: 26,
        gender: 'Male',
        location: 'Khorda',
        image: 'img6.jpg'
    }
];

const FarmerProfiles = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const ProfileCard = ({ profile }) => (
        <div className="card">
            <div className="info">
                <h2>{profile.name}</h2>
                <p>Age: {profile.age}</p>
                <p>Gender: {profile.gender}</p>
                <p>Location: {profile.location}</p>
                <button>Uploading the Soil Report</button>
            </div>
        </div>
    );

    return (
        <div className="farmer-profiles">
            <h1>Farmer Profiles</h1>
            <input
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />
            <div className="profile-list">
                {filteredProfiles.map(profile => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default FarmerProfiles;
