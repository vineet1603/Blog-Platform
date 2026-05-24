# Blog Frontend — Complete Learning Guide

This document explains the **full frontend workflow** of your project with:
- project structure
- component/entity mapping
- pseudocode ("sudo code")
- data flow and API flow
- route + auth behavior
- run/build instructions

---

## 1) Tech Stack Used

- **React 19** (UI)
- **Vite 7** (build + dev server)
- **React Router DOM 7** (routing/navigation)
- **Axios** (HTTP client)
- **Bootstrap 5** + custom CSS (UI styling)

Main dependency source: `package.json`

---

## 2) Current Frontend Folder Structure

```text
blog-frontend/
  src/
    main.jsx
    App.jsx
    index.css
    App.css
    components/
      Navbar.jsx
      Home.jsx
      HeroSection.jsx
      PopularBlogs.jsx
      FeaturedBlogs.jsx
      BlogCard.jsx
      Login.jsx
      Dashboard.jsx
      WritePost.jsx
      ProtectedRoute.jsx
    services/
      api.js
```

---

## 3) High-Level Frontend Workflow

### App startup flow

```pseudo
START APP
  -> main.jsx renders <App /> inside <BrowserRouter>
  -> bootstrap CSS + index.css loaded
  -> App.jsx checks current route
  -> matching page component renders
END
```

### Route flow

```pseudo
IF path == "/"
  render Home
ELSE IF path == "/login"
  render Login
ELSE IF path == "/dashboard"
  render ProtectedRoute(Dashboard)
ELSE IF path == "/write"
  render ProtectedRoute(WritePost)
```

### ProtectedRoute auth guard flow

```pseudo
READ user from localStorage
IF user not found
  redirect to /login
ELSE
  render requested protected page
```

---

## 4) API / Backend Communication Workflow

`src/services/api.js` creates an Axios instance:
- `baseURL = http://localhost:8080/api`

### API calls used

1. Login page:
- `POST /auth/login` with `{ username, password }`

2. Dashboard page:
- `GET /posts` (fetch all posts)
- `POST /posts/{id}/like` (increment like)
- `DELETE /posts/{id}` (remove post)

3. Write post page:
- `POST /posts` with `{ title, content }`

### Data persistence in frontend

- Auth session stored in `localStorage` key: `user`
- Navbar reads `user` to show profile button
- Logout removes `user` and navigates to `/login`

---

## 5) Component Entity Map (Everything Used)

## 5.1 `main.jsx`
- **Role**: Frontend entry point
- **Uses**: `ReactDOM.createRoot`, `BrowserRouter`, `App`
- **Loads global styles**: Bootstrap + `index.css`

## 5.2 `App.jsx`
- **Role**: Route controller
- **Entities**:
  - Routes: `/`, `/login`, `/dashboard`, `/write`
  - Guards protected routes with `ProtectedRoute`

## 5.3 `ProtectedRoute.jsx`
- **Role**: Access control
- **Input**: `children`
- **Logic**:
  - if no `localStorage.user` -> redirect login
  - else render child page

## 5.4 `Home.jsx`
- **Role**: Public landing page composer
- **Composes**:
  - `Navbar`
  - `HeroSection`
  - `PopularBlogs`
  - `FeaturedBlogs`

## 5.5 `Navbar.jsx`
- **Role**: Top navigation + profile menu
- **State**: `open` (profile dropdown open/close)
- **Data source**: `localStorage.user`
- **Actions**:
  - click user button toggles menu
  - logout clears localStorage and navigates to login

## 5.6 `HeroSection.jsx`
- **Role**: Home hero banner
- **Content**: heading, subtitle, CTA button
- **Navigation behavior**: anchor to `#popular-blogs`

## 5.7 `PopularBlogs.jsx`
- **Role**: Static list of popular blog cards
- **Composes**: 3 `BlogCard` entries in Bootstrap grid

## 5.8 `FeaturedBlogs.jsx`
- **Role**: Static list of featured cards + pagination UI
- **Composes**: 3 `BlogCard` entries + page buttons

## 5.9 `BlogCard.jsx`
- **Role**: Reusable card UI entity
- **Props**:
  - `title`
  - `image`
  - `author`
  - `date`
- **UI Entity parts**:
  - top image
  - title
  - meta line (`author • date`)
  - `Read More` button

