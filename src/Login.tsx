import { universalFetchData } from "./Service/FetchData";

export const Login = async ({
  loginId,
  password,
}: {
  loginId: string;
  password: string;
}) => {
  return new Promise((res, rej) => {
    const request = async () => {
      const response = await universalFetchData({
        method: "post",
        url: `/login`,
        data: {
          loginId: loginId,
          password: password,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      });

      return response.data;
    };
    request()
      .then((result) => {
        console.log("[then] result :", result);
        if(result.data) {
            res({status : 'success', data : result})
        } else {
            res({status : 'fail', data : {accessToken : ''}})
        }
        
      })
      .catch((error) => {
        console.log("[catch] error :", error);
        alert(error.message);
        console.debug(error);
        rej({status : 'error', message : error})
      })
  });
};
