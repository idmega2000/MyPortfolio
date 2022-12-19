
import { SocialMediaLogo, SocialMediaWrapper, GihubSocialMediaLogo } from "components/SocialMedia/styled"

const TwitterLogo = require("public/static/logo/twitter_bird.png");
const InstagramLogo = require("public/static/logo/instagram.png");
const Linkdin = require("public/static/logo/linkdin.png");
const Github = require("public/static/logo/github.png");
import { socialMediaLinks } from 'constants/index';



const SocialIcons = (props) =>
  <SocialMediaWrapper>
    <a href={socialMediaLinks.github} target="_blank">
      <GihubSocialMediaLogo src={Github} />
    </a>
    <a href={socialMediaLinks.instagram} target="_blank">
      <SocialMediaLogo src={InstagramLogo} />
    </a>
    <a href={socialMediaLinks.linkedin} target="_blank">
      <SocialMediaLogo src={Linkdin} />
    </a>
    <a href={socialMediaLinks.twitter} target="_blank">
      <SocialMediaLogo src={TwitterLogo} />
    </a>
  </SocialMediaWrapper>


export default SocialIcons
