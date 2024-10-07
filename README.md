
# EventGuru

[![Next.js](https://img.shields.io/badge/Next.js-10.2.3-blue.svg)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/mlscgescoe/eventGuru/blob/main/LICENSE)

## Overview

**EventGuru** is an intuitive event management platform built using [Next.js](https://nextjs.org/). It streamlines the process of organizing, managing, and promoting events with ease. Whether you're hosting a small gathering or managing a large conference, EventGuru provides all the tools you need to ensure your event runs smoothly.

With a user-friendly interface and features such as real-time scheduling, attendee management, and ticketing integration, EventGuru takes the complexity out of event planning, leaving you free to focus on the success of your event.

## Key Features

- **Real-Time Scheduling**: Manage event schedules dynamically and see updates in real-time.
- **Attendee Management**: Easily manage attendee lists, track RSVPs, and send updates to participants.
- **Ticketing Integration**: Integrate with ticketing platforms for seamless ticket purchasing and tracking.
- **Customizable Event Pages**: Create and customize event pages to reflect the branding of your event.
- **Mobile-Responsive**: Accessible on any device with a fully responsive interface.
- **Secure Authentication**: Users can sign up and log in with secure authentication.

## Demo

🚀 Check out the live demo of EventGuru [here](https://eventguru.vercel.app/events/my-events) 

## Getting Started

Follow these steps to get EventGuru up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mlscgescoe/eventGuru.git
   cd eventGuru
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and configure the necessary environment variables. An example file is provided as `.env.example`.

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Building for Production

To create an optimized build for production, run:

```bash
npm run build
# or
yarn build
```

This will generate a static build in the `.next` folder that can be deployed to any hosting platform.

## Usage

- **Creating an Event**: Start by logging in and creating a new event. Fill in event details such as name, date, location, and description. Customize the event page with images and a theme that fits your branding.
  
 <img width="1710" alt="Screenshot 2024-10-06 at 10 09 09 PM" src="https://github.com/user-attachments/assets/1c9ccb42-5a7c-4069-a626-1d59b5559a77">

  
  As shown above, the user can easily create an event by providing the necessary information such as the event title, description, location, and time. Users can also upload images to personalize their event page.

- **Managing Attendees**: Use the attendee management feature to track who has RSVP'd, send reminders, and manage guest lists.
- **Real-Time Schedule Updates**: Update the event schedule anytime, and your attendees will see changes immediately.
- **Booking an Event**: Users can explore available events, check event details, and book a seat by clicking the "Book Event" button.
  
 <img width="1710" alt="Screenshot 2024-10-06 at 10 10 17 PM" src="https://github.com/user-attachments/assets/b3a41150-89ec-4fc8-b82e-4968cc0eb0bf">

  
  In the example above, users can see all the event details, including date, time, location, and ticket availability. Once booked, the event details are shown clearly with confirmation messages, making it easier for attendees to track their bookings.

## Technologies Used

- **Next.js**: Server-side rendering and static site generation.
- **React**: Component-based architecture for building the UI.
- **Node.js**: Back-end runtime for handling server operations.
- **MongoDB**: Database for storing event and user data.
- **Tailwind CSS**: A utility-first CSS framework for responsive design.

## Contributing

We welcome contributions to EventGuru! If you'd like to report a bug, suggest a feature, or contribute code, feel free to submit an issue or pull request.

### Steps to Contribute:

1. **Fork the repository**:

   ```bash
   git fork https://github.com/mlscgescoe/eventGuru.git
   ```

2. **Create a new branch for your feature or bug fix**:

   ```bash
   git checkout -b your-feature-branch
   ```

3. **Make your changes** and commit them:

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

4. **Push to your forked repository**:

   ```bash
   git push origin your-feature-branch
   ```

5. **Submit a pull request** on GitHub explaining your changes.

## License

EventGuru is open-source software licensed under the [MIT License](https://github.com/mlscgescoe/eventGuru/blob/main/LICENSE).

