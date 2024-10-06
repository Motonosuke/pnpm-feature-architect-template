import type { Meta, StoryObj } from "@storybook/react";

import { MainHeader } from "@/components/Header/MainHeader";

const meta = {
  title: "Header/MainHeader",
  component: MainHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof MainHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeaderc: Story = {};
