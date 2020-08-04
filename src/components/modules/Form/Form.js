import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Header from '../Header/Header'

class Form extends React.Component {
    render() {
        return (
            <div>
                <Header 
                    bgcolor={'transparent'}
                    title={'About Us'}
                    subText={'Get to Know More About Us'}
                    height={'70vh'}
                    mobileHeight={'50vh'}
                    img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
                />
                <div>
                    <input
                        type='file'
                        
                    />
                    <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    /><hr />
                </div>
            </div>
        )
    }
}

export default Form