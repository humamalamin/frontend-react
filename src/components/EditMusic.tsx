import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
const EditMusic = () => {
    const [name, setName] = useState("");
    const [album, setAlbum] = useState("");
    const [album_art, setAlbumArt] = useState("");
    const [singer, setSinger] = useState("");
    const [publisher_date, setPublisherDate] = useState("");
    const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    getMusicById();
  }, []);
 
  const getMusicById = async () => {
    const response = await axios.get(`http://localhost:8080/musics/${id}`);
    setName(response.data.name);
    setAlbum(response.data.album);
    setAlbumArt(response.data.album_art);
    setSinger(response.data.singer);
    setPublisherDate(response.data.publisher_date);
  };
 
  const updateMusic = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("album", album);
    formData.append("album_art", album_art);
    formData.append("singer", singer);
    formData.append("publisher_date", publisher_date);
    try {
      await axios.put(`http://localhost:8080/musics/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateMusic}>
        <div className="field">
            <label className="label">Music Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Music Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Album</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                placeholder="Album"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Album Art</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={album_art}
                onChange={(e) => setAlbumArt(e.target.value)}
                placeholder="Album Art"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Singer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={singer}
                onChange={(e) => setSinger(e.target.value)}
                placeholder="Singer"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Publisher Date</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={publisher_date}
                onChange={(e) => setPublisherDate(e.target.value)}
                placeholder="Publisher Date"
              />
            </div>
          </div>
 
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditMusic;