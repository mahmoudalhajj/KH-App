import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../enums/color';
import { TranslationKey } from '../../i18n/translationKeys';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const languages = [
        { key: 'en', value: 'English' },
        { key: 'ar', value: 'العربية' },
        { key: 'fr', value: 'Français' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{t(TranslationKey.CHANGE_LANGUAGE)}</Text>
            {languages.map((lang) => (
                <Pressable
                    key={lang.key}
                    style={[
                        styles.item,
                        i18n.language === lang.key && styles.activeItem
                    ]}
                    onPress={() => i18n.changeLanguage(lang.key)}
                >
                    <Text style={[
                        styles.text,
                        i18n.language === lang.key && styles.activeText
                    ]}>
                        {lang.value}
                    </Text>
                    {i18n.language === lang.key && (
                        <View style={styles.checkmark} />
                    )}
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.SECONDARY,
        marginBottom: 12,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 8,
        backgroundColor: Colors.SURFACE,
        borderWidth: 1,
        borderColor: Colors.BORDER,
    },
    activeItem: {
        borderColor: Colors.BUTTON,
    },
    text: {
        fontSize: 16,
        color: Colors.TEXT_PRIMARY,
    },
    activeText: {
        color: Colors.BUTTON,
        fontWeight: 'bold',
    },
    checkmark: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.BUTTON,
    },
});

export default LanguageSelector;
