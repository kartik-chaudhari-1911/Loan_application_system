## Loan Application System
- Project Overview
    The Loan Application System is a user-friendly platform that allows users to submit loan applications, track their application status in real-time, and manage repayment schedules efficiently. It provides an intuitive interface with a multi-step form, dynamic status tracking, and an interactive repayment calendar.

## Features
     Multi-Step Loan Application Form: User-friendly form with real-time validation and smooth transitions.
     Loan Status Tracking: Visual progress bars to monitor application status, with notifications for updates.
     Repayment Calendar: Interactive calendar to view and manage loan payments with reminders and payment summaries.

## Tech Stack
     Frontend: React.js, HTML, CSS, JavaScript
     Backend: Node.js, Express.js
     Database: MongoDB
     API Testing: Postman

## Installation
     Clone the repository:
        - git clone https://github.com/username/loan-application-system.git
     Install dependencies for both frontend and backend:
        - cd loan-application-system
        - npm install
     Start the application:
        - npm run server

## API Endpoints
     POST /add-student - Add a new student
     POST /add-course - Add a new course
     POST /enroll-student - Enroll a student in a course
     GET /student-courses/:studentId - Get all courses a student is enrolled in
     GET /course-enrollments/:courseId - Get all students in a course
