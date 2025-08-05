import "./App.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import images from "./images.json";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [page, setPage] = useState(((queryParams.get("p") ?? 0) as number) - 1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    queryParams.set("p", value.toString());
    window.history.pushState({}, "", `?${queryParams.toString()}`);
    setPage(value - 1);
  };
  const imagesPerPage = 18;

  return (
    <div style={{ margin: "0 auto" }}>
      <ImageList cols={3} rowHeight={150}>
        {images
          .slice(imagesPerPage * page, imagesPerPage * (page + 1))
          .map((name) => {
            const previewUrl = `https://rpi.aryang.dev/images/seattle/preview_${name}`;
            const fullUrl = `https://rpi.aryang.dev/images/seattle/${name}`;
            return (
              <ImageListItem key={name}>
                <a href={fullUrl} download>
                  <img
                    srcSet={previewUrl}
                    src={previewUrl}
                    loading="lazy"
                    style={{
                      height: 150,
                      objectFit: "cover",
                    }}
                  />
                </a>
              </ImageListItem>
            );
          })}
      </ImageList>
      <Pagination
        count={Math.floor(images.length / imagesPerPage) + 1}
        page={page + 1}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
};

export default App;
