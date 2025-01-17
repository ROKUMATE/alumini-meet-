import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guidelines from "./components/Guidelines";
import Campus from "./components/Campus";
import Network from "./components/Network";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Images from "./components/StarterImages";
import TimeLines from "./components/TimeLine";
function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Images />
                <Hero />
                <TimeLines />
                <Guidelines />
                <Campus />
                <Network />
                <Donate />
            </main>
            <Footer />
        </div>
    );
}

export default App;
