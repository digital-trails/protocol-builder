import { useReducer } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {PhoneSplit} from '@/components/split'
import {Input} from '@/components/input'

export default function EditHomeScreen() {

    let defaultState = {
        "title": "Main Title",
        "flavors": ["flavor1",""],
        "sessions": false,
        "buttons": [
            ["button1", "", ""],
            ["button2", "", ""],
            ["button3", "", ""],
            ["button4", "", ""]
        ]
    }
    const [state, dispatch] = useReducer(homeReducer, defaultState);

    return (
      <PhoneSplit state={state}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems:'center' }}>
          <View style={styles.row}>
            <View style={styles.input} >
            <Input label='Title'   type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Flavor1' type='text' onChangeText={(text:string) => dispatch({type:'flavor0', value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Flavor2' type='text' onChangeText={(text:string) => dispatch({type:'flavor1', value:text})} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.input} />
            <View style={styles.input} />
            <View style={styles.input}>
            <Input label='Sessions' type='switch' onValueChange={() => dispatch({type:'sessions'})} value={state.sessions} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.input} >
            <Input label='Label'   type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Icon' type='text' onChangeText={(text:string) => dispatch({type:'flavor0', value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            </View>
            <View style={styles.input} >
            <Input label='Dest' type='text' onChangeText={(text:string) => dispatch({type:'flavor1', value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            <Input label=''        type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
            </View>
          </View>
          </ScrollView>
      </PhoneSplit>
      
      // <PhoneSplit state={state}>
      //   <View style={styles.col}>
      //       <View style={styles.row}>
      //           <Input label='Title'    type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
      //           <Input label='Flavor1'  type='text' onChangeText={(text:string) => dispatch({type:'flavor0', value:text})} />
      //           <Input label='Flavor2'  type='text' onChangeText={(text:string) => dispatch({type:'flavor1', value:text})} />
      //           <Input label='Sessions' type='switch' onValueChange={() => dispatch({type:'sessions'})} value={state.sessions} />
      //       </View>
      //   </View>
      // </PhoneSplit>
    );
  }

function homeReducer(home:any, action:any) {
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

  return home
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