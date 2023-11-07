import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModal from "../modal/ImageModal";
import { MainContent, LoaderDiv, IMAGE } from "./ContentStyles";

const APIKEY = import.meta.env.VITE_APIKEY; // api key from .env file

const Content = () => {
  const [photos, setPhotos] = useState([]); // array of photos
  const [page, setPage] = useState(1); // page number
  const [searchQuery, setSearchQuery] = useState(""); // search query
  const [showModal, setShowModal] = useState(false); // show modal
  const [photo, setPhoto] = useState(null); // photo to be shown in modal

  const fetchMoreData = async () => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${APIKEY}&safe_search=1&page=${page}&format=json&nojsoncallback=1`; // default url

    if (searchQuery) {
      url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&text=${searchQuery}&safe_search=1&page=${page}&format=json&nojsoncallback=1`; // url with search query
    }

    const response = await fetch(url);
    const data = await response.json();
    setPhotos([...photos, ...data.photos.photo]); // add new photos to existing photos
    setPage(page + 1); // increment page number
  };

  const handleSearchQuery = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1); // reset page number
    setPhotos([]); // reset photos
  }; // handle search query

  useEffect(() => {
    setPhotos([]); // reset photos
    setPage(1); // reset page number
    fetchMoreData();
  }, [searchQuery]); // fetch data when search query changes
  return (
    <div className="d-flex">
      <SearchBar onSearch={handleSearchQuery} /> {/* Search bar */}
      <MainContent>
        {/* Infinite scroll */}
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <LoaderDiv>
              <h1>Loading...</h1>
            </LoaderDiv>
          } // loader
        >
          <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
            {photos.map((photo) => (
              <IMAGE
                key={photo.id}
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} // image url
                alt={photo.title}
                onClick={() => {
                  setPhoto(photo);
                  setShowModal(true);
                }} // show modal on click
              />
            ))}
          </div>
        </InfiniteScroll>
      </MainContent>
      {showModal && (
        <ImageModal
          show={showModal}
          onHide={() => setShowModal(false)}
          photo={photo}
        /> // image modal
      )}
    </div>
  );
};

export default Content;
