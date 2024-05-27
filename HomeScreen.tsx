import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieCards from '../components/MovieCards';
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';

type Movie = {
  id: string;
  name: string;
  image: string;
  language: string;
  genre: string;
};

const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const db = getFirestore();
    const snapShot = collection(db, 'Movies');
    const q = query(snapShot);
    const unsubscribe = onSnapshot(q, (snapShot) => {
      console.log('Running snapshot ...');
      const movies = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Movie));
      setMovies(movies);

      console.log('\n\n\n Items data inside HOOK ==>\n', movies);
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  if (!movies) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={'#3bcf27'} size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#F0F0F0', flex: 1, marginTop: 21 }}>
      <MovieCards movies={movies} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
