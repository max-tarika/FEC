import React, { useContext } from 'react';
import OverviewContext from './context.js';
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';

const Share = () => {
  const { currentStyle } = useContext(OverviewContext);

  return (
    <div id="share" >Share On Social Media:
      <FacebookShareButton url={'https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181'}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={'https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181'}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <PinterestShareButton url={'https://www.tiktok.com/@kodiyakredd4x/video/7021896772662381829?is_from_webapp=1&sender_device=pc&web_id6919682743979378181'}>
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
    </div>
  )
}

export default Share;