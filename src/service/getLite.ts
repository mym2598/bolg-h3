import request from '@/utils/request';
import axios from 'axios';
export async function getLite() {
  return request('/getList');
}
/*
* {
    method: 'POST',
    data: params,
  }
* */
