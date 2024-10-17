import SearchBar from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
