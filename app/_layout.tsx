import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import {Drawer} from 'expo-router/drawer'

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <Drawer>
    </Drawer>
  );
}
