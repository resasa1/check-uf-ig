import React, { useState } from 'react';

function ListUser() {
    const [followerData, setFollowerData] = useState([]);
    const [followingData, setFollowingData] = useState([]);
    const [unfollowers, setUnfollowers] = useState([]);

    // Fungsi untuk membaca file JSON dan mengekstrak username
    const handleFileUpload = (e, setData, type) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const jsonData = JSON.parse(event.target.result);
                let usernames = [];
    
                // Jika type 'followers', langsung mengambil data dari array followers
                if (type === 'followers') {
                    if (Array.isArray(jsonData)) {
                        usernames = jsonData.map(item => item.string_list_data[0].value);
                    } else {
                        throw new Error("Format JSON followers tidak sesuai");
                    }
                } 
                // Jika type 'following', mengambil data dari relationships_following
                else if (type === 'following') {
                    if (jsonData.relationships_following && Array.isArray(jsonData.relationships_following)) {
                        usernames = jsonData.relationships_following.map(item => item.string_list_data[0].value);
                    } else {
                        throw new Error("Format JSON following tidak sesuai");
                    }
                }
    
                setData(usernames);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                alert("File JSON tidak valid atau formatnya tidak sesuai.");
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
        <>
        <div className='card'>
            <h4 className='title__json'>Upload File JSON dari akun Instagram</h4>
            <form onSubmit={handleCheckUnfollowers} className="input__json">
    <div className='follower__upload'>
        <label htmlFor="follower__json">Upload File follower.json</label>
        <input 
            type="file" 
            accept=".json" 
            onChange={(e) => handleFileUpload(e, setFollowerData, 'followers')} 
            className="file-upload"
        />
    </div>
    <br />

    <div className='following__upload'>
        <label htmlFor="following__json">Upload File following.json</label>
        <input 
            type="file" 
            accept=".json" 
            onChange={(e) => handleFileUpload(e, setFollowingData, 'following')}
            className="file-upload"
        />
    </div>
    <br />

    <button type="submit" className="result__json">Cek hasil</button>
</form>


            
        </div>
        <div className="unfollowers-list">
                <h4>Daftar user yang tidak mengikuti balik</h4>
                <br></br>
                {unfollowers.length === 0 ? (
                    <p><i>Masih Kosong</i></p>
                ) : (
                    <ol>
                        {unfollowers.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ol>
                )}
            </div>
        </>
    );
}

export default ListUser;