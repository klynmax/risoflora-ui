import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from 'src/components/Card/Card';
import { CardMedia, CardMediaProps } from 'src/components/Card/CardMedia/CardMedia';
import { CardContent, CardContentProps } from 'src/components/Card/CardContent/CardContent';
import { CardAction, CardActionProps } from 'src/components/Card/CardAction/CardAction';
import { CardHeader, CardHeaderProps } from 'src/components/Card/CardHeader/CardHeader';

import { Typography } from 'src/components/Typography/Typography';
import { Button } from 'src/components/Button/Button';
import { AvatarName } from 'src/components/AvatarName/AvatarName';
import { Avatar, AvatarProps } from 'src/components/Avatar/Avatar';
import { Grid } from 'src/components/Grid/Grid';

// const meta = {
//     title: "Surfaces/Card",
//     component: Card,
//     tags: ["docsPage"],
//     argTypes: {
//       title: {
//         control: { type: "text" },
//       },
//       description: {
//         control: { type: "text" },
//       },
//     },
//   } satisfies Meta<typeof Card>;
//   export default meta;
//   type Story = StoryObj<typeof meta>;
//   export const Primary: Story = {
//     args: {
//       title: "Card Title",
//       description: "This is a card - Example",
//     },
//   };

const meta = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["docsPage"]
};

export default meta;

const TemplateDefault = (args: CardProps) => (
  <Card {...args}>
    <CardContent>
      <Typography variant="h5">
        Simple card
      </Typography>
      <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </CardContent>
  </Card>
)

const TemplateMedia = (
  args: CardProps, 
  cardMediaArgs: CardMediaProps,
  cardContentArgs: CardContentProps,
  cardActionProps: CardActionProps
) => (
  <Card {...args}>
    <CardMedia
      {...cardMediaArgs}
      imageTop={true}
      src="https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_640.jpg"
    />
    <CardContent {...cardContentArgs}>
      <Typography variant='h6'>Example Title</Typography>
      <Typography variant='body2' style={{color: '#7a7a7a'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quos blanditiis tenetur. Lorem ipsum dolor sit amet.
      </Typography>
    </CardContent>
    <CardAction {...cardActionProps}>
      <Button variant="text" size="small">Example</Button>
      <Button variant="text" size="small">Cancel</Button>
      </CardAction>
  </Card>
);

const TemplatePost = (
  args: CardProps, 
  argsHead: CardHeaderProps,
  cardMediaArgs: CardMediaProps,
  argsAvatar: AvatarProps
) => (
  <Card {...args}>
    <CardHeader {...argsHead} 
      avatar={
        <Avatar 
          {...argsAvatar}
          src="https://mui.com/static/images/avatar/3.jpg" 
          variant="circular"
        />
      }
      title="Cindy Baker"
      subheader='Montreal'
    />
    <CardMedia
      {...cardMediaArgs}
      // src="https://cdn.pixabay.com/photo/2023/03/12/07/08/mountains-7845932__340.jpg"
      src="https://cdn.pixabay.com/photo/2021/02/28/22/24/chile-6058279_640.jpg"
    />
    <CardContent>
      <Typography variant="body2" style={{color: '#a6a6a6'}}>
        Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </CardContent>
  </Card>
);

const TemplateColor = (args: CardProps) => (
  <>
    <Grid spacing={20} >
      <Card {...args} color="blue">
        <CardContent>
          <Typography variant="h5">
            Simple card
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
      </Card>

      <Card {...args} color="red">
        <CardContent>
          <Typography variant="h5">
            Simple card
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
      </Card>

      <Card {...args} color="orange">
        <CardContent>
          <Typography variant="h5">
            Simple card
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
      </Card>

      <Card {...args} color="yellow">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>

        <Card {...args} color="green">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>

        <Card {...args} color="cyan">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            </Typography>
          </CardContent>
        </Card>

        <Card {...args} color="violet">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>
    </Grid>

    {/* <Grid style={{marginTop: 20}}>
      <Grid spacing={20}>
        <Card {...args} color="yellow">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>

        <Card {...args} color="green">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>

        <Card {...args} color="cyan">
          <CardContent>
            <Typography variant="h5">
              Simple card
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid> */}
  </>
)

export const simpleCard = TemplateDefault.bind({});
export const Media = TemplateMedia.bind({});
export const post = TemplatePost.bind({});
export const color = TemplateColor.bind({});