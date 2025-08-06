import "../App.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import images from "../assets/images.json";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import Stack from "@mui/material/Stack";

const Display = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [page, setPage] = useState(((queryParams.get("p") ?? 1) as number) - 1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    queryParams.set("p", value.toString());
    window.history.pushState({}, "", `?${queryParams.toString()}`);
    setPage(value - 1);
  };
  const imagesPerPage = 12;

  return (
    <div className="my-auto mx-0">
      <ImageList
        cols={3}
        rowHeight={150}
        className="my-auto mx-0"
        sx={{ overflow: "visible" }}
      >
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
      <Stack alignItems="center">
        <Pagination
          count={Math.floor(images.length / imagesPerPage) + 1}
          page={page + 1}
          siblingCount={3}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Stack>
    </div>
  );
};

export default Display;
