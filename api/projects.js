export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const projects = [
        {
            id: 1,
            title: 'Hand Gesture Volume Adjuster',
            description: 'Engineered a real-time computer vision system using MediaPipe and OpenCV to interpret hand gestures for seamless system volume control. Optimized for low-latency processing and high accuracy.',
            techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
            category: 'ai', featured: true, order: 1,
            github: 'https://github.com/Sanjeevkadakol/virtualpen'
        },
        {
            id: 2,
            title: 'Voice Assistant',
            description: 'Developed a sophisticated AI voice assistant with NLP capabilities for task automation. Features custom wake-word detection, speech-to-text processing, and intelligent information retrieval.',
            techStack: ['Python', 'NLP', 'SpeechRecognition', 'Pyttsx3'],
            category: 'ai', featured: true, order: 2,
            github: 'https://github.com/Sanjeevkadakol/voiceassistant'
        },
        {
            id: 3,
            title: 'Virtual Pen',
            description: 'Created an innovative Computer Vision application that enables users to draw or annotate directly on-screen through hand tracking. Simulates a digital canvas using real-time motion analysis.',
            techStack: ['Python', 'OpenCV', 'Hand-Tracking', 'NumPy'],
            category: 'ai', featured: true, order: 3,
            github: 'https://github.com/Sanjeevkadakol/virtualpen'
        },
        {
            id: 4,
            title: 'Mental Health Chatbot',
            description: 'Designed a transformer-based chatbot architecture for empathetic user support. Leverages Sentiment Analysis and TensorFlow to provide relevant resources and guidance for mental well-being.',
            techStack: ['Python', 'TensorFlow', 'NLP', 'Flask'],
            category: 'ml', featured: true, order: 4,
            github: 'https://github.com/Sanjeevkadakol/facemask'
        }
    ];

    res.status(200).json({ success: true, data: projects });
}
