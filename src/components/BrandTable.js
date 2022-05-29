import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentsCss/custom.css';
import 'font-awesome/css/font-awesome.min.css';


function BrandTable({ brand }) {
    const { models } = brand;
    return (
        <div className="brand-section col-md-5 mr-auto d-flex flex-column">
            <h2>Car brand:
                <span>{brand.name}</span>
            </h2>
            {getRows(models)}

        </div>);
}

function getRows(models) {
    if (models.length === 0) {
        return <div></div>;
    }
    return (
        <div>Models:
            <table >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Start Year</th>
                        <th>End Year</th>
                        <th>Picture</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {models.map((model, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{model.name}</td>
                                <td>{model.category}</td>
                                <td>{model.startYear}</td>
                                <td>{model.endYear}</td>
                                <td><img alt="image" src={model.imageUrl}
                                    className="img-thumbnail rounded" /></td>
                                <td>
                                    <ul className="list-inline m-2">
                                    <li className="list-inline-item m-1">
                                        <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                    </li>
                                    <li className="list-inline-item m-1">
                                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                    </li>
                                </ul>
                            </td>
                            </tr>
                );
                    })}
            </tbody>

        </table>
        </div >
    );
}



export default BrandTable;