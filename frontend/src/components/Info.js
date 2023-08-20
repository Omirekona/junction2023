import React, {useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Info = (name, info, ) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.targer.files[0];
        if (file) {
            setImage(file);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!image) return;
    }

    return (
        <div>
            <div>
                <p onClick={() => {navigate("/maps")}}>X</p>
            </div>
            <p>{name}</p>
            <p>{info}</p>
            <form>
                <input type="file" onChange={handleImageUpload} />
                <input type="submit" onSubmit = {handleSubmit}/>
            </form>
        </div>
    );
}

export default Info;