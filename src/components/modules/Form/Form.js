import React, {useCallback, useState, useEffect} from 'react'
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

import {useDropzone} from 'react-dropzone';
//import ReactDropzone from 'react-dropzone';
//import request from "superagent";

import Header from '../Header/Header'
import {Post} from './styled'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

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

        const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

        return (
            <Post>
                <Header 
                    bgcolor={'transparent'}
                    title={'About Us'}
                    subText={'Get to Know More About Us'}
                    height={'70vh'}
                    mobileHeight={'50vh'}
                    img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
                />
                <div className='main'>
                    <div className='head'>
                        <h1>POST A BLOG</h1>
                    </div><br /><br /><br /><br />
                    <div className='blog'>
                        <form onSubmit={this.submit}>
                            <div className='drop'>
                            <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
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

{/* 
<Dropzone
                                    onDrop={this.onDrop.bind(this)}
                                    accept="image/png, image/jpg"
                                    minSize={0}
                                    maxSize={maxSize}
                                    >
                                    {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
                                            const isFileTooLarge = rejectedFiles > 0 && rejectedFiles[0].size > maxSize;
                                            return (
                                                <div {...getRootProps()} className='file'>
                                                <input {...getInputProps()} />
                                                {!isDragActive && 'Click here or drop a file to upload!'}
                                                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                                {isDragReject && "File type not accepted, sorry!"}
                                                {isFileTooLarge && (
                                                    <div className="text-danger mt-2">
                                                    File is too large.
                                                    </div>
                                                )}
                                                </div>
                                            )}
                                            }
                                </Dropzone>
*/}

export default Form