import styled from "styled-components";

export const WeekDayRow = styled.div`
  display: flex;
  text-align: center;
  padding: 0.7em;
  border-bottom: 1px solid #f2f2f2;
  font-weight: 600;
`;

export const MonthDayRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;

  :last-child {
    border-bottom: none;
  }
`;
