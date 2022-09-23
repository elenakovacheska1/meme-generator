import React from 'react';

let Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https:\/\/i.imgflip.com\/261o3j.jpg"
    });
    
    const [allMemeImages, setAllMemeImages] = React.useState({});

    React.useEffect(() => {
        console.log("useEffect is used!");
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data));
    }, []);

    let randomMeme = () => {
        const memesArr = allMemeImages.data.memes;
        const numRandom = Math.floor(Math.random() * memesArr.length);
        const imgUrl = memesArr[numRandom].url; 
        setMeme(prevMeme => {
            return({...prevMeme, randomImage: imgUrl});
        });
    }
    
    let handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return(
                {...prevMeme,
                    [name]: value
                }
            );
        });

    }

    return(
        <main className='main'>
            <div className="form">
                <div className="form--container">
                    <input className="form-text-top" type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    ></input>
                    <input className="form--text--bottom" type="text" placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    ></input>
                </div>
                <button onClick={randomMeme} className="form--button">Get a new meme image</button>
            </div> 
            <div className="meme">
                <img src={meme.randomImage} alt="meme image" 
                className="meme--image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Meme;