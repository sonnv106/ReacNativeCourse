import React, {useState} from "react";
import {Text, View, StyleSheet, Button, Modal} from "react-native";


const ModalComponent = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    }
    return (
        <View >
            <Modal
             visible = {modal}
             animationType={"slide"}
            //  transparent = {true}
             >
                <View>
                    <Text> Modal component</Text>
                </View>
                <Button title="Close it" 
                onPress={handleModal}></Button>
            </Modal>
            <Button title = 'Open modal' 
            onPress={handleModal}/> 
        </View>
    )
}
const styles = StyleSheet.create({

})
export default ModalComponent;