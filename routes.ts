

// An Array of routes that are accessible without authentication
export const publicRoutes = [
    '/',
    "/auth/new-verification"

]
// An Array of routes that are used for authentiacation
// these routes will redirect logged in users  to / settings 

export const adminRoutes = [
    `/dashboard`,
]
export const autheRoutes = [
    '/auth/login',
    '/auth/register',
    "/auth/error",
    "/auth/reset-password",
    "/auth/new-password",
 
]
// the prefix for api authentication routes 
// routes that starts with this prefix are sed for authentication purposes 
export const apiAuthPrefix = '/api/auth'


export const DEFUALT_LOGIN_REDIRECT="/settings"
