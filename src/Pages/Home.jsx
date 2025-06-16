import { useState } from 'react'
import About from '../Components/About'
import Apply from '../Components/Apply'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'


export default function Home() {
    const { activeSection, setActiveSection } = useState('home')
    return (
        <div className='d-flex flex-column min-vh-100'>
            <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className='flex-grow-1'>
                <Hero />
                <About />
                <Apply />
            </main>
            <Footer />
        </div>
    )
}
