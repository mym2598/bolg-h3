// import {list} from '@/service/dva'
//
// export default {
//   namespace: 'products',
//   state: {
//     list:'',
//   },
//   effects:{
//     *list({payload,callback}:any,{put,call}:any){
//       console.log(payload,callback,put,call)
//       const response = yield call(list,payload)
//       yield put({
//         type:'listInfo',
//         payload:response
//       })
//     }
//   },
//   reducers: {
//     'listInfo'(state:any, action:any) {
//       return {
//         ...action,
//         list:action.payload
//       }
//     },
//   },
// };
