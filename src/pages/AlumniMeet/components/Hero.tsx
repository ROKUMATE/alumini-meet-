import CollegeBg from "../../../assets/College8.png";

const AlumniMeetHero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-white"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${CollegeBg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="max-w-3xl text-white force-white">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        <span className="block">Welcome to the</span>
                        <span className="block text-blue-400">
                            ABV-IIITM Alumni Meet 2026
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed force-white">
                        <span className="font-semibold">Dear Alumni,</span>
                        <br />
                        <br />
                        Atal Bihari Vajpayee Indian Institute of Information
                        Technology and Management, Gwalior, is pleased to
                        announce the upcoming Alumni Meet 2026. This gathering
                        aims to bring together our distinguished alumni,
                        faculty, students, and staff to reconnect, reminisce,
                        and celebrate the shared legacy of our institution.
                        <br />
                        <br />
                        The alumni meet provides an opportunity to revisit the
                        campus, strengthen lifelong bonds, and reflect on the
                        journeys that began here. We look forward to welcoming
                        you back and creating meaningful memories together.
                        <br />
                        <br />
                        For any queries, please contact us at{" "}
                        <a
                            href="mailto:alumninet@iiitm.ac.in"
                            className="underline force-white hover:text-blue-200"
                        >
                            alumninet@iiitm.ac.in
                        </a>
                        .
                        <br />
                        <br />
                        <span className="block font-medium">
                            Sincerely,
                        </span>
                        Prof. Pramod Kumar Singh
                        <br />
                        Dean of Alumni and External Relations
                        <br />
                        ABV-IIITM Gwalior
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                        <a
                            href="https://forms.gle/kV4GqQhJKNKFP7QP6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-4 rounded-md text-lg font-semibold
                                       bg-blue-600 hover:bg-blue-700 transition shadow-lg"
                        >
                            Express Interest
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlumniMeetHero;
