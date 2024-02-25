

// An Array of routes that are accessible without authentication
export const publicRoutes = [
    '/',
    "/auth/new-verification",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/categories",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/categories/0a33b48c-3bf8-4b4e-ba1f-b809ac22d750",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/sizes",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/colors",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/billboards",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/billboards/6a066fe9-75f6-489c-8f63-587936eb931f",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/products",
"/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/products",
"/category"
]

export const clientRoutes = [
   `/category`
]
export const productRoute =[
    "/product"
]
// An Array of routes that are used for authentiacation
// these routes will redirect logged in users  to / settings 

// export const adminRoutes = [
//     `/dashboard`,
// ]
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
