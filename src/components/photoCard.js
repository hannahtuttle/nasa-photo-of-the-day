import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Description from './photoDescription.js'

function PhotoCard() {
    const [photo, setPhoto] = useState ("")
    const [describe, setDescribe] = useState("")

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
        .then(response => {
           console.log(response.data) 
           const imgUrl = response.data.url
           const imgDesc = response.data.explanation
           setDescribe(imgDesc)
            setPhoto(imgUrl)
        })
    }, [])

    return <img src={photo} alt = 'space photo'></img>
                // <Description photoDescription={describe} />
}

export default PhotoCard