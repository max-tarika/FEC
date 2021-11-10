import React from 'react';
import {
  FacebookIcon, PinterestIcon, TwitterIcon,
  FacebookShareButton, PinterestShareButton, TwitterShareButton,
} from 'react-share';

const Share = () => (
  <div id="share">
    <span className="shareText">Share On Social Media:</span>
    <div className="shareButtons">
      <FacebookShareButton url="https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url="https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton url="https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181">
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  </div>
);

export default Share;
