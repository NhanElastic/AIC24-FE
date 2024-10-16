import { Meta, StoryObj } from "@storybook/react";
import SearchImage from "@/components/SearchImage/index";

const meta: Meta<typeof SearchImage> = {
  component: SearchImage,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SearchImage>;

export const Default: Story = {};
