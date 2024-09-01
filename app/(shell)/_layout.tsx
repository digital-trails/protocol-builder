import { Drawer } from 'expo-router/drawer';
import { ProtocolProvider } from '@/components/protocol';

export default function ShellLayout() {
  return (
    <ProtocolProvider>
      <Drawer initialRouteName='(edit)'>
        <Drawer.Screen name="edit" options={{ title:'Edit', drawerLabel:'Edit' }} />
        <Drawer.Screen name="publish" options={{ title:'Publish', drawerLabel:'Publish' }} />
        <Drawer.Screen name="save" options={{ title:'Save', drawerLabel:'Save' }} />
        <Drawer.Screen name="load" options={{ title:'Load', drawerLabel:'Load' }} />
      </Drawer>
    </ProtocolProvider>
  );
}
