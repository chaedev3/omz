import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import ImageUploader from "../components/common/ImageUploader";
import { useRef, useState } from "react";
import { images } from "../assets/images";

export default function CommunityCreatePage() {
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredContent = contentInputRef.current!.value;

    if (enteredContent.trim().length === 0) {
      return;
    }
    const communityData = {
      content: enteredContent,
      image: file[0],
    };
    console.log(communityData);
  };

  return (
    <div>
      <CommunityBanner />
      <img src={images.main_logo} alt="" className="border-2 w-10 h-10" />

      <form onSubmit={submitHandler}>
        <textarea
          className="w-full"
          maxLength={145}
          placeholder="나는 지금..."
          ref={contentInputRef}
        />
        <ImageUploader file={file} onFile={onFile} shape={false} />

        <button>생성</button>
      </form>
      <CommunityNavbar />
    </div>
  );
}