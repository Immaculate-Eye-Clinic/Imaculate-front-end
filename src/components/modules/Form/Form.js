import React, {useCallback} from 'react'
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
 
import FroalaEditor from 'react-froala-wysiwyg';

import Dropzone from 'react-dropzone'

import Header from '../Header/Header'

class Form extends React.Component {
    constructor () {
        super()
        this.state = {
            header: '',
            file: '',
        }
    }

    
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
                    <form onSubmit={this.submit}>
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                                </section>
                            )}
                        </Dropzone>
                        <input 
                            type='text'
                            name='header'
                            value={this.state.header}
                            onChange={this.handleClick}
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
                        /><hr />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form