import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';
import { Formik } from 'formik';
import { gStyle } from '../../../styles/style';

export default function Form({addArticle}) {

  return (
      <View>
          <Formik 
          initialValues={{name: '', announce: '', full: '', img: ''}} 
          onSubmit={(values, action) => {
            addArticle(values);
            action.resetForm();
          }}>
            {(props) => (
                <View>
                    <TextInput 
                    style={styles.input}
                    value={props.values.name} 
                    placeholder='Enter your name' 
                    onChangeText={props.handleChange('name')}
                    />
                    <TextInput 
                    style={styles.input}
                    value={props.values.announce} 
                    multiline
                    placeholder='Enter your announce' 
                    onChangeText={props.handleChange('announce')}
                    />
                    <TextInput 
                    style={styles.input}
                    value={props.values.full} 
                    multiline
                    placeholder='Enter your article' 
                    onChangeText={props.handleChange('full')}
                    />
                    <TextInput 
                    style={[styles.input, styles.inputImg]}
                    value={props.values.img} 
                    placeholder='Specify a photo' 
                    onChangeText={props.handleChange('img')}
                    />
                    <Button title={'Add'} onPress={props.handleSubmit}/>
                </View>
            )}
          </Formik>
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: 'silver',
    borderRadius: 5,
  },
  inputImg: {
    marginBottom: 25,
  }
});
