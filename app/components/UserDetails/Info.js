import React from 'react'
import { View } from 'react-native'
import moment from 'moment'

import styles from './styles'
import ActionRow from './ActionRow'
import { capitalizeFirstLetter } from '../../helpers/string'

export default function Info({ login, dob, location, registered }) {
  return (
    <View style={styles.infoContainer}>
      <ActionRow
        label="city"
        body={capitalizeFirstLetter(location.city)}
      />
      <ActionRow
        label="birthday"
        body={moment(dob).format('Do MMMM YYYY')}
      />
      <ActionRow
        label="registered"
        body={moment(registered).format('Do MMMM YYYY')}
      />
      <ActionRow
        label="username"
        body={login.username}
      />
    </View>
  )
}
