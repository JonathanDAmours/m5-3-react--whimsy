import React from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { useTweet } from "../TweetContext";

const Tweet = () => {
  const { tweetContents, date, numOfLikes, numOfRetweets } = useTweet();

  return (
    <Wrapper>
      <Header />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Stats>
        <Span>{numOfRetweets}</Span> Retweets
        <SpanLikes>{numOfLikes}</SpanLikes> Likes
      </Stats>
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Span = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #2e2e2e;
`;

const SpanLikes = styled.span`
  font-weight: bold;
  margin-right: 5px;
  margin-left: 15px;
  color: #2e2e2e;
`;

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: grey;
  border-top: 1px solid #eeeeee;
`;

export default Tweet;
