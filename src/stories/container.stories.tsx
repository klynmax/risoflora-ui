import { Container, ContainerProps } from "src/components/Container/Container";
import { Grid } from "src/components/Grid/Grid";

const meta = {
    title: "Layout/Container",
    component: Container,
    tags: ["docsPage"],
};

export default meta;

const TemplateDefault = (args: ContainerProps) => (
    <Container {...args}>
        <Grid 
            style={{
                backgroundColor: '#cfe8fc',
                height: '100vh'
            }} 
        >
        </Grid>
    </Container>
);

export const Default = TemplateDefault.bind({});