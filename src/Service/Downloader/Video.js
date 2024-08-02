import EasyDownloaderApi from "../EasyDownloaderApi";

export function getVideoInformation(url) {
  return EasyDownloaderApi.post("/video_info", {url: url });
}

export function getUrlDonloadVideo(url, resolution, audio_only, audio_quality){
  return EasyDownloaderApi.post('/download', 
    {
      url: url,
      resolution: resolution,
      audio_only: audio_only,
      audio_quality: audio_quality
    })
}
