import React from 'react'
import { View, Text, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles, { ICON_SIZE } from './styles'
import colors from '../../config/colors'
import { toPhoneNumber } from '../../helpers/string'

const ActionRow = ({ label, body, actions = [] }) => {
    return (
        <View style={styles.actionRow}>
            <View style={styles.actionInfo}>
                <Text style={styles.actionLabel}>{label}</Text>
                <Text style={styles.actionBody}>{body}</Text>
            </View>
            <View style={styles.actionIcons}>
                {actions.map((action, index) =>
                    <TouchableOpacity
                        onPress={() => null}
                        key={index}
                    >
                        <Icon color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? action.iosIcon : action.androidIcon}
                        />
                    </TouchableOpacity>)
                }
            </View>
        </View>
    )
}

export default ActionRow