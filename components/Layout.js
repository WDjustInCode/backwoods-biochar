import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
