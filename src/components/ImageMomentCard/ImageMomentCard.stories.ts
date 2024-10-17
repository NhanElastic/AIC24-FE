import { Meta, StoryObj } from "@storybook/react";
import ImageMomentCard from "@/components/ImageMomentCard/index";

const meta: Meta<typeof ImageMomentCard> = {
  component: ImageMomentCard,
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

type Story = StoryObj<typeof ImageMomentCard>;

export const Default: Story = {};
