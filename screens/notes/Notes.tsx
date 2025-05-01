import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/reduxWithts/hooks';
import {addNote, Note, noteSelector} from '../../redux/reduxWithts/notesSlice';

const Notes = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);
  console.log('notes:::::', notes);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        value={title}
        placeholder="Title"
        style={{
          borderColor: '#000',
          borderWidth: 1,
          width: '90%',
          marginTop: 20,
        }}
        onChangeText={val => {
          setTitle(val);
        }}
      />

      <TextInput
        value={desc}
        placeholder="Description"
        style={{
          borderColor: '#000',
          borderWidth: 1,
          width: '90%',
          marginTop: 20,
        }}
        onChangeText={val => {
          setDesc(val);
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          width: '90%',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(addNote({title, desc}));
        }}>
        <Text style={{color: '#fff'}}>Add Note</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        renderItem={({item, index}: {item: Note; index: number}) => {
          return (
            <View
              style={{
                borderColor: '#000',
                borderWidth: 1,
                width: '90%',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 10}}>{item.title}</Text>
              <Text style={{marginLeft: 10}}>{item.desc}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Notes;
