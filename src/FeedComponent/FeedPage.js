import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBoxComponent/TweetBox'
import './FeedPage.css'
import PostPage from './PostComponent/PostPage'
import db from '../firebase'
import FlipMove from 'react-flip-move';

const FeedPage = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostsId] = useState([]);

    useEffect(() => {
        const postUnsub = db.collection('twitterClone').onSnapshot(snap => (
            setPosts(snap.docs.map(doc => doc.data()))
        ))
        const postIdUnsub = db.collection('twitterClone').onSnapshot(snap => (
            setPostsId(snap.docs.map(doc => doc.id))
        ))
        return () => {
            postUnsub()
            postIdUnsub()
        }
    }, [])
    return (
        <div className="feed">
            <div className="feed_header">
                <h3>Home</h3>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map(post => 
                    <PostPage 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    />
                )}
            </FlipMove>
        </div>
    )
}

export default FeedPage
