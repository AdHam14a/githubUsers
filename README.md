# GitHub Users Explorer

### A React + Redux Toolkit project to fetch GitHub users, display them with pagination, search, and favorite management with persistence.

*Live Demo* : https://github-public-users.netlify.app/


## Setup Instructions:
#### 1. Clone the repository
    git clone https://github.com/AdHam14a/githubUsers.git
    cd github-users-explorer

#### 2. Install dependencies
    npm install

#### 3. Start the development server
    npm run dev

#### 4. Build for production
    npm run build

## Technical Design Rationale:

1. React + Redux Toolkit: Used for predictable state management (favorites persistence in localStorage).

2. Tailwind CSS: For utility-first styling and easy dark mode support.

3. Debounced Search (react-use): Reduces unnecessary re-renders and API filtering calls for better performance.

4. Pagination: Implemented client-side for smooth navigation (Next, Previous, First, Last).

5. Dark Mode Support: Implemented with Tailwind’s dark: variants, applies theme to background and content.

6. Error Handling: Displays meaningful error messages if API calls fail or return unexpected responses.

7. Favorites Feature: Users can be toggled as favorites, with persistence via localStorage.

## Features:

  ✅ Fetches GitHub users via API
  
  ✅ Pagination (5 users per page display)
  
  ✅ Search functionality with debounce for efficiency
  
  ✅ Add/remove favorites with persistence
  
  ✅ Dark mode support (background + content)
  
  ✅ Meaningful error messages for better UX

## Code Review Notes:

  - Clean component structure (Home, Favorites, Landing, Search, Pagination).
  
  - Good use of Redux Toolkit slices (favoritesSlice) with persistence.
  
  - Debounced search improves performance.
  
  - Tailwind dark mode integration applied consistently.

