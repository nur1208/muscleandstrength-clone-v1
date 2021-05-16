import React from "react";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { Images } from "./Images";
import { SpinnerImage } from "./SpinnerImage";

export const AppIU = () => {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    // console.log(object)

    fetch(`http://localhost:5000/api/image/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        this.setState({
          uploading: false,
          images,
        });
      });
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.public_id !== id));
  };

  const content = () => {
    switch (true) {
      case uploading:
        return <SpinnerImage />;
      case images.length > 0:
        return <Images images={images} removeImage={removeImage} />;
      default:
        return <Buttons onChange={onChange} />;
    }
  };

  return (
    <div>
      <div>
        <div className="buttons">{content()}</div>
      </div>
    </div>
  );
};
