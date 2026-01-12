import { useState, useEffect } from 'react'
import { contactAPI } from '../services/api'
import './AdminPages.css'

const AdminContacts = () => {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try {
            const response = await contactAPI.getAll()
            setContacts(response.data.data)
            setLoading(false)
        } catch (err) {
            setError('Failed to fetch messages')
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await contactAPI.delete(id)
                setContacts(contacts.filter(c => c._id !== id))
            } catch (err) {
                alert('Failed to delete message')
            }
        }
    }

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await contactAPI.updateStatus(id, newStatus)
            setContacts(contacts.map(c => c._id === id ? { ...c, status: newStatus } : c))
        } catch (err) {
            alert('Failed to update status')
        }
    }

    if (loading) return <div className="loading">Loading messages...</div>
    if (error) return <div className="error-message">{error}</div>

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h2>Contact Messages</h2>
            </div>

            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact._id}>
                                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>
                                    <select
                                        value={contact.status}
                                        onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                                        style={{ padding: '0.3rem', borderRadius: '4px' }}
                                    >
                                        <option value="new">New</option>
                                        <option value="read">Read</option>
                                        <option value="replied">Replied</option>
                                    </select>
                                </td>
                                <td className="actions-cell">
                                    <button
                                        onClick={() => alert(`Message from ${contact.name}:\n\n${contact.message}`)}
                                        className="btn-edit"
                                    >
                                        View
                                    </button>
                                    <button onClick={() => handleDelete(contact._id)} className="btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminContacts
