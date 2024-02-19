import { axiosPrivate } from './axios';

export const ShanchitryTitleGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/shanshitrydata/shanchitrydetailTitleGetByApi', payloadData);
    return res.data;
};
