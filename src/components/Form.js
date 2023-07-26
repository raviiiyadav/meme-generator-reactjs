import React, { useEffect, useState } from "react";
// import memesData from "./MemeData";
import "./MemeGenerator.css";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/43a45p.png",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleGetMemeButton = (e) => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
        <img className="meme--image" src={meme.randomImage} alt="image" />
        <h3 className="meme-text top">{meme.topText}</h3>
        <h3 className="meme-text bottom">{meme.bottomText} </h3>
      </div>
    </main>
  );
};

export default Form;
