
import About from '../Components/About'
import Apply from '../Components/Apply'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'


export default function Home() {

    return (
        <div className='d-flex flex-column min-vh-100'>
            <NavBar />
            <main className='flex-grow-1'>
                <Hero />
                <About />
                <Apply />
            </main>
            <Footer />
        </div>
    )
}
