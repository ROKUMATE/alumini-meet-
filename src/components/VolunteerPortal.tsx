import React, { useState, useEffect } from 'react';
import { Check, X, Eye, RefreshCw, LogOut } from 'lucide-react';

interface UpdateRequest {
    _id: string;
    rollNumber: string;
    oldData: any;
    newData: any;
    status: 'pending' | 'approved' | 'rejected';
    submittedAt: string;
    reviewedAt?: string;
    notes?: string;
}

// Use environment variable for API URL
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
console.log('VolunteerPortal - DATABASE_URL loaded:', DATABASE_URL || 'NOT SET');

const VolunteerPortal: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [secretKey, setSecretKey] = useState('');
    const [authError, setAuthError] = useState('');
    const [requests, setRequests] = useState<UpdateRequest[]>([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState<'pending' | 'approved' | 'rejected' | 'all'>('pending');
    const [selectedRequest, setSelectedRequest] = useState<UpdateRequest | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [processingId, setProcessingId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [hasMore, setHasMore] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (secretKey.trim()) {
            localStorage.setItem('volunteerSecret', secretKey.trim());
            setIsAuthenticated(true);
            setAuthError('');
            console.log('Login attempt with key:', secretKey.substring(0, 5) + '...');
            fetchRequests();
        } else {
            setAuthError('Please enter a secret key');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('volunteerSecret');
        setIsAuthenticated(false);
        setSecretKey('');
        setRequests([]);
    };

    const fetchRequests = async (page = 1) => {
        setLoading(true);
        try {
            const storedSecret = localStorage.getItem('volunteerSecret')?.trim() || '';
            const params = new URLSearchParams();
            params.append('status', statusFilter);
            params.append('page', page.toString());
            params.append('limit', '20');

            console.log('Fetching requests with URL:', DATABASE_URL + `api/volunteer/update-requests`);
            console.log('Authorization header:', `Bearer ${storedSecret?.substring(0, 5)}...`);

            const response = await fetch(DATABASE_URL + `api/volunteer/update-requests?${params.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${storedSecret}`,
                },
            });

            console.log('Response status:', response.status);

            if (response.status === 401) {
                setAuthError('Invalid secret key - check your VOLUNTEER_SECRET in backend .env');
                setIsAuthenticated(false);
                localStorage.removeItem('volunteerSecret');
                return;
            }

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                throw new Error(`Failed to fetch requests: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data received:', data);
            setRequests(data.data);
            setCurrentPage(page);
            setTotalCount(data.totalCount);
            setHasMore(data.hasMore);
        } catch (error) {
            console.error('Error fetching requests:', error);
            setAuthError(`Connection error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (requestId: string, notes: string = '') => {
        setProcessingId(requestId);
        try {
            const storedSecret = localStorage.getItem('volunteerSecret');
            const response = await fetch(DATABASE_URL + `api/volunteer/update-requests/${requestId}/approve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedSecret}`,
                },
                body: JSON.stringify({ notes }),
            });

            if (!response.ok) {
                throw new Error('Failed to approve request');
            }

            await fetchRequests(currentPage);
            setShowDetailsModal(false);
        } catch (error) {
            console.error('Error approving request:', error);
            alert('Failed to approve request');
        } finally {
            setProcessingId(null);
        }
    };

    const handleReject = async (requestId: string, notes: string = '') => {
        setProcessingId(requestId);
        try {
            const storedSecret = localStorage.getItem('volunteerSecret');
            const response = await fetch(DATABASE_URL + `api/volunteer/update-requests/${requestId}/reject`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedSecret}`,
                },
                body: JSON.stringify({ notes }),
            });

            if (!response.ok) {
                throw new Error('Failed to reject request');
            }

            await fetchRequests(currentPage);
            setShowDetailsModal(false);
        } catch (error) {
            console.error('Error rejecting request:', error);
            alert('Failed to reject request');
        } finally {
            setProcessingId(null);
        }
    };

    useEffect(() => {
        const storedSecret = localStorage.getItem('volunteerSecret')?.trim();
        if (storedSecret && !isAuthenticated) {
            setSecretKey(storedSecret);
            setIsAuthenticated(true);
            console.log('Restoring authentication from localStorage');
            // Don't call fetchRequests here - let state update first
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            console.log('Authentication state changed - fetching requests');
            fetchRequests();
        }
    }, [isAuthenticated, statusFilter]);

    const getChangedFields = (oldData: any, newData: any) => {
        const changes: { field: string; old: any; new: any }[] = [];
        const allKeys = new Set([...Object.keys(oldData || {}), ...Object.keys(newData || {})]);

        allKeys.forEach(key => {
            if (key === '_id' || key === '__v') return;
            const oldValue = oldData?.[key];
            const newValue = newData?.[key];
            if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                changes.push({ field: key, old: oldValue, new: newValue });
            }
        });

        return changes;
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border-2 border-gray-700">
                    <h1 className="text-3xl font-bold text-white mb-2">Volunteer Portal</h1>
                    <p className="text-gray-400 mb-6">Alumni Update Management</p>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Secret Key
                            </label>
                            <input
                                type="password"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                                placeholder="Enter volunteer secret key"
                            />
                        </div>

                        {authError && (
                            <div className="mb-4 bg-red-900/50 border border-red-700 rounded-lg p-3">
                                <p className="text-red-200 text-sm">{authError}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                            Access Portal
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border-2 border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">Volunteer Portal</h1>
                            <p className="text-gray-400">Manage alumni update requests</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => fetchRequests(currentPage)}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-50"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border-2 border-gray-700">
                    <div className="flex gap-2">
                        {(['pending', 'approved', 'rejected', 'all'] as const).map((status) => (
                            <button
                                key={status}
                                onClick={() => {
                                    setStatusFilter(status);
                                    setCurrentPage(1);
                                }}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${statusFilter === status
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border-2 border-gray-700">
                    <p className="text-gray-300">
                        <span className="font-bold text-lg text-white">{totalCount}</span> total requests •
                        <span className="font-bold text-lg text-gray-200"> {requests.length}</span> shown on page <span className="font-bold text-lg text-white">{currentPage}</span>
                    </p>
                </div>

                {/* Requests List */}
                {loading && requests.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="inline-block">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                        <p className="text-gray-300 mt-4 text-lg">Loading requests...</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-12 text-center border-2 border-gray-700">
                        <p className="text-gray-400 text-lg">No {statusFilter !== 'all' ? statusFilter : ''} requests found</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {requests.map((request) => (
                            <div
                                key={request._id}
                                className="bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-gray-700 hover:border-gray-600 transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white">
                                                {request.newData?.name || request.oldData?.name}
                                            </h3>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-gray-300 font-mono">
                                                {request.rollNumber}
                                            </span>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${request.status === 'pending'
                                                    ? 'bg-yellow-900/50 text-yellow-200'
                                                    : request.status === 'approved'
                                                        ? 'bg-green-900/50 text-green-200'
                                                        : 'bg-red-900/50 text-red-200'
                                                    }`}
                                            >
                                                {request.status.toUpperCase()}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-3">
                                            Submitted: {new Date(request.submittedAt).toLocaleString()}
                                        </p>

                                        {/* Preview of changes */}
                                        <div className="bg-gray-900 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-gray-300 mb-2">
                                                {getChangedFields(request.oldData, request.newData).length} field(s) changed
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                {getChangedFields(request.oldData, request.newData).slice(0, 4).map((change, idx) => (
                                                    <div key={idx} className="text-gray-400">
                                                        <span className="font-semibold text-gray-300">{change.field}:</span>{' '}
                                                        <span className="line-through">{String(change.old || 'N/A')}</span>{' '}
                                                        → <span className="text-green-400">{String(change.new || 'N/A')}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 ml-4">
                                        <button
                                            onClick={() => {
                                                setSelectedRequest(request);
                                                setShowDetailsModal(true);
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View
                                        </button>

                                        {request.status === 'pending' && (
                                            <>
                                                <button
                                                    onClick={() => handleApprove(request._id)}
                                                    disabled={processingId === request._id}
                                                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                                                >
                                                    <Check className="w-4 h-4" />
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleReject(request._id)}
                                                    disabled={processingId === request._id}
                                                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50"
                                                >
                                                    <X className="w-4 h-4" />
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalCount > 20 && (
                    <div className="mt-6 flex justify-center gap-2">
                        <button
                            onClick={() => fetchRequests(currentPage - 1)}
                            disabled={currentPage === 1 || loading}
                            className="px-4 py-2 bg-gray-800 border-2 border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            ← Previous
                        </button>
                        <span className="px-4 py-2 bg-gray-800 border-2 border-gray-700 text-white rounded-lg">
                            Page {currentPage}
                        </span>
                        <button
                            onClick={() => fetchRequests(currentPage + 1)}
                            disabled={!hasMore || loading}
                            className="px-4 py-2 bg-gray-800 border-2 border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Details Modal */}
            {showDetailsModal && selectedRequest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border-2 border-gray-700">
                        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b-2 border-gray-700">
                            <h2 className="text-2xl font-bold text-white">Update Request Details</h2>
                            <button
                                onClick={() => setShowDetailsModal(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6">
                            <div className="space-y-4">
                                {getChangedFields(selectedRequest.oldData, selectedRequest.newData).map((change, idx) => (
                                    <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                        <h3 className="font-semibold text-white mb-2 capitalize">
                                            {change.field.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Old Value:</p>
                                                <p className="text-gray-300 bg-gray-900 p-2 rounded">
                                                    {String(change.old || 'N/A')}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">New Value:</p>
                                                <p className="text-green-400 bg-gray-900 p-2 rounded font-semibold">
                                                    {String(change.new || 'N/A')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {selectedRequest.status === 'pending' && (
                            <div className="bg-gray-800 px-6 py-4 flex justify-end gap-3 border-t-2 border-gray-700">
                                <button
                                    onClick={() => setShowDetailsModal(false)}
                                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => handleReject(selectedRequest._id)}
                                    disabled={processingId === selectedRequest._id}
                                    className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50"
                                >
                                    <X className="w-4 h-4" />
                                    Reject
                                </button>
                                <button
                                    onClick={() => handleApprove(selectedRequest._id)}
                                    disabled={processingId === selectedRequest._id}
                                    className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                                >
                                    <Check className="w-4 h-4" />
                                    Approve
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VolunteerPortal;
