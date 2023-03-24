import { Grid } from '../components/Grid/Grid';
import Item from './components/Item/item';
import ResponsiveItem from './components/Item/responsiveItem';
import { Divider } from './../components/Divider/Divider';

const meta = {
    title: "Layout/Grid",
    component: Grid,
    tags: ["docsPage"],
    argTypes: {
        spacing: {
            control: {type: "number"}
        }
    },
}

export default meta;

/**
 * TODO: Criar todos os componentes com grid e excluir o componente Item 
 */

const array = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const style = {
    root: {
        height: 30,
        width: 10,
        backgroundColor: '#2196f3',
        border: '1px solid',
        color: '#ffffff',
        alignItems: 'center'
    },
    line: {
        marginTop: 10, 
        marginBottom: 10,
        width: '50%',
        margin: '50px'
    },
    gridColumn: {
        height: 30,
        width: '100%',
        backgroundColor: '#2196f3',
        border: '1px solid',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignItems: {
        height: 30,
        width: 500,
        backgroundColor: '#2196f3',
        border: '1px solid',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const TemplateDefault = (args: any) => (
   <>
    <Grid {...args}>
        {
            array.map(item => (
                <ResponsiveItem name={item} />
            ))
        }
    </Grid>
   </> 
)

const Template = (args: any) => (
    <>
    <Grid {...args}>
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
        <Item name='xs=2' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
        <Item name='xs=4' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=8' />
        <Item name='xs=8' />
        <Item name='xs=8' />
    </Grid>
    <Grid {...args}>
        <Item name='xs=12' />
        <Item name='xs=12' />
    </Grid>
    </>
)

const TemplateJustify = (args: any) => (
    <>
        <Divider name="justify='flex-start'" />
        <Grid {...args}>
            <Grid lg={12} justify="flex-start">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-start</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-start</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-start</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-start</Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Divider name="justify='center'" />

        <Grid {...args}>
            <Grid lg={12} justify="center">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="center</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="center</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="center</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="center</Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Divider name="justify='flex-end'" />

        <Grid {...args}>
            <Grid lg={12} justify="flex-end">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
            </Grid>
        </Grid>

        <Divider name="justify='space-between'" />

        <Grid {...args}>
            <Grid lg={12} justify="space-between">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
            </Grid>
        </Grid>

        <Divider name="justify='space-around'" />

        <Grid {...args}>
            <Grid lg={12} justify="space-around">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
            </Grid>
        </Grid>

        <Divider name="justify='space-evenly'" />

        <Grid {...args}>
            <Grid lg={12} justify="space-evenly">
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
                <Grid lg={2} style={style.root}>
                    <Grid justify='center'>justify="flex-end</Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
)

const TemplateFlex = (args: any) => (
    <>
        <Divider name="flexDirection='row'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="row">
                {
                    array.map(item => (
                        <ResponsiveItem name={item} />
                    ))
                }
            </Grid>
        </Grid>

        <Divider name="flexDirection='row-reverse'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="row-reverse">
                {
                    array.map(item => (
                        <ResponsiveItem name={item} />
                    ))
                }
            </Grid>
        </Grid>

        <Divider name="flexDirection='column'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="column">
                {
                    array.map(item => (
                        <Grid style={style.gridColumn}>{item}</Grid>
                    ))
                }
            </Grid>
        </Grid>

        <Divider name="flexDirection='column-reverse'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="column-reverse">
                {
                    array.map(item => (
                        <Grid style={style.gridColumn}>{item}</Grid>
                    ))
                }
            </Grid>
        </Grid>
    </>
)

const TemplateAlignItems = (args: any) => (
    <>
        <Divider name="alignItems='start'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="column" alignItems="start">
                {
                    array.map(item => (
                        <Grid style={style.alignItems}>{item}</Grid>
                    ))
                }
            </Grid>
        </Grid>

        <Divider name="alignItems='center'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="column" alignItems="center">
                {
                    array.map(item => (
                        <Grid style={style.alignItems}>{item}</Grid>
                    ))
                }
            </Grid>
        </Grid>

        <Divider name="alignItems='end'" />
        <Grid {...args}>
            <Grid lg={12} flexDirection="column" alignItems="end">
                {
                    array.map(item => (
                        <Grid style={style.alignItems}>{item}</Grid>
                    ))
                }
            </Grid>
        </Grid>
    </>
)

export const Default = TemplateDefault.bind({});
export const responsive = Template.bind({});
export const justify = TemplateJustify.bind({});
export const flexDirection = TemplateFlex.bind({});
export const alignItems = TemplateAlignItems.bind({});
