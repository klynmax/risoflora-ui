import { Avatar, AvatarProps } from "src/components/Avatar/Avatar";
import { Grid } from "src/components/Grid/Grid";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["docsPage"],
};

export default meta;

const avatar = [
  {
    color: "#2196f3",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#f44336",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#4caf50",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#ffb300",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#a6a6a6",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#db8000",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#00BCD4",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
  {
    color: "#673AB7",
    avatar: "https://avatars.githubusercontent.com/u/15609339",
  },
];

const TeplateDefault = (args: AvatarProps) => (
  <Avatar {...args} src="https://avatars.githubusercontent.com/u/15609339" />
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
    <div style={{ marginTop: 10 }}>
      <Avatar
        {...args}
        src="https://avatars.githubusercontent.com/u/15609339"
        notify={true}
        variant="square"
        value={50}
      />
    </div>
    <div style={{ marginTop: 10 }}>
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

const TeplateBorder = (args: AvatarProps) => (
  <>
    <Grid spacing={20}>
      <Avatar
        {...args}
        src="https://avatars.githubusercontent.com/u/15609339"
        variant="circular"
        border={true}
      />
      <Avatar
        {...args}
        src="https://avatars.githubusercontent.com/u/15609339"
        variant="square"
        border={true}
      />
      <Avatar
        {...args}
        src="https://avatars.githubusercontent.com/u/15609339"
        variant="rounded"
        border={true}
      />
    </Grid>
  </>
);

const TeplateBorderColor = (args: AvatarProps) => (
  <>
    <Grid spacing={20}>
      {avatar.map((res) => (
        <Avatar
          {...args}
          src={res.avatar}
          variant="circular"
          border={true}
          style={{ borderColor: `${res.color}` }}
        />
      ))}
    </Grid>

    <div style={{ marginTop: 10 }}>
      <Grid spacing={20}>
        {avatar.map((res) => (
          <Avatar
            {...args}
            src={res.avatar}
            variant="rounded"
            border={true}
            style={{ borderColor: `${res.color}` }}
          />
        ))}
      </Grid>
    </div>

    <div style={{ marginTop: 10 }}>
      <Grid spacing={20}>
        {avatar.map((res) => (
          <Avatar
            {...args}
            src={res.avatar}
            variant="square"
            border={true}
            style={{ borderColor: `${res.color}` }}
          />
        ))}
      </Grid>
    </div>
  </>
);

export const Default = TeplateDefault.bind({});
export const notification = TeplateNotification.bind({});
export const border = TeplateBorder.bind({});
export const borderColor = TeplateBorderColor.bind({});
