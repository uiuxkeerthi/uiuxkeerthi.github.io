import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'

const Header = () => {
  let headerClass = 'h-32'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}
      style={{
        background: 'linear-gradient(to right, #E7F5FD, #FCEBE0)',
      }}
    >

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-5xl lg:px-0 xl:max-w-6xl xl:px-0 p-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/" aria-label={siteMetadata.headerTitle} className="flex-shrink-0">
            <div className="mr-3">
              <Logo />
            </div>
          </Link>
          <div className="flex items-center space-x-4 leading-5">
            <div className="hidden items-center gap-10 overflow-x-auto sm:flex">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-orange-500 text-2xl font-medium text-gray-900"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
            <MobileNav />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
