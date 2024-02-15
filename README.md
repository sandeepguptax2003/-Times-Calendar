# Calendar Application

This is a production-ready, responsive UI for a calendar application similar to Google Calendar.

1. **User Authentication**: Sign up, log in, log out functionalities.
2. **Event Management**: Create, update, view, and delete events, including support for recurring events and all-day events.
3. **Event Display**: Events that the user has selected going are colored. The calendar handles all-day events and distinguishes between private and public events (private event titles are hidden).
4. **Color Coding**: Different color coding for different types of events (e.g., normal event, stretching event, all-day event).
5. **Drag and Drop**: Ability to drag and drop events within a day across different time slots in the calendar.

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

## Deployment

- Frontend: [Netlify](https://lighthearted-starship-c988a9.netlify.app)
- Backend: [Cyclic](https://long-fish-fatigues.cyclic.app/)

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Setup .env file
4. Start the development server using `node index.js`.

## Testing

The application has been thoroughly tested to ensure its reliability. You can run tests using `npm test`.

## Technologies Used

- NodeJS
- HTML/CSS
- JavaScript
