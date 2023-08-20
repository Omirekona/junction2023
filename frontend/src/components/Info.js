import React, {useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { FIREBASE_DB } from "../config/firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Info = ({name, info, img}) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
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
    const getFirstTwoSentences = (text) => {
        const sentences = text.split('.');
        if (sentences.length > 2) {
            return sentences.slice(0, 2).join('.') + '.';
        }
        return text;
    };

    return (
        <div>
            <p>Place name: {name}</p>
            <img src={img} alt="place image" />
            <p>Description: {getFirstTwoSentences(info)}</p>
            <form>
                <input type="file" onChange={handleImageUpload} />
                <input type="submit" onSubmit = {handleSubmit}/>
            </form>
        </div>
    );
}

export default Info;