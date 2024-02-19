import { axiosPrivate } from './axios';

export const karyakrmTitleGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/imagekaryakramtwos/ImagekaryakramtwodetailTitleGetByApi', payloadData);
    return res.data;
};
export const AgamikaryakrmGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/karyakrams/AgamikaryakramdetailTitleGetByApi', payloadData);
    return res.data;
};

