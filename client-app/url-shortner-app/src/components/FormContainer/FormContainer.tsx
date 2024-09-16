import * as React from 'react';
import imageName from "../../assets/bg-url.jpg";
import axios from 'axios';
import { serveUrl } from '../../helpers/Contants';

interface IFormContainerProps {
    updateReloadState: () => void
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState } = props;

    const [fullUrl, setFullUrl] = React.useState<string>("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serveUrl}/shortURL`, {
                fullUrl: fullUrl
            });
            setFullUrl("");
            updateReloadState();
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='container mx-auto p-2'>
            <div className='my-8 rounded-xl bg-cover bg-center' style={{
                backgroundImage: `url(${imageName})`,
            }}>
                <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
                    <h2 className='text-white text-center text-4xl pb-4'>Url Shortner</h2>
                    <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your Undidy Link to shorten it</p>
                    <p className='text-white text-center pb-4 text-sm font-extralight'>free tool to shorten a URL or reduce Link, USe or URL shoetner to create  a shortend & neet link making it est to understand</p>
                    <form onSubmit={handleSubmit}>
                        <div className='flex'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-800'>urlshortner.link /
                                </div>
                                <input
                                    type='text'
                                    placeholder='add you link'
                                    required
                                    value={fullUrl}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                                    className='block w-full p-4  ps-32 text-sm text-gray-900 rounded-lg bg-white focus: ring-blue-500 focus: border-blue-500'></input>
                                <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'>Short URL</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
        // <div>Form Container</div>
    );
};

export default FormContainer;
