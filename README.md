# Stillframe - Photo Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS.
The application retrieves photos from the Picsum Photos API, supports
real-time author search, and saves favourite photos between refreshes.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Loading and error states.
- Responsive photo grid: one, two, or four columns.
- Case-insensitive, client-side author search.
- Favourite toggling managed by useReducer.
- Favourite persistence using localStorage.
- Custom useFetchPhotos hook.
- useCallback for the search handler.
- useMemo for the filtered photo list.
- Accessible labels and keyboard focus styles.

## Technology Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Picsum Photos API
- Browser localStorage

## Prerequisites

Install a supported Node.js version and npm.

## Installation

Clone this repository and enter the project directory:

    git clone https://github.com/frankoadeleye/celebrare-photo-gallery
    cd celebrare-photo-gallery
    npm install

## Development

    npm run dev

Open the local URL printed by Vite.

## Production Build

    npm run build
    npm run preview

## Project Structure

- `src/components/`: Gallery and reusable visual components.
- `src/hooks/useFetchPhotos.js`: Remote photo retrieval and request states.
- `src/reducers/favouritesReducer.js`: Favourite state transitions.
- `src/utils/storage.js`: Reading and writing favourites in localStorage.
- `src/App.jsx`: Page composition.
- `src/main.jsx`: React entry point.
- `src/index.css`: Tailwind import and global styles.

## Data Fetching

The application requests:

https://picsum.photos/v2/list?limit=30

The `useFetchPhotos` hook returns `photos`, `loading`, and `error`.
It checks HTTP response status, handles failures, and aborts an outstanding
request during cleanup.

## Search

Search filters the photos already loaded in memory by author name.
It does not request new data from the API.

`useCallback` memoizes the search handler. `useMemo` memoizes the filtered
photo list until its photo data or search term changes.

## Favourites

`favouritesReducer` handles the `TOGGLE_FAVOURITE` action. Photo IDs are
stored as strings to ensure consistent comparisons. The reducer returns
new arrays rather than mutating existing state.

The application loads persisted favourite IDs from localStorage when
initialising the reducer and saves changes as the list updates. Invalid
stored data is handled safely.

## Screenshots

Add genuine screenshots after running and testing the application.

## Testing

Verify loading and error states, author search, responsive grid layout,
favourite toggling, and persistence after a page refresh. Run `npm run build`
before submission.

## Assignment

Built as a pre-screening assignment for the Celebrare Frontend React
Internship.
