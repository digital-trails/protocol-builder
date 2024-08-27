import { useReducer } from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import {PhoneSplit} from '@/components/split'
import {Input} from '@/components/input'
import {Link} from 'expo-router'

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
        <View style={styles.col}>
            <View style={styles.row}>
                <Input label='Title'    type='text' onChangeText={(text:string) => dispatch({type:'title'  , value:text})} />
                <Input label='Flavor1'  type='text' onChangeText={(text:string) => dispatch({type:'flavor0', value:text})} />
                <Input label='Flavor2'  type='text' onChangeText={(text:string) => dispatch({type:'flavor1', value:text})} />
                <Input label='Sessions' type='switch' onValueChange={() => dispatch({type:'sessions'})} value={state.sessions} />
            </View>
        </View>
            {/* <View style={styles.col}>
                <TouchableOpacity style={styles.button}>
                    <Link href={'/home'}>
                        <Text style={styles.button_txt}>Create a protocol</Text>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_txt}>Modify a protocol</Text>
                </TouchableOpacity>
            </View> */}
      </PhoneSplit>
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
        flex: 1,
        justifyContent : 'center', 
        alignItems     : 'flex-start'
    },
    row: {
    },
    button: {
        padding:5,
        margin:10,
        borderRadius:5,
        minWidth: 250,
        alignItems: 'center',
        backgroundColor:'blue'
    },
    button_txt: {
        color:'white',
        fontSize:20
    }
});