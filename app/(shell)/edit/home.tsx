import { StyleSheet, View, ScrollView } from 'react-native';
import { PhoneSplit } from '@/components/split'
import { Input } from '@/components/input'
import { useProtocolContext } from '@/components/protocol';

export default function EditHomeScreen() {

    const {state:{home}, dispatch} = useProtocolContext();

    function homeDispatch(home:any, action:any) {
      home = {...home}
      
      if (action.type == 'title') {
        home.title = action.value
      }
        
      if (action.type == 'flavor0') {
        home.flavors[0] = action.value
      }
        
      if (action.type == 'flavor1') {
        home.flavors[1] = action.value
      }
    
      if (action.type == 'sessions') {
        home.sessions = !home.sessions
      }

      if (action.type == "label0") {
        home.buttons[0][0] = action.value
      }
      if (action.type=="label1"){
        home.buttons[1][0]=action.value
      }
      if (action.type =="label2"){
        home.buttons[2][0]=action.value
      }
      if (action.type=="label3"){
        home.buttons[3][0]=action.value
      }
      if (action.type=="icon0"){
        home.buttons[0][1]=action.value
      }
      if (action.type=="icon1"){
        home.buttons[1][1]=action.value
      }
      if (action.type=="icon2"){
        home.buttons[2][1]=action.value
      }
      if (action.type=="icon3"){
        home.buttons[3][1]=action.value
      }
      
    
      dispatch({type:'home', value:home})
    }

    return (
      <PhoneSplit state={home} screen='home'>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems:'flex-end' }}>
          <View style={styles.row}>
            <View style={styles.input} >
            <Input label='Title'   type='text' value={home.title}      onChangeText={(text:string) => homeDispatch(home,{type:'title'  , value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Flavor1' type='text' value={home.flavors[0]} onChangeText={(text:string) => homeDispatch(home,{type:'flavor0', value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Flavor2' type='text' value={home.flavors[1]} onChangeText={(text:string) => homeDispatch(home,{type:'flavor1', value:text})} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.input}>
              <Input label='Sessions' type='switch' onValueChange={() => homeDispatch(home,{type:'sessions'})} value={home.sessions} />
            </View>
            <View style={styles.input} />
            <View style={styles.input} />
          </View>
          <View style={styles.row}>
            <View style={styles.input} >
            <Input label='Label' type='text' value={home.buttons[0][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label0', value:text})} />
            <Input label=''      type='text' value={home.buttons[1][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label1'  , value:text})} />
            <Input label=''      type='text' value={home.buttons[2][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label2'  , value:text})} />
            <Input label=''      type='text' value={home.buttons[3][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label3'  , value:text})} />
            </View>
            <View style={styles.input}> 
            <Input label='Icon'  type='text' value={home.buttons[0][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon0', value:text})} />
            <Input label=''      type='text' value={home.buttons[1][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon1'  , value:text})} />
            <Input label=''      type='text' value={home.buttons[2][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon2'  , value:text})} />
            <Input label=''      type='text' value={home.buttons[3][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon3'  , value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Dest' type='text' onChangeText={(text:string) => dispatch({type:'flavor1', value:text})} />
            <Input label=''     type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''     type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''     type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            </View>
          </View>
          </ScrollView>
      </PhoneSplit>
    );
  }
const styles = StyleSheet.create({
    col: {
        justifyContent: 'center',
    },

    row: {
      flexDirection:'row',
      gap:10,
      justifyContent:'center',
      maxWidth: 600,
      width:"95%",
    },
    input: {
      width:"30%",
    },
});