import type { Meta, StoryObj, Story } from '@storybook/react';
import { Grid, GridProps } from '../components/Grid/Grid';
import Item from './components/Item/item';
import ResponsiveItem from './components/Item/responsiveItem';

const meta = {
    title: "Layout/Grid",
    component: Grid,
    tags: ["docsPage"],
    argTypes: {
        spacing: {
            control: {type: "number"}
        }
    },
  }

  export default meta;
  // type Story = StoryObj<typeof meta>;
//   export const Primary: Story = {
//     args: {
//         spacing: 1,
//     },
//   };

const Template = (args: any) => (
    <>
    <Grid {...args}>
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=8' />
        <Item name='xs=8' />
        <Item name='xs=8' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=12' />
        <Item name='xs=12' />
    </Grid>
    </>
)

const TemplateResponsive = (args: any) => (
    <>
    <Grid {...args}>
        <ResponsiveItem name='xs=4' />
        <ResponsiveItem name='xs=4' />
        <ResponsiveItem name='xs=4' />
        <ResponsiveItem name='xs=4' />
    </Grid>
    </>
)

export const Default = Template.bind({})
export const Responsive = TemplateResponsive.bind({})
