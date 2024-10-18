import NavBar from "@/components/NavBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
