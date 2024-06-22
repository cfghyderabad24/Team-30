// src/components/Main.js
import React, { useState } from 'react';
import profiles from '../profiles';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Farmer Profiles</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="cards">
                {filteredProfiles.map(profile => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default Main;
