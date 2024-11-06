import React, { useState } from 'react';
import Guide from '../component/Guide';

function ListUser() {
    const [followerData, setFollowerData] = useState([]);
    const [followingData, setFollowingData] = useState([]);
    const [unfollowers, setUnfollowers] = useState([]);

    // Fungsi untuk membaca file JSON
    const handleFileUpload = (e, setData) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const jsonData = JSON.parse(event.target.result);
                const usernames = jsonData.string_list_data.map(item => item.value);
                setData(usernames);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                alert("File JSON tidak valid. Pastikan format file sesuai.");
            }
        };

        if (file) {
            reader.readAsText(file);
        }
    };

    // Fungsi untuk mengecek siapa saja yang tidak follow balik
    const handleCheckUnfollowers = (e) => {
        e.preventDefault();
        const unfollowersList = followingData.filter(user => !followerData.includes(user));
        setUnfollowers(unfollowersList);
    };

    return (
        <div className='card'>
            <h4 className='title__json'>Upload File Json dari akun Instagram</h4>
            <Guide />
            <form onSubmit={handleCheckUnfollowers} className="input__json">
                <label htmlFor="follower__json">Upload File follower.json</label>
                <input 
                    type="file" 
                    accept=".json" 
                    onChange={(e) => handleFileUpload(e, setFollowerData)} 
                    className="file-upload"
                />
                <br />

                <label htmlFor="following__json">Upload File following.json</label>
                <input 
                    type="file" 
                    accept=".json" 
                    onChange={(e) => handleFileUpload(e, setFollowingData)}
                />
                <br />

                <button type="submit" className="result__json">Cek hasil</button>
            </form>

            <div className="unfollowers-list">
                <h4>Daftar user yang tidak mengikuti anda balik</h4>
                <ol>
                    {unfollowers.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ListUser;
