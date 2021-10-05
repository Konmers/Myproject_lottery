// 引入刚才封装的axios使接口和axios建立连接
import _axios from './axios';
// 这是定义了一个叫get的函数
export const get = (data) => { // 这个get只是前端自己定义的函数名，在调用时可以看做是一个接口，比如登陆接口可以写为 export const login = () =>{} 这样的
    // method不写默认为get请求
    return _axios({
        url: '/getPrize', // 这个url会自动把axios封装的那个baseURL作为前缀，填后端给的具体的接口地址的后半部分就行
        // params: {
        //     id: "",
        //     grade: "",
        //     exist: "",
        // },
        method: 'get',
        params: data
    })
}
export const get3 = (data) => { // 这个get只是前端自己定义的函数名，在调用时可以看做是一个接口，比如登陆接口可以写为 export const login = () =>{} 这样的
    // method不写默认为get请求
    return _axios({
        url: '/init', // 这个url会自动把axios封装的那个baseURL作为前缀，填后端给的具体的接口地址的后半部分就行
        // params: {
        //     id: "",
        //     grade: "",
        //     exist: "",
        // },
        method: 'get',
        params: data
    })
}

// for(let i = 0;i < 381;i++){
//   get().then(res => {
//     let getid = res.data.id;
//     console.log("id="+i+":"+getid);
//   });
// }

window.onbeforeunload = function() {
    get3().then(res => {
        console.log(res.data);
        console.log('发送请求了');
    })
};