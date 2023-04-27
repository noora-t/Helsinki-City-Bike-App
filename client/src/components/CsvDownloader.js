import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

export const CsvDownloader = () => {
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

    const changeHandler = async e => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        try {
            let count = 0;
            Papa.parse(e.target.files[0], { // parser.abort(), parser.pause(), parser.resume()
                header: true,
                skipEmptyLines: true,
                download: true,
                step: function(row, parser) {                  
                    if ((Number)(row.data["Covered distance (m)"]) > 10 && (Number)(row.data["Duration (sec.)"]) > 10) {
                        console.log("Row:", row.data);
                        importData(row.data);
                        count++;
                        if (count > 10)
                            parser.pause();
                    }
                },
                complete: function() {
                    console.log("All done!");
                }
            });
        } catch (err) {
            console.log(err);
        }   
    };

    const importData = async (data) => {
        const res = await axios.post("http://localhost:8800/journeys", data);
        console.log(res.data);
    };

    return (
        <div>
            {/* File Uploader */}
            <input
                type="file"
                name="file"
                accept=".csv"
                onChange={changeHandler}
                style={{ display: "block", margin: "10px auto" }}
            />

            <br />
            <br />
            {/* Table */}
            <table>
                <thead>
                    <tr>
                        {tableRows.map((rows, index) => {
                            return <th key={index}>{rows}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {values.map((value, index) => {
                        return (
                        <tr key={index}>
                            {value.map((val, i) => {
                                return <td key={i}>{val}</td>;
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}