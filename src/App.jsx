import "./App.css";
import Layout from "./components/Layout";
import "./index.css";
import {
  CheckIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "./components/Icons";
import TypingEffect from "./components/TypingEffect";
import { useState } from "react";
import { getVideoInformation } from "./Service/Downloader/Video";

function App() {
  const[url, setUrl] = useState(null);
  const[responseBody, setResponseBody] = useState({});

  const handleSearch = (event) => {
    event.preventDefault();

    // if(url == null || url == '')
    //   return;

    getVideoInformation(url).then(res => {
      setResponseBody(res.data)
      console.log(responseBody);
    })
  }

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen bg-background text-foreground text-cyan-300 bg-gray-800 inline-grid overflow-auto">
          <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
              <div className="space-y-4 justify-between">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Download Videos Easily
                </h1>
                <p className="text-muted-foreground text-lg">
                  <TypingEffect text="Doownload videos from YouTube, Instagram, and Twitter with
                  ease."/>
                </p>
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Enter video link"
                    value={url}
                    required
                    onChange={(e) => setUrl(e.value)}
                    className="flex-1 bg-gray-800 text-cyan-300 border border-cyan-200 px-4 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-cyan-700 text-white py-2 px-4 mt-2 sm:mt-0"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-cyan-200">
                <img
                  src="https://i.ytimg.com/vi/Xs0Lxif1u9E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOogVmx2tA3iRznCfYrNWgovcbng"
                  alt="Download videos"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-cyan-300">
                  <h2 className="text-lg md:text-1x">
                    Canal - Título do video
                  </h2>
                  <p className="text-sm md:text-base">
                    Visualizações | Likes | Tempo
                  </p>
                  <hr className="border-t-2 border-cyan-300 my-3" />
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <select
                      name="resolution"
                      id="resolution"
                      className="bg-gray-800 text-cyan-300 border border-cyan-200 px-3 py-1 text-sm md:text-base"
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
            </div>
          </main>
          <section className="left-0 w-full bg-muted py-12 px-4 md:px-6 lg:px-8 bg-cyan-700 mt-[100px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-muted-foreground">
                  Our video downloader makes it easy to save videos from your
                  favorite platforms. Simply enter the link and click download.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      downloder@f.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <TwitterIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      @downloder.f
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      @downlaoder.f
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    Download videos from YouTube, Instagram, and Twitter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    High-quality video downloads
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    Easy to use interface
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    No ads or hidden fees
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default App;
