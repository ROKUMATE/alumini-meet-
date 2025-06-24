import React, { useState } from 'react';

interface Alumni {
    name: string;
    rollNumber: string;
    department?: string;
    yearOfGraduation?: number;
    lastOrganization?: string;
    currentLocationIndia?: string;
    currentOverseasLocation?: string;
    batch?: string;
}

const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

const Network: React.FC = () => {
    const [nameQuery, setNameQuery] = useState('');
    const [rollQuery, setRollQuery] = useState('');
    const [companyQuery, setCompanyQuery] = useState('');
    const [cityQuery, setCityQuery] = useState('');
    const [batchQuery, setBatchQuery] = useState('');
    const [results, setResults] = useState<Alumni[]>([]);

    const handleSearch = async () => {
        const params = new URLSearchParams();
        if (nameQuery) params.append('name', nameQuery);
        if (rollQuery) params.append('rollNumber', rollQuery);
        if (companyQuery) params.append('company', companyQuery);
        if (cityQuery) params.append('city', cityQuery);
        if (batchQuery) params.append('batch', batchQuery);
        const url = DATABASE_URL + `api/search?${params.toString()}`;

        const res = await fetch(url);
        const { data } = await res.json();
        setResults(data);
    };

    return (
        <section id="network" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Alumni Network
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Stay connected with the IIITM community
                    </p>
                </div>

                {/* Search Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Search Alumni
                    </h3>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Search by Name"
                                value={nameQuery}
                                onChange={(e) => setNameQuery(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 flex-1"
                            />
                            <input
                                type="text"
                                placeholder="Search by Roll Number"
                                value={rollQuery}
                                onChange={(e) => setRollQuery(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 flex-1"
                            />
                            <input
                                type="text"
                                placeholder="Search by Company"
                                value={companyQuery}
                                onChange={(e) => setCompanyQuery(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 flex-1"
                            />
                            <input
                                type="text"
                                placeholder="Search by City"
                                value={cityQuery}
                                onChange={(e) => setCityQuery(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 flex-1"
                            />
                            <input
                                type="text"
                                placeholder="Search by Batch"
                                value={batchQuery}
                                onChange={(e) => setBatchQuery(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 flex-1"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    {results.length === 0 ? (
                        <p className="text-gray-500">No results found.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">
                                            Name
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Roll Number
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Department
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Graduation Year
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Company
                                        </th>
                                        <th className="px-4 py-2 border">
                                            City
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Batch
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((alumni) => (
                                        <tr key={alumni.rollNumber}>
                                            <td className="px-4 py-2 border">
                                                {alumni.name || 'NA'}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {alumni.rollNumber || 'NA'}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {alumni.department || 'NA'}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {alumni.yearOfGraduation ??
                                                    'NA'}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {alumni.lastOrganization || 'NA'}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {alumni.currentLocationIndia || alumni.currentOverseasLocation || 'NA'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <p className="mt-4 text-sm text-gray-600">
                        If you have any changes to your details, please contact{' '}
                        <a
                            href="mailto:alumninet@iiitm.ac.in"
                            className="text-customBlue hover:underline">
                            alumninet@iiitm.ac.in
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://google.com"
                            target="_blank"
                            className="text-customBlue hover:underline">
                            update details
                        </a>
                        .
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                        NA = Not Available
                    </p>
                </div>
            </div>
            <section id="network" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Official Channels
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <span className="block font-medium">
                                        Mailing List:
                                    </span>
                                    <a
                                        href="mailto:alumni@iiitm.ac.in"
                                        className="text-blue-600 hover:text-blue-800">
                                        alumni@iiitm.ac.in
                                    </a>
                                </li>
                                <li>
                                    <span className="block font-medium">
                                        Contact Email:
                                    </span>
                                    <a
                                        href="mailto:alumninet@iiitm.ac.in"
                                        className="text-blue-600 hover:text-blue-800">
                                        alumninet@iiitm.ac.in
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Social Media
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/groups/59379/"
                                        target="_blank"
                                        className="flex items-center text-blue-600 hover:text-blue-800">
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                                        </svg>
                                        IIITM Alumni Network
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/groups/1496537263921717/"
                                        target="_blank"
                                        className="flex items-center text-blue-600 hover:text-blue-800">
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                        Alumni Association
                                    </a>
                                </li>
                                <li>
                                    <p className="flex items-center text-blue-600">
                                        To join IIITM WhatsApp Group, contact
                                        Kunal Vardani at +91 99296 46997
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Local Chapters
                            </h3>
                            <p className="text-gray-600 mb-4">Coming soon...</p>
                            {/* <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Contact for Details
                        </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Network;
