
import React, {useState, useContext} from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput,  useColorScheme, View, Button } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


import StoreProvider, { StoreContext } from './Store';


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
   
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  global.title = 'learn title'
  function getTitle() {
    return global.title
  }
  const [state, setState] = useState({ state: 'initial' })
  const [title, setTitle] = useState(getTitle())
  const [count, setCount] = useState(0)
  const store = useContext(StoreContext)
  console.log('store: ' + JSON.stringify(store))

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits. Fuka. fuka2. holy shit. jebus. test. no way1. text:
            {store?.state?.text}
          </Section>
          <Button
            onPress={() => {
              setTitle('you cliicked'); setCount(count + 1); }
            }
            title={title + ' ' + count}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
                <TextInput
          // style={[inputFieldStyle, textInputTextStyle]}
          onChangeText={(text) => setState({name: text})}
          accessibilityLabel="name"
          editable={true}
          value={count}
          placeholder={'First and last name'}
          placeholderTextColor="grey"
          autoCorrect={false}
          label="field1"
          ref={(input) => {
            
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.focusTheField('field2');
          }}
          textContentType="name"
        />
          <Button
            onPress={() => {
              setTitle('you cliicked'); setCount(count + 1); }
            }
            title={'storetest' + ' ' + store.state.medias[(count <= 2 ? count : 0)]}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next muthafuka!!!!!!!! test
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}

);



const AppWithStore = () => {
  return (
    < StoreProvider >
      <App/>
    </StoreProvider>
  )
}
export default AppWithStore;
