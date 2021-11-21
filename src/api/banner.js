import request from './request';
 async function getBanner(){
    return await request.get("/api/banner");
}

export default getBanner;
