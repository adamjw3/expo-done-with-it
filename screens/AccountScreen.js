import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppListItemSeparator from '../components/AppListItemSeparator';
import AppIcon from '../components/AppIcon';
import colors from '../config/colors';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

const items = [
    {
        title: 'My Listing',
        icon: 'format-list-bulleted',
        backgroundColor: colors.primary,
        targetScreen: routes.LISTING,
    },
    {
        title: 'My Messages',
        icon: 'email',
        backgroundColor: colors.secondary,
        targetScreen: routes.MESSAGE,
    },
];

const AccountScreen = ({ navigation }) => {
    const { user, logOut } = useAuth();

    return (
        <AppScreen>
            <AppListItem
                title={user.name}
                subtitle={user.email}
                image={require('../assets/mosh.jpg')}
                style={{ marginBottom: 50 }}
            />
            <View style={styles.InnerContainer}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.title.toString()}
                    renderItem={({ item }) => (
                        <AppListItem
                            title={item.title}
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                            IconComponent={
                                <AppIcon
                                    name={item.icon}
                                    backgroundColor={item.backgroundColor}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <AppListItemSeparator style={styles.separator} />
                    )}
                />
            </View>
            <AppListItem
                title="Logout"
                onPress={logOut}
                IconComponent={
                    <AppIcon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </AppScreen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    InnerContainer: {
        marginVertical: 20,
    },
});
