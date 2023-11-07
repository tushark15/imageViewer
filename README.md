# Flickr Photo Search App

This is a React application that allows users to search for photos using the Flickr API. The app presents an interface with a search bar, displays search suggestions based on the search history, and features an infinite scroll to load more photos as the user scrolls.

## Features

- **Search Functionality:** Users can input search terms in the search bar to look for photos.
- **Search History:** Displays a history of the last 5 searched terms for quick reference.
- **Infinite Scroll:** Loads more photos as the user scrolls through the content.

## Components

### `Content`

The `Content` component fetches and displays photos from the Flickr API. It utilizes infinite scroll functionality to load more images dynamically as the user scrolls. Clicking on a photo opens a modal displaying a larger version of the clicked image.

### `ImageModal`

The `ImageModal` component is responsible for displaying a modal view of an image when a user clicks on a photo in the `Content` component. It presents the clicked image in a larger view with a 'Close' button to exit the modal.

### `SearchBar`

The `SearchBar` component features the search input field and displays the search history. It provides suggestions based on the search history and allows users to select from their recent searches. It stores the search history locally to maintain user preferences.

## Technologies Used

- React
- Vite
- react-bootstrap
- bootstrap
- styled-components
- react-infinite-scroll-component
- Flickr API

## Local Development

To run the app locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file and add your Flickr API key as `VITE_APIKEY=YOUR_API_KEY`.
4. Start the development server using `npm run dev`.

## Credits

This project was created by **Tushar**. If you have any suggestions or questions, please feel free to reach out.

Email: [tusharkhandelwal1512@gmail.com](mailto:tusharkhandelwal1512@gmail.com)
