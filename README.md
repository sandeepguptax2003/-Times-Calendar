# Times-Calendar

## Overview

This is a Calendar Events Creation. Users can Singup Login and create read update and delete resepctively.

## Features

1. **User Authentication**: Sign up, log in and log out functionalities.
2. **Event Management**: Create, update, view, and delete events, including support for recurring events and all-day events.
3. **Event Display**: Events that the user has selected going are colored. The calendar handles all-day events and distinguishes between private and public events (private event titles are hidden).
4. **Color Coding**: Different color coding for different types of events (e.g., normal event, stretching event, all-day event).

## Prerequisites
1. Node.js and npm installed
2. MongoDB installed and running

## Installation

To run the application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Setup .env file
4. Start the development server using `node index.js`.

## API Endpoints

- `POST /users/signup`: Register a new user
- `POST /users/login`: Log in a user
- `POST /events`: Create a new event
- `GET /events`: Get all events
- `GET /events/date/:date`: Get events for a specific date
- `GET /events/month/:year/:month`: Get events for a specific month
- `GET /events/day/:dayOfWeek`: Get events for a specific day of the week
- `PUT /events/:id`: Update an existing event
- `DELETE /events/:id`: Delete an event by ID

## Project Folder Structure
This project follows the Model-View-Controller (MVC) architectural pattern. Below is an overview of the folder structure:

### Model(Event Model)
Description:
Defines the schema for an event in the calendar application.

Properties:
- title: Title of the event.
- description: Description of the event.
- startTime: Start time of the event (Date format).
- endTime: End time of the event (Date format).
- private: Indicates if the event is private (Boolean, default: false).
- eventType: Type of event (String, enum: ["normal", "stretching", "allDay"], default: "normal").
- recurrence:
  - type: Type of recurrence ("daily", "weekly", "monthly", "yearly", "custom").
  - frequency: Frequency of recurrence (Number, e.g., every 2 weeks).
  - daysOfWeek: Days of the week for weekly recurrence (Array of Numbers, 0 for Sunday, 1 for Monday, ..., 6 for Saturday).
  - dayOfMonth: Day of the month for monthly recurrence (Number, 1-31).
  - monthOfYear: Month of the year for yearly recurrence (Number, 0 for January, 1 for February, ..., 11 for December).

### Model(User Model)
Description:
Defines the schema for a user in the calendar application.

Properties:
- username: Username of the user (String, required).
- email: Email address of the user (String, required, unique).
- password: Password of the user (String, required).

## Deployment

- Frontend: [Netlify](https://lighthearted-starship-c988a9.netlify.app)
- Backend: [Cyclic](https://long-fish-fatigues.cyclic.app/)

## Technologies Used

- NodeJS
- HTML/CSS
- JavaScript
