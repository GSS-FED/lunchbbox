import React from "react";
import { ReactComponent as MyCheckbox } from "../../static/svg/checkbox.svg";
import styled from "styled-components/macro";

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  margin-right: 10px;
  display: inline-block;
  position: relative;
`;
const CheckboxWithAnimation = styled(MyCheckbox)`
  position: absolute;
  left: calc(50% - 16px);
  bottom: 26px;
  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.25, 0.1, 0.47, 1.67);
  opacity: ${props => (props.ischecked ? 1 : 0)};
  transform: ${props => (props.ischecked ? "scale(1)" : "scale(0)")};
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  object-fit: cover;
  opacity: ${props => (props.ischecked ? 1 : 0.5)};
  transition: all 0.3s;
  border: solid 3px #fece2e;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const AvatarCheckbox = props => (
  <Label>
    <Avatar
      ischecked={props.ischecked}
      alt={props.member.name}
      src={props.member.avatar[0].thumbnails.large.url}
    />
    <TextCenter>
      <input
        style={{ display: "none" }}
        type="checkbox"
        onChange={props.handleChange}
        checked={props.ischecked}
      />
      {props.member.name}
    </TextCenter>
    <CheckboxWithAnimation ischecked={props.ischecked ? 1 : 0} />
  </Label>
);

export default AvatarCheckbox;
