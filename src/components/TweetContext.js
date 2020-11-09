import React, { createContext, useContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";
import { isLastDayOfMonth } from "date-fns";

const date = moment().format("h:mm A, MMMM Do YYYY ");

export const TweetContext = createContext(null);

export const useTweet = () => useContext(TweetContext);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleLike = () => {
    const incOrDec = isLiked ? -1 : 1;

    setIsLiked(!isLiked);
    setNumOfLikes(numOfLikes + incOrDec);
  };

  const handleToggleRetweet = () => {
    const incOrDec = isRetweeted ? -1 : 1;

    setIsRetweeted(!isRetweeted);
    setNumOfRetweets(numOfRetweets + incOrDec);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        setIsLiked,
        setIsRetweeted,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
