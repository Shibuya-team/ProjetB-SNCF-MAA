import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => (props.big ? 100 : 40)}%;
  height: 4em;
  outline: none;
  padding: 0 2em;
  border-radius: 4px;
  margin: 20px;
  border-style:none;
  border-color:none;
  
  
  }
  &.purple {
    background-color: ${props => (props.onClick ? '#5353A2' : '#FF8B66')}
    & span {
      font-size:1.5em;
      color: white;

    }
  }

  &.gold {
    background-color: #FF8B66;
    & span {
      font-size:1.5em;
      color: white;
    }
  }
  &.purpleoutline {
    border: 2px solid #5353A2;
    & span {
      font-size:1.5em;
      color: #5353A2;
    }
  }
  &.goldoutline {
    border: 2px solid #FF8B66;
    & span {
      font-size:1.5em;
      color: #FF8B66;
    }
  }
`;

const ButtonStyle = props => (
  <StyledButton
    big={props.big}
    className={props.theme}
    onClick={props.onClick}
    style={props.style}>
    {props.label && <span>{props.label}</span>}
  </StyledButton>
);

ButtonStyle.defaultProps = {
  big: false,
  label: undefined,
  onClick: () => {},
  style: {},
  theme: 'purple',
};

export default ButtonStyle;