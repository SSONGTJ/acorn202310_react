//ContactComponent.js 파일 입니다.

import { Component } from "react";
import ContactList from "./ContactListComponent";

class Contact extends Component{
    render(){
        return (
            <div>
                <h3>연락처 목록 입니다</h3>
                <ContactList></ContactList>
            </div>
        )
    }
}
export default Contact