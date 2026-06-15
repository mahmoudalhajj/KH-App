import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../enums/color';
import { TranslationKey } from '../../i18n/translationKeys';
import { i18nStore } from '../../stores/i18nStore'
import {Language} from '../../i18n/translations';

const LanguageSelector = observer(() => {
    const { t } = useTranslation();

    const languages: { key: Language; value: string }[] = [
        { key: 'en', value: 'English' },
        { key: 'ar', value: 'العربية' },
        { key: 'fr', value: 'Français' },
    ];

    const isRTL = i18nStore.getIsRTL();
    const currentLang = i18nStore.getLanguage();

    return (
        <View style={styles.container}>
            <Text style={[
                styles.label,
                { textAlign: isRTL ? 'right' : 'left' }
            ]}>
                {t(TranslationKey.CHANGE_LANGUAGE)}
            </Text>
            {languages.map((lang) => (
                <Pressable
                    key={lang.key}
                    style={[
                        styles.item,
                        currentLang === lang.key && styles.activeItem,
                        { flexDirection: isRTL ? 'row-reverse' : 'row' }
                    ]}
                    onPress={() => i18nStore.setLanguage(lang.key)}
                >
                    <Text style={[
                        styles.text,
                        currentLang === lang.key && styles.activeText
                    ]}>
                        {lang.value}
                    </Text>
                    {currentLang === lang.key && (
                        <View style={styles.checkmark} />
                    )}
                </Pressable>
            ))}
        </View>
    );
});

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
