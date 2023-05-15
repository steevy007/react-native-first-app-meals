import { Text , View , StyleSheet } from "react-native"
const List=({list})=> {
  return list.map((item) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText} key={item}>{item}</Text>
        </View>
      ))
}

export default List

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
})