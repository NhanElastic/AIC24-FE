import { Meta, StoryObj } from "@storybook/react";
import PaginationBar from "@/components/ImageResultView/PaginationBar/index";

const meta: Meta<typeof PaginationBar> = {
  component: PaginationBar,
  args: {
    currentPage: 1,
    totalPage: 1,
    onPageChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof PaginationBar>;

export const Default: Story = {};
