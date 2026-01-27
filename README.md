# MediMove

A comprehensive medical transportation platform connecting patients with specialized medical transport services. MediMove provides an intuitive interface for booking medical rides, managing appointments, and coordinating between doctors, drivers, and patients.

## 🚀 Features

### Patient Features
- **Easy Ride Booking**: Book medical transportation with a user-friendly interface
- **Real-time Map Integration**: View routes and track rides using Google Maps and MapLibre
- **Appointment Management**: Schedule and manage medical appointments
- **User Authentication**: Secure login and registration system

### Doctor Dashboard
- **Appointment Calendar**: View and manage patient appointments with an interactive calendar
- **Patient Details**: Access comprehensive patient information
- **Schedule Management**: Organize daily medical transportation needs

### Driver Dashboard
- **Ride Management**: View and accept ride requests
- **Route Navigation**: Integrated mapping for efficient route planning
- **Real-time Updates**: Stay connected with ride status and patient information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM v6
- **UI Framework**: Bootstrap 5.3.2
- **Mapping Services**: 
  - Google Maps React API
  - MapLibre GL
  - MapLibre GL Geocoder
- **Calendar**: React Calendar
- **HTTP Client**: Axios
- **Cloud Services**: AWS SDK
- **Form Components**: React Select, React Google Autocomplete

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher recommended)
- npm or yarn package manager
- Google Maps API key (for map features)
- AWS credentials (if using AWS services)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd last-medimove-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   REACT_APP_AWS_REGION=your_aws_region
   REACT_APP_AWS_ACCESS_KEY_ID=your_aws_access_key
   REACT_APP_AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with OpenSSL legacy provider support.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized performance.

### `npm run eject`
**Note**: This is a one-way operation. Once you eject, you can't go back!

## 🗂️ Project Structure

```
last-medimove-app/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── favicon.ico        # App icon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DoctorDashboardCalender.jsx
│   │   ├── DriverDashboardMainContent.jsx
│   │   ├── MapMainContent.jsx
│   │   ├── RideBookingMainContent.jsx
│   │   └── ...
│   ├── pages/            # Page-level components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── DriverDashboard.jsx
│   │   ├── MapDashboard.jsx
│   │   └── RideBookingPage.jsx
│   ├── App.js            # Main app component with routing
│   ├── App.css           # Global styles
│   ├── index.js          # App entry point
│   └── index.css         # Base styles
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🌐 Application Routes

- `/` - Home page
- `/loginpage` - User login
- `/signuppage` - User registration selection
- `/signupformpage` - Registration form
- `/driverdashboard` - Driver dashboard and ride management
- `/doctordashboard` - Doctor dashboard with calendar
- `/mapdashboard` - Interactive map view
- `/ridebookingpage` - Book a medical ride

## 🔐 Authentication

The application includes a secure authentication system for different user roles:
- Patients
- Doctors
- Drivers

Each role has access to specific features and dashboards tailored to their needs.

## 🗺️ Map Integration

MediMove uses multiple mapping solutions:
- **Google Maps API**: Primary mapping and geocoding service
- **MapLibre GL**: Open-source mapping library for enhanced visualization
- **Geocoding**: Address search and autocomplete functionality

## 🎨 Styling

The application uses Bootstrap 5 for responsive design and custom CSS for component-specific styling.

## 🧪 Testing

The project includes testing setup with:
- Jest
- React Testing Library
- User event testing utilities

Run tests with:
```bash
npm test
```

## 🚧 Known Issues

- The project uses `--openssl-legacy-provider` flag due to OpenSSL compatibility with older React Scripts version
- Consider upgrading to React Scripts 5.x for better compatibility with modern Node.js versions

## 🔄 Future Enhancements

- Real-time ride tracking
- Push notifications for ride updates
- Payment integration
- Rating and review system
- Multi-language support
- Mobile app version

## 📝 License

This project is private and proprietary.

## 👥 Contributing

Please contact the project maintainers for contribution guidelines.

## 📧 Support

For support and queries, please contact the development team.

---

**Built with ❤️ for better medical transportation services**
