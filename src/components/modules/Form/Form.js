import React, {useCallback} from 'react'
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

import Dropzone from 'react-dropzone'
//import ReactDropzone from 'react-dropzone';
//import request from "superagent";

import Header from '../Header/Header'
import {Post} from './styled'
import Previews from './Preview'
import StyledDropzone from './Usedrop'

class Form extends React.Component {
    constructor () {
        super()
        this.state = {
            header: '',
            imageFiles: []
        }
        this.handleChange = this.handleChange.bind(this)
         this.submit = this.submit.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState ({
            [name] : e.target.value
        })
    }

    submit(e){
        e.preventDefault()
        const user = {
             header: this.state.header,
            }
            
        fetch('https://jsonplaceholder.typicode.com/users', {
             method: 'POST',
             contacts: {
                 'content-type': 'application/json'
             },
             header: JSON.stringify(user),
         })
         .then(res => res.json())
         .then(data => console.log(data));
        }

        onDrop = (acceptedFiles) => {
            console.log(acceptedFiles);
          }

        onDrop(imageFiles) {
            this.setState({
                imageFiles: imageFiles
            })
            console.log(imageFiles)  
        }
    
    render() {
        const maxSize = 1048576;

        return (
            <Post>
                <Header 
                    bgcolor={'transparent'}
                    title={'Post A Blog'}
                    subText={''}
                    height={'60vh'}
                    mobileHeight={'50vh'}
                    img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
                />
                <div className='main'>
                    <div className='head'>
                        <h1>POST A BLOG</h1>
                    </div><br /><br />
                    <div className='blog'>
                        <form onSubmit={this.submit}>
                            <div className='drop' style={{}}>
                                <Previews />
                                <br />
                            </div>
                            <input 
                                type='text'
                                name='header'
                                value={this.state.header}
                                onChange={this.handleChange}
                                placeholder='Header goes here'
                            />
                        {/*<Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange}
                        />*/}
                            <FroalaEditor
                                tag='textarea'
                                config={this.config}
                                model={this.state.model}
                                onModelChange={this.handleModelChange}
                            />
                            <div className='but'>
                                <button onSubmit={this.submit}>Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Post>
        )
    }
}

export default Form