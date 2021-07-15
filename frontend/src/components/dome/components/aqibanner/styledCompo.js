import styled from "styled-components";

export const Aqibg = styled.div`
  height: 476px;
  width: 1170px;
  margin: auto;

  background: url(${(props) => props.img});
  background-size: 100% 100%;
`;

export const Container = styled.div`
  width: 1138px !important;
  padding: 0 15px;

  background: transparent;

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  z-index: 0;
`;

export const FirstLine = styled.div`
  position: relative;
  margin-top: 40px;
  color: #fff;
  z-index: 1000;
`;

export const City = styled.div`
  float: left;
  font-size: 58px;
  font-weight: normal;
`;

export const CitySelect = styled.div`
  float: left;
  margin-left: 6px;
  margin-top: 38px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    display: block;
  }
`;

export const Weather = styled.div`
  float: right;
  margin-top: 25px;
  font-size: 18px;

  span {
    font-size: 14px;
  }
`;

export const Weather5 = styled.div`
  display: block;
  width: 30px;
  height: 26px;
  background: url(${(props) => props.img}) ${(props) => props.position};
  margin-top: 5px;
`;

export const Clear = styled.div`
  clear: both;
  height: 0px;
  font-size: 1px;
  overflow: hidden;
  line-height: 0px;
`;

export const Aqi = styled.div`
  float: left;
  margin-top: -60px;
  font-size: 88px;
  font-weight: normal;
  color: #fff;
`;

export const AqiTip = styled.div`
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 32px;
  color: #fff;
`;

export const AqiRank = styled.div`
  float: left;
  margin-top: 20px;
  margin-left: 12px;
  font-size: 18px;
  color: #fff;
`;

export const Aqirank = styled.div`
  float: left;
  margin-top: 20px;
  margin-left: 12px;
  font-size: 18px;
  color: #fff;

  span {
    font-size: 26px;
    padding: 0 3px;
    font-family: "";
  }
`;

export const DotLine = styled.div`
  width: 450px;
  border-bottom: 2px dotted #fff;
  margin-top: 2px;
`;

export const Status = styled.div`
  background-color: #43ce17;
  float: left;
  margin-top: 10px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
`;

export const StatuStip = styled.div`
  float: left;
  margin-top: 9px;
  margin-left: 20px;
  color: #fff;
`;

export const Pollution = styled.div`
  font-size: 18px;
`;

export const Pdate = styled.div`
  font-size: 14px;
  margin-top: 0px;
`;

export const Aqidetail = styled.div`
  position: relative;
  margin-top: 40px;
  z-index: 1000;
  float: left;
`;

export const DataTip = styled.p`
  font-size: 14px;
  color: darkgrey;
  display: none;
`;

export const Block = styled.div`
  width: 60px;
  text-align: center;
  font-size: 14px;
  float: left;
  margin-right: 16px;
`;

export const Item = styled.div`
  background-color: #43ce17;
  height: 24px;
  line-height: 24px;
  color: #fff;
`;

export const Value = styled.div`
  height: 32px;
  line-height: 32px;
  color: #7f878c;
  background: #dce9ed;
`;

export const WeixinLog = styled.div`
  position: relative;
  float: right;
  text-align: center;
  margin-right: 10px;

  img {
    width: 100px;
  }

  span {
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
    display: block;
  }
`;

export const DataSource = styled.div`
  position: relative;
  float: right;
  color: #ffffff;
  top: 140px;
  left: 115px;

  a {
    color: #ffffff;
  }
`;
