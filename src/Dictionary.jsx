import { useState } from "react";

function Dictionary() {
    const data = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]

    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState(null);

    // const handleInputChange = (e) => {
    //     console.log(e.target.value); // Log the current value of the input
    //     setSearchTerm(e.target.value);
    // };

    const handleSearch = () => {
        const foundWord = data.find((key) => key.word.toLowerCase() === searchTerm.toLowerCase());
        if (foundWord) {
            setResult(foundWord.meaning);
        } else {
            setResult("Word not found in the dictionary.");
        }
    };

    return (
        <div>
        <h1>Dictionary App</h1>
        <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>

        <h3>Definition:</h3>
        <p>{result}</p>
        </div>
    );
}

export default Dictionary ;