import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

import {Div} from './styled'

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


function Previews(props) {
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

  const {
    acceptedFiles,
    fileRejections,
    
  } = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <Div>
        <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
        <aside className='thumbsContainer'>
            {thumbs}
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <h4>Rejected files</h4>
            <ul>{fileRejectionItems}</ul>
        </aside>
        </section>
    </Div>
  );
}

export default Previews

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