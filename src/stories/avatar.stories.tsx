import { Avatar, AvatarProps } from 'src/components/Avatar/Avatar';
import { Grid } from 'src/components/Grid/Grid';

const meta = {
    title: "Data Display/Avatar",
    component: Avatar,
    tags: ["docsPage"],
};

export default meta;

const users = [
    'https://avatars.githubusercontent.com/u/12592949', 
    'https://avatars.githubusercontent.com/u/8225666', 
    'https://avatars.githubusercontent.com/u/15609339', 
    'https://avatars.githubusercontent.com/u/14308293', 
    'https://avatars.githubusercontent.com/u/1203827', 
    'https://avatars.githubusercontent.com/u/9625224', 
    'https://avatars.githubusercontent.com/u/15884443',
    'https://avatars.githubusercontent.com/u/10924138', 
    'https://avatars.githubusercontent.com/u/2797600',
    'https://avatars.githubusercontent.com/u/23637144'
];

const TeplateDefault = (args: AvatarProps) => (
    <Avatar 
        {...args} 
        src="https://avatars.githubusercontent.com/u/15609339"
    />
);

const TemplateNotify = (args: AvatarProps) => (
    <Grid spacing={30}>
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
            notify={true}
            value={100}
        />
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/10924138"
            variant="rounded"
            notify={true}
            value={20}
        />
       <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/9625224"
            variant="square"
            notify={true}
            value={8}
        />
    </Grid>
);

const TemplateSize = (args: AvatarProps) => (
    <Grid spacing={30}>
         <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
            size="lg"
        />
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
        />
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
            size="sm"
        />
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
            size="xs"
        />
    </Grid>
);

const TemplateVariant = (args: AvatarProps) => (
    <Grid spacing={30}>
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/15609339"
        />
        <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/10924138"
            variant="rounded"
        />
       <Avatar 
            {...args}
            src="https://avatars.githubusercontent.com/u/9625224"
            variant="square"
        />
    </Grid> 
)

const TemplateGroup = (args: AvatarProps) => (
    <>
        <Grid>
            <Avatar 
                {...args}
                src={users}
                group="limited"
            />
        </Grid>
        <Grid>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
            />
        </Grid>

        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                variant="rounded"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
                variant="rounded"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                variant="rounded"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
                variant="rounded"
            />
        </Grid>

        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                variant="square"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
                variant="square"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                variant="square"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
                variant="square"
            />
        </Grid>
        {/* <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                variant="rounded"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                variant="square"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
                variant="rounded"
            />
        </Grid>
        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="limited"
                spacing={true}
                variant="square"
            />
        </Grid>

        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
            />
        </Grid>

        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
                variant="rounded"
            />
        </Grid>

        <Grid style={{marginTop: 10}}>
            <Avatar 
                {...args}
                src={users}
                group="all"
                spacing={true}
                variant="square"
            />
        </Grid> */}
    </>
)

export const Default = TeplateDefault.bind({});
export const notify = TemplateNotify.bind({});
export const size = TemplateSize.bind({});
export const variant = TemplateVariant.bind({});
export const group = TemplateGroup.bind({});