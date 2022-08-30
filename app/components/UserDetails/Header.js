import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { capitalizeFirstLetter } from '../../helpers/string'

const Header = ({ picture, name }) => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={{
                    uri: picture.large, 
                    headers: {
                        Accept: '*/*',
                    },
                }}
                style={styles.image}
            />
            <Text>
                {capitalizeFirstLetter(name.first + ' ' + name.last)}
            </Text>
        </View>
    )
}

export default Header