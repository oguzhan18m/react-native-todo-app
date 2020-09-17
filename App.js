import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
   const [items, setItems] = useState([
      { id: Math.floor(Math.random() * 100), text: "Milk" },
      { id: Math.floor(Math.random() * 100), text: "Eggs" },
      { id: Math.floor(Math.random() * 100), text: "Bread" },
      { id: Math.floor(Math.random() * 100), text: "Juice" },
   ]);

   const deleteItem = (id) => {
      setItems((prevItems) => {
         return prevItems.filter((item) => item.id !== id);
      });
   };

   const addItem = (text) => {
      if (text === "") {
         Alert.alert("Error", "Please enter an item", { text: "OK" });
      } else {
         setItems((prevItems) => {
            return [
               { id: Math.floor(Math.random() * 100), text },
               ...prevItems,
            ];
         });
      }
   };

   return (
      <View style={styles.container}>
         <Header title="Shopping List" />
         <AddItem addItem={addItem} />
         <FlatList
            data={items}
            renderItem={({ item }) => (
               <ListItem item={item} deleteItem={deleteItem} />
            )}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 60,
   },
});

export default App;
