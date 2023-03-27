import { Button, ButtonProps } from "src/components/Button/Button";
import { Grid } from "src/components/Grid/Grid";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: "Inputs/Button",
    component: Button,
    tags: ["docsPage"]
};

export default meta;
  

const TemplateDefault = (args: ButtonProps) => (
    <Button 
        {...args}
    >
        Container
    </Button>
);

const TemplateVariant = (args: ButtonProps) => (
    <Grid spacing={10}>
        <Button 
            {...args}
            variant="contained"
        >
            Container
        </Button>
        <Button 
            {...args}
            variant="outlined"
        >
            Outlined
        </Button>
        <Button 
            {...args}
            variant="text"
        >
            Text
        </Button>
    </Grid>
);

const TemplateSize = (args: ButtonProps) => (
    <>
        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    variant="contained"
                    size="small"
                >
                    Small
                </Button>
                <Button 
                    {...args}
                    variant="contained"
                    size="medium"
                >
                    Medium
                </Button>
                <Button 
                    {...args}
                    variant="contained"
                    size="large"
                >
                    Large
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    variant="outlined"
                    size="small"
                >
                    Small
                </Button>
                <Button 
                    {...args}
                    variant="outlined"
                    size="medium"
                >
                    Medium
                </Button>
                <Button 
                    {...args}
                    variant="outlined"
                    size="large"
                >
                    Large
                </Button>
            </Grid>
        </Grid>

        <Grid>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    variant="text"
                    size="small"
                >
                    Small
                </Button>
                <Button 
                    {...args}
                    variant="text"
                    size="medium"
                >
                    Medium
                </Button>
                <Button 
                    {...args}
                    variant="text"
                    size="large"
                >
                    Large
                </Button>
            </Grid>
        </Grid>
    </>
    
);

const TemplateDisabled = (args: ButtonProps) => (
    <Grid spacing={10}>
        <Button {...args} variant="contained" disabled>
            Contained
        </Button>
        <Button {...args} variant="outlined" disabled>
            Outlined
        </Button>
        <Button {...args} variant="text" disabled>
            Text
        </Button>
    </Grid>
)

const TemplateColorButton = (args: ButtonProps) => (
    <>
        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button
                    {...args}
                    variant="contained"
                    color="blue"
                >
                    Blue
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="red"
                >
                    Red
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="orange"
                >
                    Orange
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="yellow"
                >
                    Yellow
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="green"
                >
                    Green
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="cyan"
                >
                    Cyan
                </Button>
                <Button
                    {...args}
                    variant="contained"
                    color="violet"
                >
                    Violet
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button
                    {...args}
                    variant="outlined"
                    color="blue"
                >
                    Blue
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="red"
                >
                    Red
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="orange"
                >
                    Orange
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="yellow"
                >
                    Yellow
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="green"
                >
                    Green
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="cyan"
                >
                    Cyan
                </Button>
                <Button
                    {...args}
                    variant="outlined"
                    color="violet"
                >
                    Violet
                </Button>
            </Grid>
        </Grid>

        <Grid>
            <Grid spacing={10}>
                <Button
                    {...args}
                    variant="text"
                    color="blue"
                >
                    Blue
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="red"
                >
                    Red
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="orange"
                >
                    Orange
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="yellow"
                >
                    Yellow
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="green"
                >
                    Green
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="cyan"
                >
                    Cyan
                </Button>
                <Button
                    {...args}
                    variant="text"
                    color="violet"
                >
                    Violet
                </Button>
            </Grid>
        </Grid>
    </>
)

export const Default = TemplateDefault.bind({});
export const variant = TemplateVariant.bind({});
export const size = TemplateSize.bind({});
export const disabled = TemplateDisabled.bind({});
export const color = TemplateColorButton.bind({});