import React, {useState} from "react";
import MadlibForm from "./MadlibForm"

const Madlib = () => {
    const [data, setData] = useState("")

    if (data) {
        return (
            <div>
                <p>{data.name} closed the big {data.color} book. It slammed shut with a big bang, and a huge cloud of dust came from 
                the old pages. {data.name} put the book back into the bookcase in the {data.room}, next to {data.number} copies of the 
                Cracking the Coding Interview, the best book ever written. As {data.name} went to bed she smiled at the book and said, 
                "I wish that I could code!"</p>

                <p>When she woke up the next morning, the magic book had granted her wish, and a {data.colorTwo} coding computer 
                and a {data.colorThree} mouse were next to her bed. {data.name} hugged the old {data.color} book, and {data.numberTwo} YouTubers 
                flew through the window, to show her where to go to get a coding job.</p>

                <p>~The End~</p>
            </div>
        )
    }
    return (
        <>
        <h1>Madlibs!</h1>
        <MadlibForm setData={setData}/>
        </>
    )
}

export default Madlib;