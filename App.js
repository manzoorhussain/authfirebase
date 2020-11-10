import React,{Component,} from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './src//components/comman';
import LoginForm from './src/components/LoginForm';

class App extends Component{

  constructor(prop){
    super();
    
    this.state={
      loggedIn:null,
    }

    }//constructor

  componentWillMount(){

      const config= {
        apiKey: 'AIzaSyCKYjYlsy6JGDqiZgdGHXleJIGcp96ZcJc',
        authDomain: 'auth-8b233.firebaseapp.com',
        databaseURL: 'https://auth-8b233.firebaseio.com',
        projectId: 'auth-8b233',
        storageBucket: 'auth-8b233.appspot.com',
        messagingSenderId: '865539521365',
        appId: '1:865539521365:web:ce49fae81543a8e8e24ddc',
        measurementId: 'G-P84ZK9F1JF'
        }
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }

        firebase.auth().onAuthStateChanged((user)=>{

            if(user){
              this.setState({loggedIn:true});
            }else{
              this.setState({loggedIn:false});
            }
        });


    }

    onLogOutPresses(){
      console.log('onLogOutPresses');
      return <LoginForm/>;
    }

  renderContent(){
    
    switch(this.state.loggedIn){

      case true:
        return <Button text="Log out" onPress={firebase.auth().signOut()}/>;
      case false:
      return <LoginForm/>;
      
      default:
        return <Spinner size='large'/>



    }
    
  }//renderContent

  render(){
    return(
      <View>
          <Header headerText="Authentication"/>
          {this.renderContent()}
          
      </View>
    );

  }

  

}

export default App;