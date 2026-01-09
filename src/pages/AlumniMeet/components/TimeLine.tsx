import { Timeline } from './ui/TimeLine';

function AlumniMeetTimeline() {
    const data = [
        {
            title: 'Day 1: 15th February, 2026',
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Day 1: 15th February, 2026
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                        <li>
                            <strong>Welcome and Reception/Breakfast:</strong> 9
                            AM to 10 AM
                        </li>
                        <li>
                            <strong>
                                Visit to MITS for the PGDMIT 1998-2000 batch:
                            </strong>{' '}
                            10 AM to 12 noon
                        </li>
                        <li>
                            <strong>Campus Visit and Sports Activities:</strong>{' '}
                            10 AM to 1 PM
                        </li>
                        <li>
                            <strong>Lunch:</strong> 1 to 2:30 PM
                        </li>
                        <li>
                            <strong>Plantation Drive:</strong> 2:30 PM to 3 PM
                        </li>
                        <li>
                            <strong>
                                Formal Inauguration of the Alumni Meet:
                            </strong>{' '}
                            3 PM to 4 PM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>
                                Felicitation of the Silver Jubilee and Crystal
                                Jubilee Batches
                            </li>
                            <li>Launch of the Alumni Directory</li>
                            <li>Launch of the Alumni Cell</li>
                            <li>Launch of Alumni Cards</li>
                            <li>
                                IIITM Gwalior over the years: A video journey
                            </li>
                            <li>
                                Alumni Connect Talk (alumni from foundation
                                years of the institute)
                            </li>
                            <li>Presentation by team AASF</li>
                            <li>Distinguished Alumni Awards</li>
                        </ul>
                        <li>
                            <strong>Open House with the Students:</strong> 4 to
                            5 PM
                        </li>
                        <li>
                            <strong>Distinguished Alumni Talks:</strong> 5 to 6
                            PM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>
                                Distinguished Alumni Awardees Talk (Corporate)
                            </li>
                            <li>
                                Distinguished Alumni Awardees Talk
                                (Startup/Entrepreneurship)
                            </li>
                            <li>
                                Distinguished Alumni Awardees Talk
                                (Governance/Public Service)
                            </li>
                        </ul>
                        <li>
                            <strong>Cultural Evening and Gala Dinner:</strong> 6
                            PM onwards
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Day 2: 16th February, 2026',
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Day 2: 16th February, 2026
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                        <li>
                            <strong>Breakfast:</strong> 9 AM to 10 AM
                        </li>
                        <li>
                            <strong>
                                Open House with the Director and Faculty (Hybrid
                                Mode):
                            </strong>{' '}
                            10 AM to 11:30 AM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>Institute Alumni Relations</li>
                            <li>Focus Groups</li>
                            <li>
                                Structuring the Alumni Association and
                                Signatories
                            </li>
                            <li>Local and International Chapters</li>
                        </ul>
                        <li>
                            <strong>Talks:</strong> 11:30 AM to 1:30 PM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>
                                Distinguished Alumni Awardees Talk (Women
                                Alumni)
                            </li>
                            <li>
                                Distinguished Alumni Awardees Talk (Young
                                Alumni)
                            </li>
                            <li>Alumni Connect Talk 1</li>
                            <li>Alumni Connect Talk 2</li>
                        </ul>
                        <li>
                            <strong>Lunch:</strong> 1:30 PM to 3 PM
                        </li>
                        <li>
                            <strong>Talks:</strong> 3 to 4 PM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>Alumni Connect Talk 3</li>
                            <li>Alumni Connect Talk 4</li>
                            <li>Alumni Connect Talk 5</li>
                        </ul>
                        <li>
                            <strong>
                                Closing Ceremony of the Alumni Meet:
                            </strong>{' '}
                            3 PM to 5 PM
                        </li>
                        <ul className="list-disc list-inside ml-5 space-y-1 text-gray-600">
                            <li>Discussions with alumni/panel discussion</li>
                            <li>Closing remarks</li>
                        </ul>
                        <li>
                            <strong>Hybrid Batch Meetup:</strong> 5 to 7 PM
                        </li>
                        <li>
                            <strong>Dinner:</strong> 8 PM onwards
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div id="timeline" className="w-full bg-white">
            <Timeline data={data} />
        </div>
    );
}

export default AlumniMeetTimeline;
