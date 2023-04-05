import {
  AvatarGroup,
  AvatarGroupProps,
} from "src/components/AvatarGroup/AvatarGroup";

const meta = {
  title: "Data Display/Avatar Group",
  component: AvatarGroup,
  tags: ["docsPage"],
};

export default meta;

const users = [
  "https://avatars.githubusercontent.com/u/12592949",
  "https://avatars.githubusercontent.com/u/8225666",
  "https://avatars.githubusercontent.com/u/15609339",
  "https://avatars.githubusercontent.com/u/14308293",
  "https://avatars.githubusercontent.com/u/1203827",
  "https://avatars.githubusercontent.com/u/9625224",
  "https://avatars.githubusercontent.com/u/15884443",
  "https://avatars.githubusercontent.com/u/10924138",
  "https://avatars.githubusercontent.com/u/2797600",
  "https://avatars.githubusercontent.com/u/23637144",
];

const TeplateDefault = (args: AvatarGroupProps) => (
  <AvatarGroup {...args} src={users} />
);

const TemplateLimited = (args: AvatarGroupProps) => (
  <>
    <AvatarGroup {...args} src={users} group={true} />
    <div style={{ marginTop: 10 }}>
      <AvatarGroup {...args} src={users} group={true} variant="rounded" />
    </div>
    <div style={{ marginTop: 10 }}>
      <AvatarGroup {...args} src={users} group={true} variant="square" />
    </div>
  </>
);

export const Default = TeplateDefault.bind({});
export const limited = TemplateLimited.bind({});
