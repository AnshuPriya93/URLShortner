import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlDataInterface } from '../../interface/UrlData';
import axios from 'axios';
import { serveUrl } from '../../helpers/Contants';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {

  const [data, setData] = React.useState<UrlDataInterface[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  }


  const feachTableData = async () => {
    const response = await axios.get(`${serveUrl}/shortURL`)
    // console.log(response);
    // console.log(data);
    setData(response.data);
    setReload(false);
  }
  React.useEffect(() => {
    feachTableData();
  }, [reload])
  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>

  );
};

export default Container;
