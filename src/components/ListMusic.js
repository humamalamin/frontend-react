import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListMusic = () => {
    const [musics, setMusics] = useState([])

    useEffect(() => {
        getMusics();
    }, []);

    const getMusics = async () => {
        const response = await axios.get("http://localhost:8080/musics");
        setMusics(response.data);
    };

    const deleteMusic = async (musicId) => {
        try {
          await axios.delete(`http://localhost:8080/musics/${musicId}`);
          getMusics();
        } catch (error) {
          console.log(error);
        }
      };
     
      return (
        <div className="container mt-5">
          <Link to="/add" className="button is-success">
            Add New
          </Link>
          <div className="columns is-multiline mt-2">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Album</th>
                        <th>Album Art</th>
                        <th>Singer</th>
                        <th>Publisher Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {musics.map((music) => (
                        <tr>
                            <td>{music.name}</td>
                            <td>{music.album}</td>
                            <td>{music.album_art}</td>
                            <td>{music.singer}</td>
                            <td>{music.publisher_date}</td>
                            <td>
                                <Link to={`edit/${music.id}`} className="card-footer-item">
                                    Edit
                                </Link>
                                <a onClick={() => deleteMusic(music.id)} className="card-footer-item">
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      );
    };
     
export default ListMusic;