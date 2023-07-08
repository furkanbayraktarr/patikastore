import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create ({
container:{
    width: Dimensions.get('window').width/2.2,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'#eceff1',
    margin:5,
    borderRadius:10,
    

},
image:{
    marginTop:7,
   width: 170, 
   height: 160,
    borderRadius:10,

},
title:{
    color: 'black',
    fontWeight:'bold',
    fontSize:18,

},
price:{
    
    color:'gray',
    marginTop:3,
    margin:1,
    fontSize:18,
    fontWeight:"bold",
    
},
inStock:{
    marginTop:3,
    color: 'red',
    marginBottom:2,
    fontSize:18,
    fontWeight:'bold'
    
},
inner_container: {
    padding:5,
},

})