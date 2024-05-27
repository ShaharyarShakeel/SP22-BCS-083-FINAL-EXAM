import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

class Button extends Component {
    render() {
        const filledBgColor = this.props.color || COLORS.primary;
        const outlinedColor = COLORS.white;
        const bgColor = this.props.filled ? filledBgColor : outlinedColor;
        const textColor = this.props.filled ? COLORS.white : COLORS.primary;

        return (
            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: bgColor,
                    ...this.props.style
                }}
                onPress={this.props.onPress}
            >
                <Text style={{ fontSize: 18, color: textColor }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Button;
