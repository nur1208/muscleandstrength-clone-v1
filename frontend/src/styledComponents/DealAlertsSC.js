import styled from "styled-components";

export const CallToAction = styled.div`
  display: none;

  @media (min-width: 840px) {
    display: block;
  }
`;

export const DealAlertWrap = styled.div`
  padding: 12px;
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 840px) {
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    background-color: #059;
    font-size: 13px;
  }
`;
export const MessageWrap = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 840px) {
    flex: 0 0 33%;
    -ms-grid-row-align: center;
    align-self: center;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  color: #059;
  font-family: nimbusnovus-bold, sans-serif;
  text-align: center;

  @media (min-width: 840px) {
    font-size: 25px;
    text-align: left;
    color: #fff;
    margin-left: 10%;
  }
`;
export const FormWrap = styled.div`
  width: 100%;
  margin-top: 1em;
  z-index: 1;
  position: relative;

  @media (min-width: 840px) {
    flex: 0 0 67%;
    margin-top: 0;
  }
`;

export const Text = styled.div`
  font-size: 18px;
  width: 100%;
  line-height: 1.4em;
  margin-bottom: 0.5em;
  float: left;
  color: #202020;
  text-align: center;

  @media (min-width: 840px) {
    text-align: left;
    font-size: 1.4em;
    color: #fff;
  }
  @media (min-width: 1082px) {
    font-size: 1.15em;
  }
`;

export const NewsletterSignupForm = styled.form``;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  margin: 0 0 0.625rem;
  padding: 0 0.5rem 0 0.625rem;
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.625;
  color: #303030;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  float: left;
  clear: none;
  @media (min-width: 840px) {
    margin-left: ${({ isEmail }) => (isEmail ? "2%" : null)};
    width: ${({ isEmail }) => (isEmail ? "40%" : "30%")};
  }
`;

export const Close = styled.div`
  color: #ddd;
  padding: 0 0.5em;
  cursor: pointer;
  top: 4px;
  right: 2px;
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  display: none;
  @media (min-width: 840px) {
    display: block;
  }
`;
