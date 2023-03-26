import { AvatarName, AvatarNameProps } from 'src/components/AvatarName/AvatarName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: "Data Display/AvatarName",
    component: AvatarName,
    tags: ["docsPage"],
    argTypes: {
        userName: {
            control: {type: "text"}
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;
  export const Primary: Story = {
    args: {
      userName: "José Pedro",
    },
  };

// const TemplateDefault = (args: AvatarNameProps) => (
//     <AvatarName {...args} />
// );

// export const Default = TemplateDefault.bind({});