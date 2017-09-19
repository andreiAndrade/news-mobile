import React from 'react'
import PropTypes from 'prop-types'

import { default as ETIcon } from 'react-native-vector-icons/Entypo'
import { default as EVIcon } from 'react-native-vector-icons/EvilIcons'
import { default as FAIcon } from 'react-native-vector-icons/FontAwesome'
import { default as FTIcon } from 'react-native-vector-icons/Foundation'
import { default as IOIcon } from 'react-native-vector-icons/Ionicons'
import { default as MTIcon } from 'react-native-vector-icons/MaterialIcons'
import { default as MCIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as OTIcon } from 'react-native-vector-icons/Octicons'
import { default as ZCIcon } from 'react-native-vector-icons/Zocial'
import { default as SLIcon } from 'react-native-vector-icons/SimpleLineIcons'

const IconBundles = {
  'Entypo': ETIcon,
  'EvilIcons': EVIcon,
  'FontAwesome': FAIcon,
  'Foundation': FTIcon,
  'Ionicons': IOIcon,
  'MaterialIcons': MTIcon,
  'MaterialCommunityIcons': MCIcon,
  'Octicons': OTIcon,
  'Zocial': ZCIcon,
  'SimpleLineIcons': SLIcon
}

export interface Props {
  name: PropTypes.string.isRequired,
  bundle?: PropTypes.string,
  size?: PropTypes.number,
  style?: any,
  color?: any
}

export default function Icon({name, bundle = 'Ionicons', size, style}: Props) {
  const Ycon = IconBundles[bundle]
  return <Ycon name={name} size={size} style={style} />
}
