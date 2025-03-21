import { ScrollView, View, Text, StyleSheet } from "react-native"
import { PhoneSplit } from '@/components/split'
import { Input } from '@/components/input'
import { useProtocolContext } from '@/components/protocol';


export default function EditSidebarScreen() {
    const {state:{home}, dispatch} = useProtocolContext();
    function homeDispatch(home:any, action:any) {
      home = {...home}    
      if (action.type == "label0") {
        home.sidebar[0][0] = action.value
      }
      if (action.type=="label1"){
        home.sidebar[1][0]=action.value
      }
      if (action.type =="label2"){
        home.sidebar[2][0]=action.value
      }
      if (action.type=="label3"){
        home.sidebar[3][0]=action.value
      }
      if (action.type=="label4"){
        home.sidebar[4][0]=action.value
      }
      if (action.type=="label5"){
        home.sidebar[5][0]=action.value
      }
      if (action.type=="label6"){
        home.sidebar[6][0]=action.value
      }
      if (action.type=="label7"){
        home.sidebar[7][0]=action.value
      }
      if (action.type=="label8"){
        home.sidebar[8][0]=action.value
      }
      if (action.type=="label9"){
        home.sidebar[9][0]=action.value
      }
      if (action.type=="label10"){
        home.sidebar[10][0]=action.value
      }
      if (action.type=="label11"){
        home.sidebar[11][0]=action.value
      }
      if (action.type=="label12"){
        home.sidebar[12][0]=action.value
      }
      if (action.type=="label13"){
        home.sidebar[13][0]=action.value
      }
      if (action.type=="label14"){
        home.sidebar[14][0]=action.value
      }
      if (action.type=="icon0"){
        home.sidebar[0][1]=action.value
      }
      if (action.type=="icon1"){
        home.sidebar[1][1]=action.value
      }
      if (action.type=="icon2"){
        home.sidebar[2][1]=action.value
      }
      if (action.type=="icon3"){
        home.sidebar[3][1]=action.value
      }
      if (action.type=="icon4"){
        home.sidebar[4][1]=action.value
      }
      if (action.type=="icon5"){
        home.sidebar[5][1]=action.value
      }
      if (action.type=="icon6"){
        home.sidebar[6][1]=action.value
      }
      if (action.type=="icon7"){
        home.sidebar[7][1]=action.value
      }
      if (action.type=="icon8"){
        home.sidebar[8][1]=action.value
      }
      if (action.type=="icon9"){
        home.sidebar[9][1]=action.value
      }
      if (action.type=="icon10"){
        home.sidebar[10][1]=action.value
      }
      if (action.type=="icon11"){
        home.sidebar[11][1]=action.value
      }
      if (action.type=="icon12"){
        home.sidebar[12][1]=action.value
      }
      if (action.type=="icon13"){
        home.sidebar[13][1]=action.value
      }
      if (action.type=="icon14"){
        home.sidebar[14][1]=action.value
      }
      
      dispatch({type:'home', value:home})
    }
    return (
          <PhoneSplit state={home} screen='sidebar'>
            <ScrollView style={styles.scrollContainer}>
              <View style={styles.row}>
                          <View style={styles.input} >
                          <Input label='Label' type='text' value={home.sidebar[0][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label0', value:text})} />
                          <Input label=''      type='text' value={home.sidebar[1][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label1'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[2][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label2'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[3][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label3'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[4][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label4'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[5][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label5'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[6][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label6'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[7][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label7'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[8][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label8'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[9][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label9'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[10][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label10'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[11][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label11'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[12][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label12'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[13][0]} onChangeText={(text:string) => homeDispatch(home, {type:'label13'  , value:text})} />
                          </View>
                          <View style={styles.input}> 
                          <Input label='Icon'  type='text' value={home.sidebar[0][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon0', value:text})} />
                          <Input label=''      type='text' value={home.sidebar[1][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon1'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[2][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon2'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[3][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon3'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[4][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon4'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[5][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon5'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[6][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon6'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[7][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon7'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[8][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon8'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[9][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon9'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[10][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon10'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[11][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon11'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[12][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon12'  , value:text})} />
                          <Input label=''      type='text' value={home.sidebar[13][1]} onChangeText={(text:string) => homeDispatch(home, {type:'icon13'  , value:text})} />
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
    
    )
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