import axios from "axios";
import { EventEmitter} from 'events'
export const eventEmitter = new EventEmitter();

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    withCredentials : true,
});
instance.interceptors.response.use(function(response){
    return response.data;
},function(error){

    const error2 = error.response;
    console.log(error2);
    if (error2.status == 403) {
      if (
        error2.data.message ===
        'Token has expired'
      ) {
        // alert(
        //   'token hết hạn vui lòng đăng nhập lại'
        // );
      } else {
            // alert('token không đúng');
          }

   

      eventEmitter.emit('tokenExpried');


    //   window.location.assign('/');
      return;
    }




    return Promise.reject(error);
}
)
export default instance;
    