## 5.10 `Login.jsx`
- **Role**: User authentication form
- **State**:
  - `username`
  - `password`
- **Action**: `handleLogin`
  - calls `POST /auth/login`
  - saves response in localStorage as `user`
  - navigates to `/dashboard`
  - error -> alert invalid credentials

## 5.11 `Dashboard.jsx`
- **Role**: Post management page
- **State**: `posts[]`
- **Lifecycle**: `useEffect` -> fetch posts on mount
- **Actions**:
  - `fetchPosts()` -> `GET /posts`
  - `likePost(id)` -> `POST /posts/{id}/like` + refresh
  - `deletePost(id)` -> `DELETE /posts/{id}` + refresh
- **UI Entity**: each post card shows title, content, likes, action buttons

## 5.12 `WritePost.jsx`
- **Role**: New post creation page
- **State**:
  - `title`
  - `content`
- **Action**: `publishPost`
  - validate non-empty fields
  - call `POST /posts`
  - success alert + navigate `/dashboard`
  - error alert on failure

## 5.13 `index.css`
- **Role**: global visual system
- **Defines entities**:
  - gradient brand theme
  - card shadows and hover effects
  - navbar, hero, login, write, dashboard styling
  - responsive tweaks

## 5.14 `App.css`
- **Role**: reset (`* { margin:0; padding:0; box-sizing:border-box; }`)
- **Note**: currently not imported in `main.jsx` or `App.jsx`

---

## 6) End-to-End User Journeys (Pseudocode)

### Journey A — Login and enter dashboard

```pseudo
OPEN /login
TYPE username + password
CLICK Login
  -> API POST /auth/login
  -> IF success
       save user in localStorage
       navigate /dashboard
     ELSE
       show "Invalid Credentials"
```

### Journey B — Protected route check

```pseudo
USER tries /dashboard or /write
ProtectedRoute runs:
  IF localStorage.user missing
    redirect /login
  ELSE
    show requested page
```

### Journey C — Create post

```pseudo
OPEN /write
ENTER title and content
CLICK Publish Post
  IF any field empty
    alert "Please fill all fields"
    STOP
  API POST /posts {title, content}
  IF success
    alert success
    navigate /dashboard
  ELSE
    alert error
```

### Journey D — Manage posts in dashboard

```pseudo
OPEN /dashboard
on mount -> API GET /posts
RENDER each post card
IF click Like
  POST /posts/{id}/like
  refresh posts
IF click Delete
  DELETE /posts/{id}
  refresh posts
```

### Journey E — Logout

```pseudo
CLICK profile button in Navbar
CLICK Logout
  remove localStorage.user
  navigate /login
```

---

## 7) Data Entities (Frontend View)

## 7.1 User entity (stored in localStorage)
```json
{
  "id": "number|string (depends backend)",
  "username": "string",
  "...otherFields": "whatever backend returns"
}
```

## 7.2 Post entity (dashboard expects)
```json
{
  "id": "number|string",
  "title": "string",
  "content": "string",
  "likes": "number"
}
```

## 7.3 BlogCard display entity (static/home)
```json
{
  "title": "string",
  "image": "image URL",
  "author": "string",
  "date": "string"
}
```

---

## 8) Commands and Workflow for Development

From `blog-frontend`:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

Suggested daily workflow:

```pseudo
git pull latest
npm run dev
build/modify component
test route in browser
test API interaction
npm run build
commit changes
```

---

## 9) Important Notes

- Backend must be running at: `http://localhost:8080`
- API base path assumed: `/api`
- `ProtectedRoute` only checks existence of `user` in localStorage (no token expiry validation yet)
- In `Login.jsx`, class `btn-primary-success` appears custom/non-Bootstrap; default Bootstrap class is usually `btn-primary`

---

## 10) Quick Revision Sheet

- Entry point: `main.jsx`
- Router definition: `App.jsx`
- Auth guard: `ProtectedRoute.jsx`
- API config: `services/api.js`
- Main pages: `Home`, `Login`, `Dashboard`, `WritePost`
- Reusable UI: `Navbar`, `HeroSection`, `BlogCard`
- Styling base: `index.css` + Bootstrap

---

If you want, next I can generate a **backend guide file** in the same style (entities, endpoints, workflow, and pseudocode) so you have full-stack documentation.