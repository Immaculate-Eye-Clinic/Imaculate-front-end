import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

import {Div} from './styled'




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

  return (
    <Div>
        <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
            {thumbs}
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