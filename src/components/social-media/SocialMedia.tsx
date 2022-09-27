import {
  SocialMediaContainer,
  SocialMediaLists,
  SocialMediaItem,
} from './SocialMedia.styles'
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaLists>
        <SocialMediaItem>
          <a href='https://www.facebook.com/'>
            <FaFacebook />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href='https://www.instagram.com/'>
            <FaInstagramSquare />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href='https://www.twitter.com/'>
            <FaTwitter />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href='https://www.linkedin.com/in/siegfred-gamboa-5b1277218/'>
            <FaLinkedin />
          </a>
        </SocialMediaItem>
      </SocialMediaLists>
    </SocialMediaContainer>
  )
}

export default SocialMedia
