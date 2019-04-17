import { Grommet, Button } from 'grommet';
import { dxc } from "grommet-theme-dxc";

const C = () => <Button label='test' />;

export const B = () => (
  <Grommet theme={dxc}>
    <C />
  </Grommet>
);
