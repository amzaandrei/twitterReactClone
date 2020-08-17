import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from '../../firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('twitterClone').add({
            displayName: "Andrei Amza",
            username: "amza177",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1226114713655955457/F6WL1Ati_400x400.jpg"
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1226114713655955457/F6WL1Ati_400x400.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening"></input>
                    <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} placeholder="Enter the imageUrl"></input>
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetBox_btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
