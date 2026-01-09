import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Guidelines from './components/Guidelines';
import Campus from './components/Campus';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Message from './components/Message';
// import Contact from './components/Contact';
import Gallery from './components/Gallery';
// import Images from './components/StarterImages';
// import TimeLines from './components/TimeLine';
// import Poster from "./components/Poster";
import AlumniMeetPage from './pages/AlumniMeet';
import VolunteerPortal from './components/VolunteerPortal';
import DirectoryPage from './pages/Directory';

// Main site layout
const MainSite = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-gray-100">
        <Navbar />
        <main>
            {/* <Images /> */}
            <Hero />
            <Gallery />
            <Campus />
            {/* <TimeLines /> */}
            {/* <Poster /> */}
            <Guidelines />
            <Message />
            <Donate />
            {/* <Contact /> */}
        </main>
        <Footer />
    </div>
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainSite />} />
                <Route path="/alumnimeet" element={<AlumniMeetPage />} />
                    <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/volunteer-portal-secret" element={<VolunteerPortal />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
