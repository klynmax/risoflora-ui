import { Grid } from "src/components/Grid/Grid";
import { Typography, TypographyProps } from "src/components/Typography/Typography";

const meta = {
    title: "Data Display/Typography",
    component: Typography,
    tags: ["docsPage"]
};

export default meta;

const TemplateDefault = (args: TypographyProps) => (
    <Typography {...args}>Example Typography</Typography>
);

const TemplateTypography = (args: TypographyProps) => (
    <>
        <Grid>
            <Typography {...args} variant="h1">H1 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="h2">H2 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="h3">H3 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="h4">H4 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="h5">H5 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="h6">H6 - Example</Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="subtitle1">
                Subtitle1 example: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="subtitle2">
                Subtitle2 example: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="body1">
                Body1 example: Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? 
                Eum quasi quidem quibusdam.
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="body2">
                Body1 example: Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? 
                Eum quasi quidem quibusdam.
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="button">
                Button Text
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="caption">
                Caption Text
            </Typography>
        </Grid>
        <Grid>
            <Typography {...args} variant="overline">
                Overline Text
            </Typography>
        </Grid>
    </>
)

export const Default = TemplateDefault.bind({});
export const all = TemplateTypography.bind({});