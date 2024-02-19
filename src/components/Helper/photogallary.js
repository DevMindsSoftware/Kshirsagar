import { axiosPrivate } from './axios';

export const photoGallaryesTitleGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/photoGallaries/PhotogallarydetailTitleGetByApi', payloadData);
    return res.data;
};


