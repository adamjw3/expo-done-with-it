import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AppListItem from '../components/AppListItem';
import AppListItemDelete from '../components/AppListItemDelete';
import AppListItemSeparator from '../components/AppListItemSeparator';
import AppScreen from '../components/AppScreen';

const initialMessages = [
    {
        id: 1,
        title: 'title 1',
        description: 'description 1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 3,
        title: 'title 2',
        description: 'description 2',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 4,
        title: 'title 2',
        description: 'description 2',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 5,
        title: 'title 2',
        description: 'description 2',
        image: require('../assets/mosh.jpg'),
    },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing] = useState(false);

    const handleDelete = (message) => {
        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages);
    };

    return (
        <AppScreen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <AppListItem
                        chevron
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('item pressed', item)}
                        renderRightActions={() => (
                            <AppListItemDelete
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={() => (
                    <AppListItemSeparator style={styles.separator} />
                )}
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 2,
                            title: 'title 2',
                            description: 'description 2',
                            image: require('../assets/mosh.jpg'),
                        },
                    ])
                }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({});
