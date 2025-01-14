import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guidelines from "./components/Guidelines";
import Campus from "./components/Campus";
import Network from "./components/Network";
import Donate from "./components/Donate";
// import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Guidelines />
                <Campus />
                <Network />
                <Donate />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
