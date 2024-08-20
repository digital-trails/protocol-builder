import { StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export function Phone() {

  return (
    <View style={{borderColor:'black', borderWidth:6, borderRadius: 10, height: 459.75, width: 216 }}>
      <View style={{backgroundColor:'#EEE', flex:1.25, flexDirection: 'row', paddingTop:10}} >
        <View style={{flex:.5}}>
          <View style={{flex:.33}}>
            <FontAwesome5 style={{marginLeft:10}} size={17} name="bars" backgroundColor='blue' color='black'/>
          </View>
        </View>
        <View style={{flex:1.5}}>
          <Text style={{fontWeight:"bold",flex:.33}}>MindTrails</Text>
          <Text style={{fontWeight:"bold",fontSize:9,flex:.7}}>Understand Your Thinking{"\n"}{"\n"}Feel Less Anxious</Text>
        </View>
        <View style={{flex:.75}}>
          <View style={{flex:.33, alignItems:"flex-end"}}>
            <FontAwesome5 style={{marginRight:10}} size={17} name="star" backgroundColor="transparent" color='black'/>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:'green', flex:4.25}}>
        <View style={{flex:3,backgroundColor:"white", margin:10, alignItems:"center", justifyContent: "center", borderRadius: 6}}>
          <Text>View Surveys</Text>
        </View>

        <View style={{flex:5,backgroundColor:"white", flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{minWidth:'48%', margin: '1%', borderRadius:2, backgroundColor:'#206AFF1A'}}></View>
          <View style={{minWidth:'48%', margin: '1%', borderRadius:2, backgroundColor:'#00E05A1A'}}></View>
          <View style={{minWidth:'48%', margin: '1%', borderRadius:2, backgroundColor:'#00C2FF1A'}}></View>
          <View style={{minWidth:'48%', margin: '1%', borderRadius:2, backgroundColor:'#5C2FDA1A'}}></View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ });