import { useState, useEffect } from 'react';
import { skillsAPI } from '../services/api';
import SplitSectionLayout from './ui/SplitSectionLayout';
import { Award, BookOpen, Trophy, Star, Zap } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const response = await skillsAPI.getAll();
                if (response.data.success) {
                    const certs = response.data.data.filter(skill => skill.category === 'certification');

                    const formattedCerts = certs.map((cert, index) => ({
                        title: cert.name,
                        description: cert.description || "Professional Certification",
                        icon: index % 2 === 0 ? <Award className="w-6 h-6" /> : <Trophy className="w-6 h-6" />, // Placeholder icons
                        link: cert.link || '#'
                    }));
                    setCertifications(formattedCerts);
                }
            } catch (err) {
                console.error('Error fetching certifications:', err);
                setError(err.message || 'Failed to load certifications');
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    const stats = [
        { icon: <Award className="w-6 h-6" />, value: certifications.length, label: "Certifications Earned", suffix: "" },
        { icon: <BookOpen className="w-6 h-6" />, value: 6, label: "Courses Completed", suffix: "" },
        { icon: <Star className="w-6 h-6" />, value: 6, label: "Skills Mastered", suffix: "%" },
    ];

    if (loading) return <div className="py-20 text-center text-white">Loading Certifications...</div>;
    if (error) return <div className="py-20 text-center text-red-500">Error: {error}</div>;

    return (
        <SplitSectionLayout
            id="certifications"
            title="Certifications"
            subtitle="PROFESSIONAL QUALIFICATIONS"
            subtitleIcon={<Zap className="w-4 h-4" />}
            description="Continuous learning and development are key to staying ahead in the tech industry. Here are some of the certifications and milestones I've achieved."
            items={certifications}
            stats={stats}
            centerImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop"
        />
    );
};

export default Certifications;
