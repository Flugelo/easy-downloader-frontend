import EasyDownloaderApi from "../EasyDownloaderApi";

export function getVideoInformation(url){
    return EasyDownloaderApi.post('/video_info', 
        {url},
        { 
        headers: {
        'Content-Type': 'application/json', // Opcional para GET, se necessário
        }  
    })

}