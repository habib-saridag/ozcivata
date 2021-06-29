import { Dimensions, StyleSheet } from "react-native";


const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    view: {
        height: height/1,
    },

    header: {
        height: 50, width: '100%',
        backgroundColor: '#007dc6',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },

    header_view: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header_image: {
        resizeMode: 'stretch',
        height: 50, width: '80%',
        borderRadius: 10
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        marginVertical: 10,
    },

    input: {
        borderBottomColor: "#000000",
        borderWidth: 1,
        height: 30,
        paddingLeft:7,
        width: width / 1.4,
        marginTop:5,
        borderRadius:10
    },

    result: {
        width: width / 1.4
    },

    button: {
        alignItems: "center",
        backgroundColor: "#007dc6",
        padding: 15,
        width:width/1.4,
        borderRadius:15
    }
});

export default styles;