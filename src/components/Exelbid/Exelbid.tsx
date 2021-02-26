import React from "react";
import { PropType } from "./Types";
import "./exelbid.lib";
import "./exelbid.css";

/**
 *
 * @param width 광고 가로 크기
 * @param height 광고 세로 키기
 * @param adUnitCode 광고 코드 번호
 * @param adPosition 광고 위치
 * @return JSX
 */
export default function Exelbid(props: PropType) {
  const { width, height, adUnitCode, adPosition } = props;
  const adContainer = "div-exelbid-" + adUnitCode;

  React.useEffect(() => {
    const exelbidtag = (window as any).exelbidtag;

    exelbidtag.push(() => {
      exelbidtag.initAdBanner(adUnitCode, width, height, adContainer);
      exelbidtag.loadAd(adUnitCode);
      exelbidtag.setIsInApp(true);
    });
  }, []);

  return <div id={adContainer} className={adPosition} />;
}
