import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.div``;
const SelectWrapper = styled.div``;
const Select = styled.select``;

export default function SelectionInput({ selectList, onChange, selected }) {
  return (
    <Wrapper>
      <Label>Select in React</Label>
      <SelectWrapper>
        <Select onChange={onChange}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>
        {/* <hr />
        <p>
          Selected: <b>{Selected}</b>
        </p> */}
      </SelectWrapper>
    </Wrapper>
  );
}
