import React, { useState } from 'react';
import './Blog.css';

const VideoList = ({ videos, searchTerm, handleSearch }) => {
    const filterVideo = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getVideoId = (url) => {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v') || urlObj.pathname.split('/')[1];
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos Here"
                value={searchTerm}
                onChange={e => handleSearch(e.target.value)}
            />
            <ul>
                {filterVideo.map(video => (
                    <li key={video.id}>
                        <div>
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <h3>{video.title}</h3>
                                <img
                                    src={`https://img.youtube.com/vi/${getVideoId(video.link)}/0.jpg`}
                                    alt="Video Preview"
                                />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Blog = () => {
    const [search_Term, set_Search_Term] = useState('');
    const [videos, setVideos] = useState([
        {
            id: 1,
            title: 'Indian Agriculture Challenges and Opportunities',
            link: 'https://youtu.be/AvqVWJXoa9E?si=DzjzrnI-kRaSSbdU',
        },
        {
            id: 2,
            title: 'Soil Test Results',
            link: 'https://youtu.be/UK_L6xVAw_A?si=gE33YRRqqmLcjeVL',
        },
        {
            id: 3,
            title: 'Chemical Analysis of Soil',
            link: 'https://youtu.be/bjUHOLkeROM?si=n21G__xahBeoTJk4',
        },
        {
            id: 4,
            title: 'Ways to Protect Crops from Insects',
            link: 'https://youtu.be/BB8AAAIhuPI?si=XJ5JdxwYclCb7R2j',
        },
        {
            id: 5,
            title: 'Ways to Protect Crops from Cold Weather',
            link: 'https://youtu.be/nwUo6Z5n64s?si=dOWZiTgMFYDBriVb',
        },
        {
            id: 6,
            title: 'Organic Farming',
            link: 'https://youtu.be/lRyXlvIJFWI?si=-RkSOSTQA0-2UhMT',
        },
    ]);

    const searchFn = query => {
        set_Search_Term(query);
    };

    return (
        <div>
            <header>
                <h1>IFTR</h1>
            </header>
            <h3>For Farmers</h3>
            <main>
                <VideoList videos={videos} searchTerm={search_Term} handleSearch={searchFn} />
            </main>
        </div>
    );
};

export default Blog;
