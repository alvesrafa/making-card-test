import styled from "styled-components";

export const ConfigMenuWrapper = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: #424242;
  color: #f5f5f5;
  padding: 15px;

  .title {
    margin-bottom: 20px;
  }
  .props {
    display: flex;
    flex-direction: column;
  }
  .props .prop {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: justify;
    margin-top: 8px;
  }
  .props .prop .input-block input {
    border: 0;
    border-radius: 4px;
    height: 35px;
    padding: 5px;
    width: 70px;
    line-height: 40px;
    font-size: 15px;
    margin-right: 5px;
  }

  .prop .input-block {
    margin: 7px;
    display: flex;
    flex-direction: column;
  }
  input[type="range"].props .prop .input-block input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 7.3px 0;
  }
  .props .prop .input-block input[type="range"]:focus {
    outline: none;
  }
  .props .prop .input-block input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: rgba(48, 113, 169, 0.78);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .props .prop .input-block input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }

  .props .prop .input-block input[type="range"] {
    width: 100%;
  }
`;
