"use client";

import { useTranslations } from "next-intl";
import { SimpleSouthKoreaMapChart } from "react-simple-south-korea-map-chart";

const data = [
  { locale: "부산광역시", count: 1500 },
  { locale: "대구광역시", count: 3000 },
  { locale: "대전광역시", count: 10000 },
  { locale: "강원도", count: 2500 },
  { locale: "광주광역시", count: 1000 },
  { locale: "경기도", count: 10000 },
  { locale: "인천광역시", count: 10000 },
  { locale: "제주특별자치도", count: 100 },
  { locale: "충청북도", count: 10000 },
  { locale: "경상북도", count: 2000 },
  { locale: "전라북도", count: 3300 },
  { locale: "세종특별자치시", count: 10000 },
  { locale: "충청남도", count: 10000 },
  { locale: "경상남도", count: 0 },
  { locale: "전라남도", count: 250 },
  { locale: "울산광역시", count: 100 },
  { locale: "서울특별시", count: 10000 },
];

const localeMap: Record<string, string> = {
  서울특별시: "Seoul",
  부산광역시: "Busan",
  대구광역시: "Daegu",
  대전광역시: "Daejeon",
  강원도: "Gangwon-do",
  광주광역시: "Gwangju",
  경기도: "Gyeonggi-do",
  인천광역시: "Incheon",
  제주특별자치도: "Jeju",
  충청북도: "Chungcheongbuk-do",
  경상북도: "Gyeongsangbuk-do",
  전라북도: "Jeollabuk-do",
  세종특별자치시: "Sejong",
  충청남도: "Chungcheongnam-do",
  경상남도: "Gyeongsangnam-do",
  전라남도: "Jeollanam-do",
  울산광역시: "Ulsan",
};

const CustomTooltip = ({ tooltipStyle, children }: any) => {
  const t = useTranslations("Map");

  return (
    <div
      className="text-white min-w-[80px] p-2.5 border border-white bg-[#41444a] fixed rounded-xl text-base font-semibold text-center"
      style={{
        ...tooltipStyle,
      }}
    >
      {children && t(localeMap[(children as string).split(":")[0].trim()])}
    </div>
  );
};

export const Map = () => {
  const t = useTranslations("HomePage");

  const setColorByCount = (count: number) => {
    if (count === 0) return "#ebfffd";
    if (count > 5000) return "#79D3C4";
    else return "#ebfffd";
  };

  return (
    <section className="flex flex-col gap-4 py-20 pt-0 items-center overflow-hidden">
      <h2 className="tag">{t("area_title")}</h2>
      <div className="max-w-[765px] px-4">
        <p className="text-center">{t("area_description")}</p>
      </div>

      <SimpleSouthKoreaMapChart
        setColorByCount={setColorByCount}
        data={data}
        unit=""
        customTooltip={<CustomTooltip />}
      />
    </section>
  );
};
