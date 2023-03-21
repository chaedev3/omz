import { useMutation, useQuery } from "react-query";
import { getMusicRecommended } from "../../api/myRoom";
import MusicModalItem from "./MusicModalItem";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

type Props = {
  musicSelected: string[];
  message: string;
};

type music = {
  Title: string;
  Genre: string;
  Artist: string;
};

export default function MusicModalRecommend({ musicSelected, message }: Props) {
  const { data } = useQuery(
    "musicRecommend",
    () => getMusicRecommended({ message, songs: musicSelected }),
    { staleTime: 0 }
  );

  const [bgm, setBgm] = useState({ Artist: "", Title: "" });
  const selectBgm = (item: {
    Title: string;
    Artist: string;
    Genre?: string;
  }) => {
    setBgm({ ...bgm, Title: item.Title, Artist: item.Artist });
  };
  return (
    <div className="flex flex-col w-full items-center">
      <p>배경음악을 선택해주세요</p>
      <div className="flex flex-col gap-2 w-full mt-4">
        {data?.data.map((music: music) => (
          <MusicModalItem
            music={music}
            key={uuidv4()}
            selectBgm={selectBgm}
            bgm={bgm}
          />
        ))}
      </div>
      <button
        className="h-12 w-3/5 shadow shadow-pink-400 rounded-xl mt-4 font-bold text-xl"
        onClick={() => {
          console.log("여기에 api로 bgm 저장");
          console.log(bgm);
        }}
      >
        선택 완료
      </button>
    </div>
  );
}