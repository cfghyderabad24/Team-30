// src/components/FarmerProfiles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FarmerProfiles.css';

const FarmerProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch data from backend using Axios
        axios.get('http://localhost:8000/farmer_profiles') // Replace with your backend API endpoint
            .then(response => {
                setProfiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

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
                <p>Address: {profile.address}</p>
                <p>Contact Number: {profile.contact_no}</p>
                <p>Crop Grown: {profile.crop_grown}</p>
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
