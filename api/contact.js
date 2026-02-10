export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        console.log('Contact form submission:', req.body);
        // Returning success immediately to avoid frontend error
        // In a real scenario, we would send an email here using a service like SendGrid/Mailgun
        return res.status(200).json({
            success: true,
            message: 'Message received (Fail-safe mode)'
        });
    }

    res.status(405).json({ success: false, message: 'Method not allowed' });
}
