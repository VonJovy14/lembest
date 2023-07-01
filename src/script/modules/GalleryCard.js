import React from "react";

import "stylesheets/modules/gallerycard.scss";

import Image from "script/components/display/Image";
import Icon from "script/components/display/Icon";

function GalleryCard({ data, isImage }) {
  return (
    <div className="gallery-card-container">
      {isImage ? (
        <div className="image-container">
          <Image
            image={"https://drive.google.com/uc?id=" + data.image}
            fix_on="width"
          />

          <div className="image-mask position-center"></div>
          <div className="image-details-container position-center">
            {data.title}
          </div>
        </div>
      ) : (
        <div className="video-container">
          <div
            className="video-thumbnail-container"
            onClick={() =>
              window.open(data.video, "_blank", "noopener,noreferrer")
            }
          >
            <Image
              image={"https://drive.google.com/uc?id=" + data.thumbnail}
              fix_on="width"
            />

            <div className="video-thumbnail-mask position-center"></div>

            <div className="play-button-container position-center">
              <Icon type="play_button" size={100} />
            </div>
          </div>

          <div className="video-title-container">{data.title}</div>
        </div>
      )}
    </div>
  );
}

export default GalleryCard;
