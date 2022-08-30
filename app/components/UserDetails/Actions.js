import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { toPhoneNumber } from '../../helpers/string'
import ActionRow from './ActionRow'

const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>
            <ActionRow
                label="email"
                body={email}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-mail',
                        androidIcon: 'md-mail'
                    }
                ]}
            />
            <ActionRow
                label="cell"
                body={toPhoneNumber(cell)}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'md-call'
                    },
                    {
                        onPress: () => null,
                        iosIcon: 'ios-text',
                        androidIcon: 'md-chatbox'
                    }
                ]}
            />
            <ActionRow
                label="phone"
                body={toPhoneNumber(phone)}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'md-call'
                    }
                ]}
            />
        </View>
    )
}

export default Actions