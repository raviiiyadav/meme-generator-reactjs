import React, { useState } from "react";
import memesData from "./MemeData";
import "./MemeGenerator.css";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/43a45p.png",
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="main">
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          value={meme}
          onClick={handleGetMemeButton}
          className="form--button"
        >
          Get a new Meme Image
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} />
        <h3 className="meme-text top">{meme.topText}</h3>
        <h3 className="meme-text bottom">{meme.bottomText} </h3>
      </div>
    </main>
  );
};

export default Form;
