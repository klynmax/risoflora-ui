import { AvatarName, AvatarNameProps } from 'src/components/AvatarName/AvatarName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: "Data display/AvatarName",
  component: AvatarName,
  tags: ["docsPage"],
  argTypes: {
    userName: {
      control: { type: "text" },
    }
  },
} satisfies Meta<typeof AvatarName>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    userName: 'José Pedro'
  },
};
