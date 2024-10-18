import { Meta, StoryObj } from "@storybook/react";
import ImageCard from "@/components/ImageResultView/ImageCard/index";

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    image: {
      id: "L13_V009/008103",
      path: "L13/",
      name: "L13_V009/008103",
      time_in_seconds: 324120.0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {};
