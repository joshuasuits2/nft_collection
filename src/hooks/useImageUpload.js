import { useEffect, useState } from "react";

export default function useImageUpload() {
  const [image, setImage] = useState("");

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image?.preview);
    };
  }, [image]);

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
    console.log("Called");
  };
  return {
    image,
    setImage,
    handleSelectImage,
  };
}
