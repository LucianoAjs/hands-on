import { GrandChildComponent } from './GrandChildComponent';

export const ChildComponent = ({ color }) => {
  return <GrandChildComponent color={color} />;
};
