export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const skills = [
        { name: 'Gen AI', category: 'ai-ml', proficiency: 90 },
        { name: 'Agentic AI', category: 'ai-ml', proficiency: 85 },
        { name: 'Azure ML', category: 'ai-ml', proficiency: 80 },
        { name: 'HTML / CSS', category: 'web-dev', proficiency: 95 },
        { name: 'Javascript', category: 'web-dev', proficiency: 90 },
        { name: 'UI/UX Design', category: 'design', proficiency: 85 },
        { name: 'Cyber Security', category: 'cyber-security', proficiency: 75 },
        // Certifications
        { name: 'Python Fundamentals', category: 'certification', proficiency: 100, description: 'Comprehensive mastery of Python programming, from data structures to advanced algorithms.' },
        { name: 'Cyber Security & Data Analytics', category: 'certification', proficiency: 100, description: 'Advanced certification in threat detection, network security, and data-driven security analysis.' },
        { name: 'Gen AI Models and Tools', category: 'certification', proficiency: 100, description: 'Expertise in Large Language Models (LLMs), prompt engineering, and building generative AI applications.' },
        { name: 'DevOps & CI/CD', category: 'certification', proficiency: 100, description: 'Professional certification in automated deployment pipelines, containerization (Docker/K8s), and cloud infrastructure.' },
        { name: 'ML & DS with AWS', category: 'certification', proficiency: 100, description: 'Cloud-native machine learning implementation using Amazon Web Services (SageMaker, S3, Lambda).' },
        { name: 'Azure ML', category: 'certification', proficiency: 100, description: 'Microsoft Certified: Azure AI Fundamentals and Machine Learning Associate level expertise.' }
    ];

    res.status(200).json({ success: true, data: skills });
}
