import { Meta, StoryObj } from "@storybook/react";
import VideoThumbnailCard from "@/components/VideoThumbnailCard/index";

const meta: Meta<typeof VideoThumbnailCard> = {
  component: VideoThumbnailCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Title of the image",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Description of the image",
    },
    thumbnailUrl: {
      control: {
        type: "text",
      },
      description: "URL of the image",
    },
  },
  args: {
    title: "Image Name",
    description: "Image Description",
    thumbnailUrl: "https://picsum.photos/300/200",
  },
};

export default meta;

type Story = StoryObj<typeof VideoThumbnailCard>;

export const Default: Story = {};
