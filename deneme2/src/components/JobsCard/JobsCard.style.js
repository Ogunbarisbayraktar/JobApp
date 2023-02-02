import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'pink',
        padding: 10,
        margin: 7,
        flex: 1    
    },
    title:{
        fontSize: 15,
        fontWeight: "bold",
    },
    type:{},
    inner_container:{
        backgroundColor: 'red',
        alignSelf: 'baseline',
        borderRadius: 8,

    },
    locations:{
        fontStyle: "italic",
        color: 'white',
        margin: 3,
        padding: 1,
    },
    levels:{
        color:'red',
        fontWeight: 'bold',
        justifyContent: 'flex-end',
        
    },
    bottom_container:{
        alignItems: 'flex-end',
    }
});