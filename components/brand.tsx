import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const Brand = ({ ...props }) => (
  <div className="flex items-center justify-between text-white">
    <div className="bg-white rounded-full p-2">
      <Image
        src="/static/images/logo.png"
        alt="Cynthia's logo"
        height={64}
        width={64}
        {...props}
        priority
      />
    </div>
    {typeof siteMetadata.headerTitle === 'string' ? (
      <>
        <div className="ml-3 block h-6 text-2xl font-semibold sm:hidden">
          {siteMetadata.headerTitle.split(' ')[0]}
        </div>
        <div className="ml-3 hidden h-6 text-2xl font-semibold sm:block">
          {siteMetadata.headerTitle}
        </div>
      </>
    ) : (
      siteMetadata.headerTitle
    )}
  </div>
)
export default Brand
