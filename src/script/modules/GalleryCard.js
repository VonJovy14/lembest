import React from "react";

import "stylesheets/modules/gallerycard.scss";

import { Modal } from "@material-ui/core";

import Image from "script/components/display/Image";
import Icon from "script/components/display/Icon";
import ModalContainer from "script/components/display/ModalContainer";

function GalleryCard({ data, isImage }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="gallery-card-container">
      {isImage ? (
        <div className="image-container">
          <Image
            image={"https://drive.google.com/uc?id=" + data.image}
            fix_on="width"
          />

          <div className="image-mask"></div>
          <div className="image-details-container">{data.title}</div>
        </div>
      ) : (
        <div className="video-container">
          <div className="video-thumbnail-container">
            <Image
              image={"https://drive.google.com/uc?id=" + data.thumbnail}
              fix_on="width"
            />

            <div
              className="video-thumbnail-mask"
              onClick={() => handleOpen()}
            ></div>
            <div className="play-button-container">
              <Icon type="play_button" size={100} />
            </div>
          </div>

          <div className="video-title-container">{data.title}</div>
        </div>
      )}

      <ModalContainer display={open} onClose={() => handleClose()}>
        <div className="modal-video-container">
          <iframe src={data.video} className="video" title={data.title} />
        </div>
      </ModalContainer>
    </div>
  );
}

export default GalleryCard;
