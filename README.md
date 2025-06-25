# ⚖️ Lawyer Appointment Booking Application

Welcome to the **Lawyer Appointment Booking App** — a modern, React-based web application that enables users to browse lawyer profiles and schedule appointments seamlessly. Built with interactivity, routing, persistent data, and visual elements, this app offers a clean and efficient experience for booking legal consultations.

## 🚀 Live Demo
[Click Here to View the Live Site](https://beamish-kringle-74796b.netlify.app/contact-us)

## 🛠️ Features

### 🔗 Navbar (Displayed on All Pages)
- Logo and Site Name
- 4 navigation items (Home, Lawyers, Bookings, Blogs)
- Call-to-action button
- Persistent across all routes including error page

### 📥 Footer (Not on 404 Page)
- Center-aligned logo
- Navigation links
- 3 social media icons linked to personal profiles

### 🏠 Homepage
- **Banner**: Background image with a centered heading and description
- **Lawyers Section**:
  - Displays 6 lawyers initially (Show All to load 12)
  - Each card contains: Image, Name, Speciality, Experience, License Number, “View Details” button
- **Success Section**:
  - 4 stat cards with icons, numbers (animated using `react-countup`), and titles

### 👨‍⚖️ Lawyer Details Page
- Detailed view of selected lawyer
- Information: Image, Name, Speciality, Experience, Fee, Availability
- Booking card with:
  - Availability badges
  - Book Now button
  - Success/Error toast notifications based on appointment status

### 📅 Bookings Page
- Lists all booked appointments (data persisted in `localStorage`)
- Card format with: Lawyer Name, Fee, Speciality, and Cancel button
- Option to go back to homepage if no bookings exist
- Canceling updates Recharts chart in real-time

### 📊 Recharts Integration
- Appointment fees visualized using `Recharts`
- Chart updates on appointment creation and cancellation

### 📝 Blogs Page
Custom blog layout with answers to:
- What is `useState` and how it works?
- What is the purpose of `useEffect`?
- What is a custom hook and when to use one?
- Difference between controlled vs uncontrolled components
- Overview of `useFormStatus()` in React

### ❌ 404 Error Page
- Custom-designed error message
- Includes Navbar
- Redirect to Homepage button
- Footer is hidden on this page

### 🔄 Routing & Loading
- Invalid dynamic routes handled gracefully
- Loading animation on route change
- Fallback loader during data fetching
- Page doesn't crash on reload

## 📦 Technologies Used

- React.js
- React Router
- Tailwind CSS / DaisyUI
- Recharts
- react-countup
- localStorage
- Toast notifications (e.g., react-toastify or similar)
- React Icons


