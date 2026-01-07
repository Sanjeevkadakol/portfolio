import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'auto'
    const savedTheme = localStorage.getItem('theme') || 'auto'
    return savedTheme
  })

  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primaryColor') || '#3b82f6'
  })

  const [secondaryColor, setSecondaryColor] = useState(() => {
    return localStorage.getItem('secondaryColor') || '#8b5cf6'
  })

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Apply colors
    root.style.setProperty('--primary-color', primaryColor)
    root.style.setProperty('--secondary-color', secondaryColor)
    
    // Handle auto theme
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    }

    // Save to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('primaryColor', primaryColor)
    localStorage.setItem('secondaryColor', secondaryColor)
  }, [theme, primaryColor, secondaryColor])

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e) => {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'auto'
      return 'light'
    })
  }

  const updateColors = (primary, secondary) => {
    setPrimaryColor(primary)
    setSecondaryColor(secondary)
  }

  const value = {
    theme,
    primaryColor,
    secondaryColor,
    toggleTheme,
    setTheme,
    updateColors,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

