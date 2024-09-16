import * as React from 'react';
// import './index.css';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-base text-white' >URL</div>
            </nav>
        </div>
    </div>
  );
};

export default Header;
