import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  
  const [datos, setDatos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPosts = async() => {
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);    //consumir los datos
      const json = await response.json();    //convertir a json
      setDatos(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }

}

    useEffect(()=>{
      getPosts();
    }, [])
  
  return (
    <View style={styles.container}>

      {isLoading ? <ActivityIndicator /> :(
                <FlatList 
                  data={datos}
                  keyExtractor = { ({ id }, index) => id }
                  renderItem = {
                    ({item}) => (
                      <Text>{item.title}</Text>
                    )
                    
                  }
                >
                </FlatList>

      ) }
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
