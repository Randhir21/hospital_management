import { useState } from "react";
import styled from "styled-components";

const Test = () => {
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const [colors, setColors] = useState(colorArray);

  const [inputData, setInputData] = useState("");

  const handleSearch = (val) => {
    setInputData(val.target.value);
    const newArr = colorArray.filter((color) => {
      return color.includes(val.target.value.toUpperCase());
    });
    setColors(newArr);
  };

  return (
    <Container>
      <SearchArea>
        <input
          type="text"
          value={inputData}
          onChange={handleSearch}
          placeholder="Enter the color you want to search"
        />
      </SearchArea>
      <ColorBoxes>
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            
          >
            {color}
          </ColorBox>
        ))}
      </ColorBoxes>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 80%;
  margin: 16px auto;
  text-align: center;
`;

const SearchArea = styled.div`
  margin-bottom: 16px;
  input {
    padding: 8px;
    width: 300px;
  }
`;

const ColorBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColorBox = styled.div`
  height: 100px;
  flex: 0 1 100px;
  padding: 6px;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
