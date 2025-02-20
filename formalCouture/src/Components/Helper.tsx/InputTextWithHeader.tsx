import { InputText } from 'primereact/inputtext'
import React from 'react'
import { inputHeader } from '../../Type/ComponentBasedTypes'

const InputTextWithHeader: React.FC<inputHeader> = ({
  header,
  iconStyle,
  onChange,
  placeholder,
  headerStyle,
  inputTextStyle,
  value,
  borderBottom,
}) => {
  return (
    <>
      <div className="text-sm font-extrabold rounded-sm w-full ">
        <h1 style={headerStyle} className="p-4">
          {header}
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center mt-[-15px] bg-[white] ">
          <div
            className="p-input-icon-left  "
            style={{
              flexGrow: 1,
              alignContent: 'stretch',
              width: '100%',
              display: 'flex',
              margin: ' 0 20px',
            }}>
            <img
              src="/assets/icons/search.png"
              alt="Search Icon"
              className="p-clickable"
              style={iconStyle}
            />
            <InputText
              placeholder={placeholder}
              style={inputTextStyle}
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default InputTextWithHeader
