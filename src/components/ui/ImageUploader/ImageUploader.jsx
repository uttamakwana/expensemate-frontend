/* eslint-disable react/prop-types */
import { MdUploadFile } from "react-icons/md";
import "./image-uploader.css";

const ImageUploader = ({ file, setFile }) => {
  console.log(file);
  return (
    <div
      className="image-upload-form-group flex-center flex-col"
      onClick={() => document.querySelector("#your-avatar").click()}
    >
      <input
        type="file"
        name="your-avatar"
        id="your-avatar"
        placeholder="Choose your avatar"
        hidden
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <p className="flex gap-4 text-center ai-center">
        <MdUploadFile />
        Upload your avatar
      </p>
      <p className="fs-small text-black-600">
        You have selected {file && file.name}
      </p>
    </div>
  );
};

export default ImageUploader;
