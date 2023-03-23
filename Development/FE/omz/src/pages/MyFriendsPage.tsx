import { useState } from "react";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";

export default function MyFriendsPage() {
  const [isToggle, setIsToggle] = useState(false);
  const subTitle = () => {
    return isToggle ? "친구 신청 보기" : "친구 목록 보기";
  };
  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="My Friends" icon={images.new_friends_img} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isToggle}
          onChange={() => setIsToggle((prev) => !prev)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <p>{subTitle()}</p>
      </label>
    </div>
  );
}
