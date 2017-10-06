import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon, Avatar } from 'react-native-elements'

import { MContainer } from '../../components'

const news = {
  key: 1,
  title: 'Nathan Anderson',
  description: 'The idea with React Native Elements is more about component structure than actual design.',
  url: 'https://unsplash.com/photos/C9t94JC4_L8'
}

const comments = [
  {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'}
]

export default class NewsDetail extends React.Component {
  render() {
    return (
      <MContainer scrollable>
        <Card
          title={news.title}
          image={{ uri: 'https://i.pinimg.com/600x315/d4/09/17/d409174d62fc768e9e6690c0e1c4143f.jpg' }}>
          <Text style={{ marginBottom: 20 }}>
            {news.description}
          </Text>
          <View style={{ flexDirection: 'row', marginRight: 10, justifyContent: 'space-between' }}>
            <Text>Ler notícia completa</Text>
            <TouchableOpacity onPress={() => alert('bookmark')}>
              <Icon type='ionicon' name='ios-bookmark' size={25} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 15 }}>Comentários</Text>
          {comments.map(comment => (
            <View style={{ borderTopWidth: 0.5, paddingTop: 10, marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Avatar
                    small
                    rounded
                    source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text>Yang Choo</Text>
                    <Text>ás 20:30</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon type='material-community' name='thumb-up-outline' size={20} style={{ marginRight: 20 }} />
                  <Icon type='material-community' name='thumb-down-outline' size={20} />
                </View>
              </View>
              <Text>{comment.comment}</Text>
            </View>
          ))}
        </Card>
      </MContainer>
    )
  }
}