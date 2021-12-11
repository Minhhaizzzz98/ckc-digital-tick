import React from 'react';
import './Layout.scss';
import Navbar from 'ui/molecules/Navbar/Navbar'
interface ILayout{
    children: React.ReactNode
}

const Layout:React.FC<ILayout> = (props: any):React.ReactElement => {
    const {children} = props;
    return (
        <div className="layout">
            <div className="layout__top">
                <Navbar/>
                <div>
                    {children}
                </div>
            </div>
            <div>
                footer nef
            </div>
        </div>
    )
}

export default Layout
