import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return(
    <div className='bg-slate-900 text-white text-base text-center py-4'>
        Copyright &#169; @2024
    </div>
  ) ;
};

export default Footer;
