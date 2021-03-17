import React from "react";
import Text from ".";
import { select, text } from "@storybook/addon-knobs";

export default {
  title: "core-elements/Text",
  component: Text,
};

export const BaseText = () => (
  <Text
    type={select("type", ["heading28", "heading30", "heading32"], "heading28")}
    color={text("color", "#444")}
  >
    {text("내용", "본문내용")}
  </Text>
);
