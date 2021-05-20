import React, {useRef} from 'react'
import Sinput from "./forms/Sinput"
const FileUploader = ({onFileSelect, name, register, placeholder, label}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
    }

    return (
        <div className="file-uploader">
              <Sinput
                name={name}
                placeholder={placeholder}
                type="file"
                register={register}
                inputBg="#F0F0F0"
                // disabled={legacies.length <= 1?true:false}
                label={label}
                required
                handleOnchange={handleFileInput}
               
                
              />
          
            {/* <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/> */}
        </div>
    )
}


export default FileUploader;