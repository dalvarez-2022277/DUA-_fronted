export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('name')
    localStorage.removeItem('num')

    window.location.href = '/auth'
} 