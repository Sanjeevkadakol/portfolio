import { createContext, useContext, useState, useEffect } from 'react'
import { settingsAPI } from '../services/api'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: {
            primaryColor: '#3b82f6',
            secondaryColor: '#8b5cf6',
            mode: 'light'
        },
        siteName: 'Portfolio',
        siteDescription: 'Professional Portfolio Website',
        socialLinks: {}
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        try {
            const response = await settingsAPI.get()
            if (response.data.success) {
                setSettings(response.data.data)
                applyTheme(response.data.data.theme)
            }
        } catch (error) {
            console.error('Failed to fetch settings:', error)
        } finally {
            setLoading(false)
        }
    }

    const updateSettings = async (newSettings) => {
        try {
            const response = await settingsAPI.update(newSettings)
            if (response.data.success) {
                setSettings(response.data.data)
                applyTheme(response.data.data.theme)
                return { success: true }
            }
        } catch (error) {
            console.error('Failed to update settings:', error)
            return { success: false, error: error.message }
        }
    }

    const applyTheme = (theme) => {
        const root = document.documentElement

        // Custom variables for Admin/Legacy CSS
        root.style.setProperty('--primary-color', theme.primaryColor)
        root.style.setProperty('--secondary-color', theme.secondaryColor)

        // Tailwind variables (Overwriting oklch defaults with dynamic hex/rgb)
        root.style.setProperty('--primary', theme.primaryColor)
        root.style.setProperty('--secondary', theme.secondaryColor)

        // Handle Dark/Light mode
        if (theme.mode === 'dark') {
            root.classList.add('dark')
        } else if (theme.mode === 'light') {
            root.classList.remove('dark')
        } else {
            // Auto
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
            }
        }
    }

    return (
        <ThemeContext.Provider value={{ settings, updateSettings, loading }}>
            {children}
        </ThemeContext.Provider>
    )
}
