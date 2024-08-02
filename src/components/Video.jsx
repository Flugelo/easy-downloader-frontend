import { useState } from "react";
import { getUrlDonloadVideo } from "../Service/Downloader/Video";

export default function Video({ data, url }) {
  const [resolution, setResolution] = useState('1080p');
  const [audioOnly, setAudioOnly] = useState(false);
  const [audioQuality, setAudioQuality] = useState("highest");

  const handleDownload = (event) => {
    event.preventDefault();

    getUrlDonloadVideo(url, resolution, audioOnly, audioQuality).then((res) => {
      console.log(res.data);
    });
  };

  const handleResolutionChange = (e) => {
    const selectedValue = e.target.value;
    setResolution(selectedValue);
    selectedValue === "audio" ? setAudioOnly(true) : setAudioOnly(false);
  };

  if (Object.keys(data).length !== 0)
    return (
      <form onSubmit={handleDownload}>
        <div className="relative rounded-lg overflow-hidden border border-cyan-200">
          <img
            src={data.thumbnail}
            alt="Download videos"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-cyan-300">
            <h2 className="text-lg md:text-1x">
              {data.author} - {data.title}
            </h2>
            <p className="text-sm md:text-base">
              {parseInt(data.views).toLocaleString("pt-BR")} |{" "}
              {data.rating ?? "Without"} | {formatDate(data.publish_date)}
            </p>
            <hr className="border-t-2 border-cyan-300 my-3" />
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <select
                name="resolution"
                id="resolution"
                className="bg-gray-800 text-cyan-300 border border-cyan-200 px-3 py-1 text-sm md:text-base"
                value={resolution}
                onChange={handleResolutionChange}
              >
                <option value="1080p">1080p</option>
                <option value="720p">720p</option>
                <option value="360p">360p</option>
                <option value="144p">144p</option>
                <option value="audio">Audio</option>
              </select>
              <button
                type="submit"
                className="bg-gray-800 text-cyan-300 border border-cyan-200 px-4 py-2 text-sm md:text-base"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </form>
    );
}

function formatDate(dateString) {
  // Cria um objeto Date a partir da string no formato YYYY-MM-DD
  const date = new Date(dateString);

  // Obtém o dia, o mês e o ano
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
  const year = date.getFullYear();

  // Retorna a data formatada
  return `${day}/${month}/${year}`;
}
