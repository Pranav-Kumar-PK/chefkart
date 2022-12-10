import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import "./Table.css"
const dataSource = require("../data/data.json");

const DataTable = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [clickedId, setClickedId] = useState(0);
    const [className, setClassName] = useState("");

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            responsive: ["sm"]
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            sorter: (a, b) => a.first_name.localeCompare(b.first_name),
            responsive: ["sm"]
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            sorter: (a, b) => a.last_name.localeCompare(b.last_name),
            responsive: ["sm"]
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            responsive: ["sm"]
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => a.gender.localeCompare(b.gender),
            responsive: ["sm"]
        },
        {
            title: 'IP Address',
            dataIndex: 'ip_address',
            key: 'ip_address',
            sorter: (a, b) => a.ip_address.localeCompare(b.ip_address),
            responsive: ["sm"]
        },
        {
            title: 'Airport Code',
            dataIndex: 'airport_code',
            key: 'airport_code',
            sorter: (a, b) => a.airport_code.localeCompare(b.airport_code),
            responsive: ["sm"]
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => a.time.localeCompare(b.time),
            responsive: ["sm"]
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status),
            render(text, status) {
                console.log(status);
                return <span style={{ color: `${text === 'true' ? 'green' : 'red'}`, fontWeight: 700 }}>{text.toUpperCase()}</span>;
            },
            responsive: ["sm"]
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
            sorter: (a, b) => a.mobile.localeCompare(b.mobile),
            responsive: ["sm"]
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
            sorter: (a, b) => a.area.localeCompare(b.area),
            responsive: ["sm"]
        },
        {
            title: 'Show',
            dataIndex: 'show',
            key: 'show',
            sorter: (a, b) => a.show.localeCompare(b.show),
            render(text, status) {
                return <span style={{ color: `${text === 'true' ? 'green' : 'red'}`, fontWeight: 700 }}>{text.toUpperCase()}</span>;
            },
            responsive: ["sm"]
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            sorter: (a, b) => a.edit.localeCompare(b.edit),
            render(text, status) {
                return <span style={{ color: `${text === 'true' ? 'green' : 'red'}`, fontWeight: 700 }}>{text.toUpperCase()}</span>;
            },
            responsive: ["sm"]
        }
    ]
    const data = dataSource;

    const onRowClickHandler = (id) => {
        setClassName("ant-table-row-click");
        setClickedId(id);
    }
    console.log(isClicked);

    return (
        <div className='table__class'>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={data.id}
                    rowClassName={(record, index) => ((index === clickedId - 1) ? className : "")}
                    onRow={(record, index) => {
                        return {
                            onClick: (event) => {
                                console.log(record.id);
                                onRowClickHandler(record.id)

                            }
                        };
                    }}
                />
            </div>
        </div>
    )
}
export default DataTable;