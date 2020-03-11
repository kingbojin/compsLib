import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnDefaultStyle: {
        width: 100,
        height: 20,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 0
    },
    textDefaultStyle: {
        fontSize: 16,
        color: '#ffffff'
    }
});

export class RadiusButton extends Component {
    static propTypes = {
        btnName: PropTypes.string,
        textStyle: Text.propTypes.style,
        btnStyle: TouchableHighlight.propTypes.style,
        underlayColor: TouchableHighlight.propTypes.underlayColor
    };

    static defaultProps = {
        btnName: 'Button',
        underlayColor: '#ffffff'
    };

    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                activeOpacity={0.1}
                style={[
                    styles.center,
                    styles.btnDefaultStyle,
                    this.props.btnStyle
                ]}
                onPress={this.props.onPress}
            >
                <Text style={[styles.textDefaultStyle, this.props.textStyle]}>
                    {this.props.btnName}
                </Text>
            </TouchableHighlight>
        );
    }
}
