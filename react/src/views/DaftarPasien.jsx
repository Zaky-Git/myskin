import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosClient from "../../axios-client.js";

const DaftarPasien = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosClient
            .get("/users")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the patients data!",
                    error
                );
            });
    }, []);

    return (
        <div className="dashboard-content">
            <div className="card-custom shadow-xl p-3 mt-4">
                <h3 className="font-bold">
                    Pasien
                    <hr />
                </h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="col-2">Tanggal Daftar</th>
                            <th className="col-2">Nama Lengkap</th>
                            <th className="col-2">Email</th>
                            <th className="col-2">Nomor Telepon</th>
                            <th className="col-2">Umur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {new Date(
                                        item.created_at
                                    ).toLocaleDateString()}
                                </td>
                                <td>
                                    {item.firstName} {item.lastName}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>
                                    {new Date().getFullYear() -
                                        new Date(item.birthdate).getFullYear()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DaftarPasien;
