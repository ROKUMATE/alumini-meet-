import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Network from '../../components/Network';

const DirectoryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-gray-100">
            <Navbar />
            <main>
                <Network />
            </main>
            <Footer />
        </div>
    );
};

export default DirectoryPage;
