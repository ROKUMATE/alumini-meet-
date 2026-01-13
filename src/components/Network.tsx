import { useScrollAnimation } from '../hooks/useScrollAnimation';
import React, { useState } from 'react';
import { Search, Edit } from 'lucide-react';
import UpdateDetailsDialog from './UpdateDetailsDialog';
import { API_BASE_URL } from '../config/api';

interface Alumni {
    name: string;
    rollNumber: string;
    department?: string;
    yearOfGraduation?: number;
    lastOrganization?: string;
    currentLocationIndia?: string;
    currentOverseasLocation?: string;
    batch?: string;
    gender?: string;
    yearOfEntry?: number;
    programName?: string;
    specialization?: string;
    lastPosition?: string;
    natureOfJob?: string;
    email?: string;
    phone?: string;
    linkedIn?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    hostels?: string;
    higherStudies?: string;
    startup?: string;
    achievements?: string;
    photoLink?: string;
}

const Network: React.FC = () => {
    const headerRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
    const searchRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
    const [nameQuery, setNameQuery] = useState('');
    const [rollQuery, setRollQuery] = useState('');
    const [companyQuery, setCompanyQuery] = useState('');
    const [cityQuery, setCityQuery] = useState('');
    const [batchQuery, setBatchQuery] = useState('');
    const [results, setResults] = useState<Alumni[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(20);
    const [hasMore, setHasMore] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);

    const handleSearch = async (page: number = 1) => {
        setLoading(true);
        setError(null);
        setHasSearched(true);

        try {
            const params = new URLSearchParams();
            if (nameQuery) params.append('name', nameQuery);
            if (rollQuery) params.append('rollNumber', rollQuery);
            if (companyQuery) params.append('company', companyQuery);
            if (cityQuery) params.append('city', cityQuery);
            if (batchQuery) params.append('batch', batchQuery);
            params.append('page', page.toString());
            params.append('limit', pageSize.toString());

            const url = API_BASE_URL + `api/search?${params.toString()}`;

            // Add timeout for slow network/cold starts
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout for cold starts

            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!res.ok) {
                throw new Error('Failed to fetch results');
            }

            const { data, totalCount: total, hasMore: more } = await res.json();
            setResults(data);
            setCurrentPage(page);
            setTotalCount(total || 0);
            setHasMore(more || false);
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                setError('Request timed out. The server may be starting up, please try again.');
            } else {
                setError(err instanceof Error ? err.message : 'An error occurred during search');
            }
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handleSearch(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (hasMore) {
            handleSearch(currentPage + 1);
        }
    };

    const handleUpdateClick = (alumni: Alumni) => {
        console.log('Update button clicked for alumni:', alumni);
        setSelectedAlumni(alumni);
        setIsDialogOpen(true);
        console.log('Dialog should now open with isDialogOpen=true');
    };

    const handleUpdateSubmit = async (updatedData: Partial<Alumni>) => {
        const url = API_BASE_URL + 'api/update-request';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rollNumber: selectedAlumni?.rollNumber,
                oldData: selectedAlumni,
                newData: updatedData,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit update request');
        }
    };

    return (
        <section id="network" className="py-20 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16" ref={headerRef}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Alumni Network
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Connect with thousands of IIITM alumni worldwide
                    </p>
                </div>

                {/* Search Card - Prominent */}
                <div className="mb-12 bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-700" ref={searchRef}>
                    <div className="bg-gray-800 px-8 py-8">
                        <div className="flex items-center gap-3 mb-2">
                            <Search className="w-8 h-8 text-white" />
                            <h3 className="text-3xl font-bold text-white">
                                Find Alumni
                            </h3>
                        </div>
                        <p className="text-gray-300">Search by name, roll number, company, location, and more</p>
                    </div>

                    <div className="p-8 bg-gray-900">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                            <div className="relative">
                                <label className="block text-sm font-semibold text-gray-200 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    value={nameQuery}
                                    onChange={(e) => setNameQuery(e.target.value)}
                                    className="w-full border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg p-3 focus:border-gray-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-200 mb-2">Roll Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter roll no"
                                    value={rollQuery}
                                    onChange={(e) => setRollQuery(e.target.value)}
                                    className="w-full border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg p-3 focus:border-gray-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-200 mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter company"
                                    value={companyQuery}
                                    onChange={(e) => setCompanyQuery(e.target.value)}
                                    className="w-full border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg p-3 focus:border-gray-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-200 mb-2">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter city"
                                    value={cityQuery}
                                    onChange={(e) => setCityQuery(e.target.value)}
                                    className="w-full border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg p-3 focus:border-gray-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-200 mb-2">Batch</label>
                                <input
                                    type="text"
                                    placeholder="Enter batch"
                                    value={batchQuery}
                                    onChange={(e) => setBatchQuery(e.target.value)}
                                    className="w-full border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg p-3 focus:border-gray-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => handleSearch(1)}
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <Search className="w-5 h-5" />
                            {loading ? 'Searching...' : 'Search Alumni'}
                        </button>
                    </div>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                        <p className="text-gray-300 mt-4 text-lg">Searching alumni...</p>
                    </div>
                )}

                {/* Error state */}
                {error && (
                    <div className="bg-red-900/50 border-2 border-red-700 rounded-lg p-6 mb-8">
                        <p className="text-red-200 font-semibold">Error: {error}</p>
                    </div>
                )}

                {/* Results */}
                {!loading && hasSearched && results.length === 0 && !error ? (
                    <div className="text-center py-12 bg-gray-900 rounded-lg border-2 border-gray-700">
                        <p className="text-gray-400 text-lg">No alumni found matching your criteria.</p>
                    </div>
                ) : !loading && results.length > 0 ? (
                    <>
                        {/* Results Summary */}
                        <div className="mb-6 flex items-center justify-between">
                            <div className="bg-gray-900 border-l-4 border-gray-600 rounded-lg p-4">
                                <p className="text-gray-300">
                                    <span className="font-bold text-lg text-white">{totalCount}</span> results found •
                                    <span className="font-bold text-lg text-gray-200"> {results.length}</span> shown on page <span className="font-bold text-lg text-white">{currentPage}</span>
                                </p>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto rounded-2xl shadow-lg border-2 border-gray-700">
                            <table className="min-w-full bg-gray-900">
                                <thead>
                                    <tr className="bg-gray-800 text-white">
                                        <th className="px-6 py-4 text-left font-semibold">Name</th>
                                        <th className="px-6 py-4 text-left font-semibold">Roll Number</th>
                                        <th className="px-6 py-4 text-left font-semibold">Department</th>
                                        <th className="px-6 py-4 text-left font-semibold">Grad Year</th>
                                        <th className="px-6 py-4 text-left font-semibold">Company</th>
                                        <th className="px-6 py-4 text-left font-semibold">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((alumni, idx) => (
                                        <tr
                                            key={alumni.rollNumber}
                                            className={`${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} hover:bg-gray-700 transition-colors border-b border-gray-700 relative`}
                                            onMouseEnter={() => setHoveredRow(alumni.rollNumber)}
                                            onMouseLeave={() => setHoveredRow(null)}
                                        >
                                            <td className="px-6 py-4 font-medium text-white">{alumni.name || 'NA'}</td>
                                            <td className="px-6 py-4 text-gray-300">{alumni.rollNumber || 'NA'}</td>
                                            <td className="px-6 py-4 text-gray-300">{alumni.department || 'NA'}</td>
                                            <td className="px-6 py-4 text-gray-300">{alumni.yearOfGraduation ?? 'NA'}</td>
                                            <td className="px-6 py-4 text-gray-300">{alumni.lastOrganization || 'NA'}</td>
                                            <td className="px-6 py-4 text-gray-300 relative">
                                                {alumni.currentLocationIndia || alumni.currentOverseasLocation || 'NA'}
                                                {hoveredRow === alumni.rollNumber && (
                                                    <button
                                                        onClick={() => handleUpdateClick(alumni)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg transition-all transform hover:scale-105"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                        Update Details
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <button
                                    onClick={() => handlePrevPage()}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border-2 border-gray-700 text-gray-300 bg-gray-900 font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-800 disabled:text-gray-600 disabled:border-gray-800 disabled:cursor-not-allowed transition-all"
                                >
                                    ← Previous
                                </button>

                                {/* Page numbers */}
                                <div className="flex gap-1">
                                    {Array.from(
                                        { length: Math.ceil(totalCount / 20) },
                                        (_, i) => i + 1
                                    )
                                        .filter((page) => {
                                            const offset = 2;
                                            return (
                                                page === 1 ||
                                                page === Math.ceil(totalCount / 20) ||
                                                (page >= currentPage - offset &&
                                                    page <= currentPage + offset)
                                            );
                                        })
                                        .map((page, idx, arr) => (
                                            <React.Fragment key={`page-${page}`}>
                                                {idx > 0 && arr[idx - 1] !== page - 1 && (
                                                    <span className="px-2 py-2 text-gray-500">...</span>
                                                )}
                                                <button
                                                    onClick={() => handleSearch(page)}
                                                    className={`px-3 py-2 rounded-lg font-semibold transition-all ${currentPage === page
                                                        ? 'bg-gray-700 text-white shadow-lg'
                                                        : 'border-2 border-gray-700 text-gray-300 bg-gray-900 hover:border-gray-600 hover:bg-gray-800'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            </React.Fragment>
                                        ))}
                                </div>

                                <button
                                    onClick={() => handleNextPage()}
                                    disabled={!hasMore}
                                    className="px-4 py-2 border-2 border-gray-700 text-gray-300 bg-gray-900 font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-800 disabled:text-gray-600 disabled:border-gray-800 disabled:cursor-not-allowed transition-all"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </>
                ) : null}

                {/* Additional Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 rounded-xl shadow-lg p-6 border-t-4 border-gray-700">
                        <h4 className="text-xl font-bold text-white mb-3">Update Your Details</h4>
                        <p className="text-gray-300 mb-4">Keep your profile information current</p>
                        <a href="mailto:alumninet@iiitm.ac.in" className="text-gray-200 font-semibold hover:text-white">Contact us →</a>
                    </div>

                    <div className="bg-gray-900 rounded-xl shadow-lg p-6 border-t-4 border-gray-600">
                        <h4 className="text-xl font-bold text-white mb-3">Email Us</h4>
                        <p className="text-gray-300 mb-4">For support and inquiries</p>
                        <a href="mailto:alumninet@iiitm.ac.in" className="text-gray-200 font-semibold hover:text-white">alumninet@iiitm.ac.in →</a>
                    </div>

                    <div className="bg-gray-900 rounded-xl shadow-lg p-6 border-t-4 border-gray-500">
                        <h4 className="text-xl font-bold text-white mb-3">Connect Social</h4>
                        <p className="text-gray-300 mb-4">Join alumni on social platforms</p>
                        <a href="https://www.linkedin.com/groups/59379/" target="_blank" className="text-gray-200 font-semibold hover:text-white">LinkedIn →</a>
                    </div>
                </div>
            </div>

            {/* Update Details Dialog - Outside main content for proper z-index */}
            {selectedAlumni && (
                <UpdateDetailsDialog
                    isOpen={isDialogOpen}
                    onClose={() => {
                        console.log('Dialog closing...');
                        setIsDialogOpen(false);
                        setSelectedAlumni(null);
                    }}
                    alumni={selectedAlumni}
                    onSubmit={handleUpdateSubmit}
                />
            )}
        </section>
    );
};

export default Network;
