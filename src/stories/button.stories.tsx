import { Button, ButtonProps } from "src/components/Button/Button";
import { Grid } from "src/components/Grid/Grid";
import { 
    FaTrash, 
    FaRegPaperPlane, 
    FaCog,
    FaExclamationTriangle,
    FaPrint,
    FaSearch,
    FaSpinner
} from "../../node_modules/react-icons/fa";

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
);

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
);

const TemplateStartButtonIcon = (args: ButtonProps) => (
    <>
        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    startIcon={<FaRegPaperPlane />}
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaTrash />}
                    color="red"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaCog />}
                    color="orange"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaExclamationTriangle />}
                    color="yellow"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaPrint />}
                    color="green"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSearch />}
                    color="cyan"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSpinner />}
                    color="violet"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    startIcon={<FaRegPaperPlane />}
                    variant="outlined"
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaTrash />}
                    color="red"
                    variant="outlined"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaCog />}
                    color="orange"
                    variant="outlined"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaExclamationTriangle />}
                    color="yellow"
                    variant="outlined"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaPrint />}
                    color="green"
                    variant="outlined"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSearch />}
                    color="cyan"
                    variant="outlined"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSpinner />}
                    color="violet"
                    variant="outlined"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    startIcon={<FaRegPaperPlane />}
                    variant="text"
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaTrash />}
                    color="red"
                    variant="text"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaCog />}
                    color="orange"
                    variant="text"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaExclamationTriangle />}
                    color="yellow"
                    variant="text"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaPrint />}
                    color="green"
                    variant="text"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSearch />}
                    color="cyan"
                    variant="text"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    startIcon={<FaSpinner />}
                    color="violet"
                    variant="text"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>
    </>
);

const TemplateEndButtonIcon = (args: ButtonProps) => (
    <>
        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    endIcon={<FaRegPaperPlane />}
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaTrash />}
                    color="red"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaCog />}
                    color="orange"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaExclamationTriangle />}
                    color="yellow"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaPrint />}
                    color="green"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSearch />}
                    color="cyan"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSpinner />}
                    color="violet"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    endIcon={<FaRegPaperPlane />}
                    variant="outlined"
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaTrash />}
                    color="red"
                    variant="outlined"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaCog />}
                    color="orange"
                    variant="outlined"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaExclamationTriangle />}
                    color="yellow"
                    variant="outlined"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaPrint />}
                    color="green"
                    variant="outlined"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSearch />}
                    color="cyan"
                    variant="outlined"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSpinner />}
                    color="violet"
                    variant="outlined"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>

        <Grid style={{marginBottom: 10}}>
            <Grid spacing={10}>
                <Button 
                    {...args}
                    endIcon={<FaRegPaperPlane />}
                    variant="text"
                >
                    Send
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaTrash />}
                    color="red"
                    variant="text"
                >
                    Delete
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaCog />}
                    color="orange"
                    variant="text"
                >
                    Config
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaExclamationTriangle />}
                    color="yellow"
                    variant="text"
                >
                    Attention
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaPrint />}
                    color="green"
                    variant="text"
                >
                    Print
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSearch />}
                    color="cyan"
                    variant="text"
                >
                    Search
                </Button>
                <Button 
                    {...args}
                    endIcon={<FaSpinner />}
                    color="violet"
                    variant="text"
                >
                    Spinner
                </Button>
            </Grid>
        </Grid>
    </>
);

export const Default = TemplateDefault.bind({});
export const variant = TemplateVariant.bind({});
export const size = TemplateSize.bind({});
export const disabled = TemplateDisabled.bind({});
export const color = TemplateColorButton.bind({});
export const startIcon = TemplateStartButtonIcon.bind({});
export const endIcon = TemplateEndButtonIcon.bind({});