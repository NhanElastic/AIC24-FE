import NavBar from "@/components/NavBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      options: ["md", "lg", "xl", "2xl"],
      control: { type: "radio" },
      description:
        "The width of the navbar, based on Tailwind CSS breakpoints.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const FullWidth: Story = {};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Xl: Story = {
  args: {
    size: "xl",
  },
};

export const Xxl: Story = {
  args: {
    size: "2xl",
  },
};
