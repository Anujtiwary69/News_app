const apiHost = 'http://beta.economistdubai.com'
export default{
    async getDataFromApiAsync(){
        try{
            const response =  await fetch(apiHost + '/api/?id='+Math.random());
            const responseJson = await response.json();
            return responseJson;
        } catch(error){
            console.error(error);
        }
    },
    async getDataFromApiByIdAsync(id){
        try{
            const response =  await fetch(apiHost + '/api/index.php/Welcome/getNewsByID?id='+id+'&rand='+Math.random());
            console.log(apiHost + '/api/index.php/Welcome/getNewsByID?id='+id+'&rand='+Math.random());
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch(error){
            console.error(error);
        }
    },
    async getDataFromApiAsyncbyLimit(id){
        try{
            const response =  await fetch(apiHost + '/api/?limit='+id+'&rand='+Math.random());
            // console.log(apiHost + '/api/index.php/Welcome/getNewsByID?id='+id+'&rand='+Math.random());
            const responseJson = await response.json();
            return responseJson;
        } catch(error){
            console.error(error);
        }
    },
    async getFeaturedData(){
        try{
            const response =  await fetch(apiHost + '/api/index.php/Welcome/getFeaturesPost?random='+Math.random());
            // console.log(apiHost + '/api/index.php/Welcome/getNewsByID?id='+id+'&rand='+Math.random());
            const responseJson = await response.json();
            return responseJson;
        } catch(error){
            console.error(error);
        }
    },
    async getDataByCategory(keyword){
        try{
            console.log(apiHost + '/api/index.php/Welcome/getDataByCategory?keyword='+keyword+'&random='+Math.random());
            const response =  await fetch(apiHost + '/api/index.php/Welcome/getDataByCategory?keyword='+keyword+'&random='+Math.random());
            // console.log(apiHost + '/api/index.php/Welcome/getNewsByID?id='+id+'&rand='+Math.random());
            const responseJson = await response.json();
            return responseJson;
        } catch(error){
            console.error(error);
        }
    }
}