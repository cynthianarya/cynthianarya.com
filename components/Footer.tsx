import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <div className="">
      <div className="mt-16" style={{ marginBottom: '-1px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7b5285"
            fillOpacity="1"
            d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,160C480,128,549,96,617,106.7C685.7,117,754,171,823,197.3C891.4,224,960,224,1029,213.3C1097.1,203,1166,181,1234,170.7C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer>
        <div className="bg-primary-700 flex flex-col items-center">
          <div className="text-white mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
          <div className="text-white mb-2 flex space-x-2 text-sm ">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="text-white mb-8 text-sm ">
            <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
              Tailwind Nextjs Theme
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
