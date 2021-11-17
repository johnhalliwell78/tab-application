import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, Button} from '@/components';
import {Styles, Colors, sizeScale, Constants} from '@/commons';
import {Actions} from '@/store/actions';
import Alert from '@/utils/alert';
import {useDispatch, useSelector} from 'react-redux';
import { get } from 'lodash';

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => get(state, 'authReducers.auth.loading', false));

  /**
   * States
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Functions
   */
  const logIn = () => {
    if (!email || !password) {
      Alert.error(Constants.AlertFailed, 'Please Enter Email or Password');
      return;
    }
    dispatch(Actions.login('', ''));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text>Logo Here</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            placeholder="example@com"
            onChangeText={e => setEmail(e)}
          />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="123456789"
            onChangeText={e => setPassword(e)}
          />
          <Button style={styles.button} text="Login" onPress={logIn} loading={loading}/>

          <TouchableOpacity style={styles.link}>
            <Text color={Colors.cerulean} size={14}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    marginTop: sizeScale(35),
    marginBottom: sizeScale(50),
    ...Styles.justifyContentCenter,
    ...Styles.alignItemsCenter,
  },
  logo: {
    marginTop: sizeScale(10),
    width: sizeScale(220),
    height: sizeScale(80),
    resizeMode: 'contain',
  },
  inputWrapper: {
    marginHorizontal: sizeScale(20),
  },
  inputLabel: {
    marginTop: sizeScale(10),
  },
  button: {
    marginTop: sizeScale(20),
    paddingVertical: sizeScale(10),
  },
  link: {
    alignSelf: 'center',
    marginTop: sizeScale(18),
  },
});

export default Login;
