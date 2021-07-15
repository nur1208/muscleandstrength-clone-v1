import React from "react";
import {
  Aqibg,
  Container,
  FirstLine,
  City,
  CitySelect,
  Weather,
  BgImg,
  Weather5,
  Clear,
  Aqi,
  AqiTip,
  Aqirank,
  DotLine,
  Status,
  StatuStip,
  Pollution,
  Pdate,
  Aqidetail,
  DataTip,
  Block,
  Item,
  Value,
  WeixinLog,
  DataSource,
} from "./styledCompo";
export const AqiBanner = () => {
  const blocks = [
    { title: "PM2.5", value: "5" },
    { title: "PM10", value: "12" },
    { title: "SO2", value: "4" },
    { title: "NO2", value: "2" },
    { title: "CO", value: "0.400" },
    { title: "O3", value: "64" },
  ];

  return (
    <Aqibg id="Aqibg" img="/imagesDome/banner1.jpg">
      <Container id="Container">
        <BgImg></BgImg>
        <FirstLine id="FirstLine">
          <City id="City">杭州</City>
          <CitySelect id="CitySelect">
            {"["}切换{"]"}
          </CitySelect>
          <Weather
            id="Weather"
            img="/imagesDome/weather.png"
            position="-160px 0px"
          >
            <Weather5 img="/imagesDome/weather.png" position="-160px 0px" />
            <br />
            <span>体感 29℃</span>
            <br />
            <span>湿度 74%</span>
            <br />
            <span>西北风 4级</span>
          </Weather>
        </FirstLine>
        <Clear id="Clear" />
        <Aqi id="Aqi">37</Aqi>
        <AqiTip id="AqiTip">AQI</AqiTip>
        <Aqirank id="Aqirank">
          排行 <span>124</span> 位，击败了 <span>63</span>%的城市
        </Aqirank>
        <Clear id="Clear" />
        <DotLine id="DotLine" />
        <Clear id="Clear" />
        <Status id="Status">优</Status>
        <StatuStip id="StatuStip">
          <Pollution id="Pollution">首要污染物：</Pollution>
          <Pdate id="Pdate">2021年07月08日22时发布</Pdate>
        </StatuStip>
        <Clear id="Clear" />
        <Aqidetail id="Aqidetail">
          <DataTip id="DataTip">数据源暂未更新最新数据！</DataTip>
          {blocks.map((item, index) => (
            <Block id="Block" key={index}>
              <Item id="Item">{item.title}</Item>
              <Value id="Value">{item.value}</Value>
            </Block>
          ))}
        </Aqidetail>
        <WeixinLog id="WeixinLog">
          <img src="/imagesDome/zhenqiweixin.jpg" alt="真气网公众号" />
          <span>扫一扫 关注公众号</span>
        </WeixinLog>
        <DataSource id="DataSource">
          数据来源：
          <a href="datasource.php" target="blank">
            中国环境监测总站
          </a>
        </DataSource>
      </Container>
    </Aqibg>
  );
};
