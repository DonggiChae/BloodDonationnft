import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const SelectWrapper = styled.div``;
const Select = styled.select`
  display: block;
  width: 90%;
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  line-height: 1.5;
  border: 1.5px solid rgba(0, 0, 0, 1);
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: 600;
`;

export default function SelectionInput({
  name,
  firstOption,
  selectList,
  onChange,
  selected,
}) {
  return (
    <Wrapper>
      <SelectWrapper>
        <Select name={name} onChange={onChange}>
          <option>{firstOption}:</option>
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
