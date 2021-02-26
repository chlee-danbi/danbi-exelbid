import React from "react";
import { PropType } from "./Types";
import "./exelbid.lib";

/**
 *
 * @param width 광고 가로 크기
 * @param height 광고 세로 키기
 * @param adUnitCode 광고 코드 번호
 * @param adPosition 광고 위치
 * @return JSX
 */
export default function Exelbid(props: PropType) {
  const { width, height, adUnitCode } = props;
  const adContainer = "div-exelbid-" + adUnitCode;

  React.useEffect(() => {
    const exelbidtag = (window as any).exelbidtag;

    exelbidtag.push(() => {
      exelbidtag.initAdBanner(adUnitCode, width, height, adContainer);
      exelbidtag.loadAd(adUnitCode);
      // exelbidtag.setIsInApp(true);
      // exelbidtag.setIfa("9473b438-c752-4beb-ba21-80ef9353e8bc");
    });
  }, []);

  return <div id={adContainer} />;
}
