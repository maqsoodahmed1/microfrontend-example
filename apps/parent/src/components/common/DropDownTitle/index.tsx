import React from "react";
import { Flex, Typography } from "antd";
import './dropDownTitle.scss';

interface DropDownTitleProps {
  label: string;
  value: string;
}

const DropDownTitle: React.FC<DropDownTitleProps> = ({ label, value }) => (
  <Flex vertical className="container dropdowntitle">
    <Typography.Text className="label">{label}</Typography.Text>
    <Typography.Text className="value">{value}</Typography.Text>
  </Flex>
);

export default React.memo(DropDownTitle);
