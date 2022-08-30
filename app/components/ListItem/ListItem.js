import React from 'react'
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles, { CHEVRON_SIZE } from './styles'
import { capitalizeFirstLetter } from '../../helpers/string'
import colors from '../../config/colors'

const ListItem = ({ contact, onPress }) => {
  return (
    <TouchableHighlight 
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <Image
          source={{ uri: contact.picture.thumbnail }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{capitalizeFirstLetter(contact.name.first + ' ' + contact.name.last)}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon 
            name={ Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
            size={CHEVRON_SIZE}
            color={colors.subtleText}
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ListItem