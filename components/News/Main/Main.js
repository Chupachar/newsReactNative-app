import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../../../styles/style';
import Form from '../Form/Form';

export default function Main({ navigation }) {

  const [news, setNews] = useState([
    {
    name: 'Google', 
    announce: 'Google!!!', 
    full: 'Google is cool!!!', 
    key: '1', 
    img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
    },
    {
    name: 'Apple',
    announce: 'Apple!!!', 
    full: 'Apple is cool!!!', 
    key: '2', 
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
    name: 'Facebook', 
    announce: 'Facebook!!!', 
    full: 'Facebook is cool!!!', 
    key: '3', 
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ]
    });
    setModalWindow(false);
  }

  return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
          <Ionicons 
          name="close-circle" 
          size={36} 
          color="red" 
          style={styles.iconClose}
          onPress={() => setModalWindow(false)}
          />
          <View style={gStyle.main}>
            <Text style={styles.title}>Form add:</Text>
            <Form addArticle={addArticle}/>
          </View>
        </Modal>
        <Ionicons 
        name="add-circle-sharp" 
        size={36} 
        color="green" 
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
        />
        <Text style={[gStyle.title, styles.header]}>My news</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={styles.image} source={{uri: item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.announce}>{item.announce}</Text>
          </TouchableOpacity>
        )} />
      </View>
  );
}

const styles = StyleSheet.create({
    header: {
      marginBottom: 30,
    },
    item: {
      width: '100%',
      marginBottom: 30,
    },
    image: {
      width: '100%',
      height: 200,
    },
    iconAdd: {
      textAlign: 'center',
      marginBottom: 15,
    },
    iconClose: {
      textAlign: 'center',
    },
    title: {
      fontFamily: 'mt-bold',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 20,
      color: '#474747',
    },
    announce: {
      fontFamily: 'mt-light',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 5,
      color: '#474747',
    }
});
