import { axiosPrivate } from './axios';

// export const bannerslidershowByApi = async (payloadData) => {
//     let res = await axiosPrivate.get('/bannerdetails', payloadData);
//     return res.data;
// };
export const BatmayadetalTitleGetByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/batmayyaanilekhans/BannerdetailTitleGetByApi', payloadData);
    return res.data;
};
