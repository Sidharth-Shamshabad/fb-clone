import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post.js';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58377251_2141007819330251_2614179239674511360_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=yOD5soM91V4AX-PuDvf&_nc_ht=scontent-lga3-1.xx&oh=d43d1e0687b9fbb9fa456c25144b448c&oe=5FA04414"
                timestamp='This is a timestamp'
                username="sidharth_shamshabad"
                image="https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg"
            />
            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="Wow this is such a cool website!"
                timestamp="This is another timestamp"
                username="Josh_Baker"
            />
            <Post />
        </div>
    )
}

export default Feed;