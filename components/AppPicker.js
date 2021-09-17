import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppScreen from './AppScreen';
import AppText from './AppText';
import AppPickerItem from './AppPickerItem';

const AppPicker = ({
    items,
    icon,
    placeholder,
    onSelectItem,
    selectedItem,
    PickerItemComponent = AppPickerItem,
    width = '100%',
    numberOfColumns = 1,
}) => {
    const [isModelVisible, setIsModelVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModelVisible(true)}>
                <View style={[styles.container, { width: width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.black}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.black}
                        style={styles.chevron}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModelVisible} transparent animationType="slide">
                <AppScreen>
                    <Button
                        title="close"
                        onPress={() => setIsModelVisible(false)}
                    />
                    <FlatList
                        data={items}
                        numColumns={numberOfColumns}
                        horizontal={false}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setIsModelVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </AppScreen>
            </Modal>
        </>
    );
};

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    chevron: {},
    text: {
        flex: 1,
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});
