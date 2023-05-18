import Grid from '../Grid';
import Button from '../../Button/Button'

export default (
  <Grid uxpId="grid-1" autoFlow='column' placeContent='space-between'>
    <Grid.GridItem uxpId="grid-item-1"><Button uxpId='button-1' label='Button 1'/></Grid.GridItem>
    <Grid.GridItem uxpId="grid-item-2"><Button uxpId='button-2' label='Button 2'/></Grid.GridItem>
    <Grid.GridItem uxpId="grid-item-3"><Button uxpId='button-3' label='Button 3'/></Grid.GridItem>
  </Grid>
);
