# Gym Web Application - Backend API

A RESTful API built with Express.js and PostgreSQL for managing gym operations including user authentication, memberships, trainers, schedules, and testimonials.

## Features

- **User Authentication**: JWT-based registration and login
- **Contact Management**: Handle contact form submissions
- **Membership Plans**: Manage and retrieve membership information
- **Trainer Profiles**: Store and retrieve trainer information
- **Class Scheduling**: Manage workout schedules and class times
- **Testimonials**: User reviews and feedback system
- **About Content**: Manage gym information and content

## Project Structure

```
backend/
├── config/
│   └── database.js          # PostgreSQL connection setup
├── controllers/
│   ├── authController.js    # User authentication logic
│   ├── contactController.js # Contact form handling
│   ├── membershipController.js
│   ├── trainerController.js
│   ├── scheduleController.js
│   ├── testimonialController.js
│   └── aboutController.js
├── models/
│   ├── User.js             # User data model
│   ├── Contact.js          # Contact data model
│   ├── Membership.js       # Membership data model
│   ├── Trainer.js          # Trainer data model
│   ├── Schedule.js         # Schedule data model
│   ├── Testimonial.js      # Testimonial data model
│   └── About.js            # About data model
├── routes/
│   ├── authRoutes.js       # Authentication routes
│   ├── contactRoutes.js    # Contact routes
│   ├── membershipRoutes.js # Membership routes
│   ├── trainerRoutes.js    # Trainer routes
│   ├── scheduleRoutes.js   # Schedule routes
│   ├── testimonialRoutes.js# Testimonial routes
│   └── aboutRoutes.js      # About routes
├── scripts/
│   ├── migrate.js          # Database table creation
│   └── seed.js             # Sample data insertion
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
├── server.js               # Main server file
└── README.md               # This file
```

## Installation & Setup

1. **Clone/Download the backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Update the `.env` file with your PostgreSQL connection details:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/gym_db
   JWT_SECRET=your_super_secret_jwt_key_here
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

4. **Database Setup**
   
   Create the database tables:
   ```bash
   npm run db:migrate
   ```
   
   Seed with sample data (optional):
   ```bash
   npm run db:seed
   ```

5. **Start the server**
   
   Development mode:
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Memberships
- `GET /api/memberships` - Get all membership plans
- `GET /api/memberships/:id` - Get specific membership

### Trainers
- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get specific trainer

### Schedule
- `GET /api/schedule` - Get workout schedule
- `GET /api/schedule/:id` - Get specific schedule item

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit new testimonial

### About
- `GET /api/about` - Get about information
- `GET /api/about/:id` - Get specific about section

### Health Check
- `GET /health` - Server health status

## API Response Format

All API responses follow this format:

```json
{
  "success": true/false,
  "message": "Response message",
  "data": {} // Response data (when applicable)
}
```

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (String)
- `email` (String, Unique)
- `password` (String, Hashed)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Contacts Table
- `id` (Primary Key)
- `name` (String)
- `email` (String)
- `subject` (String, Optional)
- `message` (Text)
- `created_at` (Timestamp)

### Memberships Table
- `id` (Primary Key)
- `name` (String)
- `price` (Decimal)
- `duration` (String)
- `features` (Array of Strings)
- `popular` (Boolean)
- `created_at` (Timestamp)

### Trainers Table
- `id` (Primary Key)
- `name` (String)
- `specialization` (String)
- `experience` (String)
- `bio` (Text)
- `image_url` (String)
- `created_at` (Timestamp)

### Schedule Table
- `id` (Primary Key)
- `class_name` (String)
- `trainer_name` (String)
- `day_of_week` (String)
- `start_time` (Time)
- `end_time` (Time)
- `max_participants` (Integer)
- `created_at` (Timestamp)

### Testimonials Table
- `id` (Primary Key)
- `name` (String)
- `content` (Text)
- `rating` (Integer, 1-5)
- `image_url` (String, Optional)
- `approved` (Boolean)
- `created_at` (Timestamp)

### About Table
- `id` (Primary Key)
- `section` (String)
- `title` (String, Optional)
- `content` (Text)
- `image_url` (String, Optional)
- `created_at` (Timestamp)

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **pg**: PostgreSQL client
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token generation
- **joi**: Data validation
- **nodemon**: Development server (dev dependency)

## Usage with Frontend

This backend is designed to work with your React + Vite frontend. Make sure your frontend makes requests to:

- Local development: `http://localhost:5000`
- Production: Update `FRONTEND_URL` in `.env` and deploy accordingly

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation with Joi schemas
- CORS configuration
- SQL injection protection with parameterized queries

## Error Handling

- Global error handler for unhandled exceptions
- Validation error responses
- Database error handling
- 404 route handler for undefined endpoints

---

**Note**: Remember to update your `.env` file with actual database credentials before running the application.