import React, { useState } from "react";
import memesData from "./MemeData";
import "./MemeGenerator.css";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemesImages, setAllMemesImages] = useState(memesData);

  const handleGetMemeButton = (e) => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <main className="main">
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom text" />
        <button
          value={meme}
          onClick={handleGetMemeButton}
          className="form--button"
        >
          Get a new Meme Image
        </button>
      </div>
      <div className={`meme-div ${meme.randomImage ? "" : "hidden"}`}>
        <img className="meme--image" src={meme.randomImage} alt="Meme" />
      </div>
    </main>
  );
};

export default Form;
