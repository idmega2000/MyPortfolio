
import { SocialMediaLogo } from "components/SocialMedia/styled"
import TwitterLogo from 'public/static/logo/twitter_bird.png'
import InstagramLogo from 'public/static/logo/instagram.png'
import Linkdin from 'public/static/logo/linkdin.png'
import Github from 'public/static/logo/github.png'
import { socialMediaLinks } from 'constants/index';


// socialMediaLinks
socialMediaLinks

const SocialIcons = (props) => 
<div style={{marginLeft: '56px'}}>
<a  href={socialMediaLinks.github} target="_blank">
<SocialMediaLogo src={Github} />
  </a>
<a  href={socialMediaLinks.instagram} target="_blank">
<SocialMediaLogo src={InstagramLogo} />
  </a>
<a  href={socialMediaLinks.linkedin} target="_blank">
<SocialMediaLogo src={Linkdin} />
  </a>
<a  href={socialMediaLinks.twitter} target="_blank">
<SocialMediaLogo src={TwitterLogo} />
  </a>
    
</div>


export default SocialIcons
