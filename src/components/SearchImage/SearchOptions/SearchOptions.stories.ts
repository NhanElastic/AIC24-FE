import { Meta, StoryObj } from "@storybook/react";
import SearchOptions from ".";

const meta: Meta<typeof SearchOptions> = {
  component: SearchOptions,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SearchOptions>;

export const Default: Story = {};
