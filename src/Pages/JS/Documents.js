// Documents page with documents such as the constitution
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import '../Styles/Documents.css'

const Documents = () => {

    return ( 
        <div className='documents'>
            <p className="constitution_header">Constitution</p>
            <iframe src="https://drive.google.com/file/d/1ibnB2MFcUdULj0chubAEsav57NKXw677/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>
    );
}
 
export default Documents;
