import * as request from '~/untils/request';

export const Search = async (q, type = 'less') => {
    try {
      const res = request.get(`users/search`, {
        params: {
          q,
          type
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };