import { Grid } from 'src/components/Grid/Grid';
import { Divider, DividerProps } from '../components/Divider/Divider';

const meta = {
    title: "Layout/Divider",
    component: Divider,
    tags: ["docsPage"],
};

export default meta;

const style = {
    text: {
        marginLeft: 5,
        marginRight: 5,
        color: '#2196f3',
        marginTop: -3
    }
}

const TemplateDefault = (args: any) => (
    <>
        <Divider {...args} />
    </>
);

const Text = (args: DividerProps) => (
    <>
        <Divider {...args} name="Divider" />
    </>
)

const Horizontal = (args: DividerProps) => (
    <Grid>
        <a style={style.text}>Home</a>
        <Divider {...args} horizontal={true} />
        <a style={style.text}>Edit</a>
        <Divider horizontal={true} />
        <a style={style.text}>Save</a>
    </Grid>
)

export const Default = TemplateDefault.bind({});
export const text = Text.bind({});
export const horizontal = Horizontal.bind({});