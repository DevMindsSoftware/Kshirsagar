import { axiosPrivate } from './axios';

export const bannerslidershowByApi = async (payloadData) => {
    let res = await axiosPrivate.get('/bannerdetails', payloadData);
    return res.data;
};
export const BannerdetailTitleGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/bannerdetails/BannerdetailTitleGetByApi', payloadData);
    return res.data;
};