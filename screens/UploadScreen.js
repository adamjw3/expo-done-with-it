import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        progress={progress}
                        width={200}
                        color={colors.primary}
                        borderColor={colors.primary}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        styles={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
};

export default UploadScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animation: {
        width: 150,
    },
});
