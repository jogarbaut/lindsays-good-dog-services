import { useState, useEffect } from "react"
import Navbar from "@/scenes/navbar"
import { SelectedPage } from "@/shared/types"
import Home from "./scenes/home"
import Services from "./scenes/services"
import Testimonials from "./scenes/testimonials"
import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer"
import Gallery from "./scenes/gallery"
import About from "./scenes/about"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isUserTopOfPage, setIsUserTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsUserTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsUserTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
        isUserTopOfPage = {isUserTopOfPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <About
        setSelectedPage={setSelectedPage}
      />
      <Services
        setSelectedPage={setSelectedPage}
      />
      <Gallery
        setSelectedPage={setSelectedPage}
      />
      <Testimonials
        setSelectedPage={setSelectedPage}
      />
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
      <Footer
        selectedPage = {selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
