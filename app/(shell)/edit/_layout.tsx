import {Tabs} from 'expo-router';

export default function EditLayout() {
  return (
    <Tabs initialRouteName='home' screenOptions={{headerShown: false }} />
  );
}
