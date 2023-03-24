import { useNavigate } from "react-router-dom";
import BackBtn from "../common/BackBtn";

type Props = {
  icon: string;
  title: string;
  goto?: string;
};
// icon으로 페이지 아이콘, title 페이지 제목, backBtn으로 버튼 유무 Props로 내려줌
{
  /* TODO <TitleBar icon={images.mini_room_img} title={"000님의 MiniRoom"} backBtn={true}/> */
}
export default function TitleBar({ icon, title, goto }: Props) {
  const navigate = useNavigate();
  const goBack = () => {
    if (goto) navigate(goto);
  };

  return (
    <div className="flex w-11/12 justify-between items-center p-2.5 mt-2 ">
      {/*<div className="flex w-11/12 justify-between items-center p-2.5 border-t-0 border-r-0 border-b border-l-0 border-black"> */}
      <div className="flex items-center">
        <img src={icon} alt="" className="h-12 aspect-square mr-4" />
        <p className="font-bold text-xl">{title}</p>
      </div>
      <div className="w-10 h-10 flex content-center">
        <BackBtn goBack={goBack} />
      </div>
    </div>
  );
}
