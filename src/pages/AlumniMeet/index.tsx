import AlumniMeetNavbar from './components/Navbar';
import AlumniMeetHero from './components/Hero';
import AlumniMeetFooter from './components/Footer';
import AlumniMeetTimeline from './components/TimeLine';
import AlumniInfoAndTimeline from './components/AlumniInfoAndTimeline';
import ContactCard from './components/ContactCard';

const AlumniMeetPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <AlumniMeetNavbar />
            <main>
                <AlumniMeetHero />
                <AlumniInfoAndTimeline />
                <AlumniMeetTimeline />
                <ContactCard />
            </main>
            <AlumniMeetFooter />
        </div>
    );
};

export default AlumniMeetPage;
