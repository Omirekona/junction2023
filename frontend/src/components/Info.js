import React, {useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { FIREBASE_DB } from "../config/firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Info = (name, info) => {
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

        const storageRef = ref(FIREBASE_DB, "uploads/" + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on("state_changed", 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("upload is " + progress + "% done")
            },
            (error) => {
                console.error("upload failed: ", error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("file ")
                })
            }
        )
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