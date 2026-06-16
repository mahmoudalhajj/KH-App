import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Colors } from '../../enums/color';
import { i18nStore } from "../../stores/i18nStore";
import {DynamicView} from "./DynamicView";

export const RTLExample = observer(() => {
    const isRTL = i18nStore.getIsRTL();
    const currentLang = i18nStore.getLanguage();

    return (
        <View style={styles.container}>
            <View style={[
                styles.wrapper, 
                { flexDirection: isRTL ? 'row-reverse' : 'row' }]}> 
                <Text style={[
                    styles.label, 
                    { textAlign: isRTL ? 'right' : 'left' }]}>
                    Language: {currentLang}
                </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: Colors.SURFACE,
        borderRadius: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Colors.BORDER,
    },
    wrapper: {
        alignItems: 'center',
        gap: 12,
    },
    button: {
        backgroundColor: Colors.BUTTON,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    label: {
        flex: 1,
        fontSize: 14,
        color: Colors.TEXT_PRIMARY,
    }
});

export default RTLExample;
