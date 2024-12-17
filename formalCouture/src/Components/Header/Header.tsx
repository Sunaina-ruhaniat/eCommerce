import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'
import InputTextWithHeader from '../Helper.tsx/InputTextWithHeader'

const Header: React.FC = () => {
  return (
    <>
      <div
        style={{
          padding: '15px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: '3rem',
          marginRight: '2rem',
        }}>
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="Formal Couture Logo" className="h-12 w-12" />
        </div>

        {/* <div className="relative w-full max-w-lg">
          <InputText
            placeholder="Search"
            className="w-full pl-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
          />

          <img
            src="/assets/icons/search.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-70"
          />
        </div> */}

        {/* Shop Now & User Details */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            minWidth: '300px',
            justifyContent: 'end',
          }}>
          <>
            <InputTextWithHeader
              // value={searchText}
              // onChange={handleSearch}
              placeholder="Search "
              inputTextStyle={{
                width: '100%',
                height: '44px',
                padding: '0 4rem 0 3rem',
                border: '1px solid #C5D9E0',
                fontSize: '16px',
                color: '#000000',
                borderRadius: '4px',
                minHeight: '44px',
                fontWeight: 400,
                backgroundColor: 'rgb(242 242 242 / 0%)',
              }}
              iconStyle={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
              }}
            />
            <img
              src="/assets/images/shopNow.png"
              alt="Shop Now"
              className="h-10 w-10 cursor-pointer hover:opacity-80 transition duration-300"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
              <Avatar image="/assets/images/user1.png" shape="circle" size="large" />
              <span className="text-gray-700 font-semibold">John Doe</span>
              <i className="pi pi-chevron-down text-gray-500"></i>
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default Header
