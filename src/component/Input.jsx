import React from 'react';
import Guide from '../component/Guide';

function Input() {
    return (
        <>
        <div className='card'>
            <h4 className='title__json'>Upload File Json dari akun Instagram</h4>
            <Guide />
            <form className='input__json'>
                <label htmlFor='follower__json'>Upload File follower .json</label>
                <input type="file" accept='.json' className='file-upload'/>
                <br></br>
                <label htmlFor='following__json'>Upload File following.json</label>
                <input type="file" accept='.json'/>

                <br></br>
                <button type='submit' className='result__json'>Cek hasil</button>
            </form>
        </div>
        </>
    )
}

export default Input;