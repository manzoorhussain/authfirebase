import React,{Component,} from 'react';
import {StyleSheet,Text} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection,Input,Spinner } from './comman';


class LoginForm extends Component{




    constructor(prop){
        super();
        
        this.state={
            email:'',
            password:'',
            error:'',
            loading:false,
   }

        

        
    }
   
    renderButton(){
   
  
      if(this.state.loading){
        return <Spinner size="large"/>;
      } 
       
      
      return (
      <Button text="Login" onPress={this.onButtonPress.bind(this)}/>
      );
      


    }

    onLoginSuccess(){
      this.setState({
        email:'',
        password:'',
        loading:false,
        error:''
      });

    }

    onLoginFailed(){
      this.setState({
       loading:false,
        error:'Authentication Failed',
      });

    }

    onButtonPress(){

      
      const {email,password}=this.state;
      this.setState({ error:'',loading:true});
  
        firebase.auth().signInWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
  
        });

        
    }
 

  render(){

    
    return(
      <Card>
      
             <CardSection>
                    <Input label="Email" placeHolder="example@gmail.com"
                     onChangeText={email=>this.setState({email})}
                     value={this.state.email} 
                     secureTextEntry={false}
                     />
             </CardSection>

             <CardSection>
                 <Input placeHolder='Password' label="Password"
                  value={this.state.password} 
                 onChangeText={password=>this.setState({password})} secureTextEntry={true}/>
             </CardSection>

             <Text style={{fontSize:20,color:'red'}}>
                    {this.state.error}
              </Text>
              

             <CardSection>
                  {this.renderButton()}
                    
             </CardSection>
            

           

            


             
                
             
          
      </Card>
    );

  }

  

}

const styles=StyleSheet.create({
  

});

export default LoginForm;