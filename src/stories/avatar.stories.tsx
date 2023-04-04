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

const TeplateNotification = (args: AvatarProps) => (
    <>
        <Avatar 
            {...args} 
            src="https://avatars.githubusercontent.com/u/15609339"
            notify={true}
            variant="circular"
            value={5}
        />
        <div style={{marginTop: 10}}>
            <Avatar 
                {...args} 
                src="https://avatars.githubusercontent.com/u/15609339"
                notify={true}
                variant="square"
                value={50}
            />
        </div>
        <div style={{marginTop: 10}}>
            <Avatar 
                {...args} 
                src="https://avatars.githubusercontent.com/u/15609339"
                notify={true}
                variant="rounded"
                value={100}
            />
        </div>
    </>
);



export const Default = TeplateDefault.bind({});
export const notification = TeplateNotification.bind({});