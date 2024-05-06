# Project Name

Weekday Task
Open the live application [here](https://weekdaytaskv1.vercel.app/).
   

## Description

This project is a React application that displays a list of jobs using infinite scrolling. It fetches job data from an API and allows users to filter the jobs based on certain criteria. The project uses components from the Material-UI library for styling and layout. 

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command `npm install`.
4. Start the development server by running the command `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can:

- View a list of jobs displayed in a grid layout.
- Scroll down to load more jobs using infinite scrolling.
- Filter the jobs based on certain criteria using the filter section.
- See a loading indicator while new jobs are being fetched.
- See a message when there are no more jobs to load.

## Technologies Used

- React
- React Hooks (useEffect, useState)
- React Redux (for managing filters)
- Material-UI (for styling and layout)
- InfiniteScroll (for implementing infinite scrolling)
- API (fetchJdList) for fetching job data

## File Structure

The main files and folders in this project are:

- `App.js`: The main component that renders the application.
- `components/Card.js`: Component for rendering individual job cards.
- `components/FilterSection.js`: Component for rendering the filter section.
- `utils/service.js`: Utility function for filtering jobs based on criteria.
- `api/client.js`: API client for fetching job data.


