import React, { Component } from 'react';
import Title from '../../component/title/Title';
import Container from '../../common/container/container';
import Tabmenu from '../../common/tabmenu/tabmenu';
import FormContainer from '../../common/formcontainer/FormContainer';
import Personaldetail from '../../component/UserDetail/personalDetail';







class Bank extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
        
    }



    render() {
       
        return (
            <div>
                <Title/>
                <Container>
                    <Tabmenu/>
                      <div style={{"clear":'both'}}></div>  
                    <FormContainer>
                     <Personaldetail/>
                      
                    </FormContainer>
                </Container>
                {/* {React.cloneElement(this.props.children, { name: this.state.data,setname: this.updateData  })} */}
            </div>
        )
    }
}
export default Bank;
