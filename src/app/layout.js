// // import Footer from './components/footer/Footer'
// // import Navbar from './components/navbar/Navbar'
// import Authprovider from './components/provider/Authprovider'
// // import Themeprovider from './components/provider/Themeprovider'
// import { ThemeContextProvider, Themecontextprovider } from './components/context/Themecontext'
import './globals.css'
import { Inter } from 'next/font/google'
// import Themeprovider from './components/provider/Themeprovider'
import Authprovider from '@/provider/Authprovider'
import { ThemeContextProvider } from '@/context/Themecontext'
import Themeprovider from '@/provider/Themeprovider'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Authprovider>

        <ThemeContextProvider>
          <Themeprovider>


        <div className='container'>
        <div className="wrapper">
        <Navbar/>
        {children}
<Footer/>
        </div>
        </div>

          </Themeprovider>
        </ThemeContextProvider>
        </Authprovider>
      </body>
    </html>
  )
}
