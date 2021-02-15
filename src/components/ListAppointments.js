import React from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

function ListAppointments(props) {
    return(
        <div>
            <h1>List Appointments</h1>
            <div className="appointment-list item-list mb-3" >
            {props.appointments.map(item => (
                <div className="pet-item col media py-3" key={item.index}>
                    <div className="mr-3">
                    <button className="pet-delete btn btn-sm btn-danger"
                        onClick={() => props.deleteAppointment(item)}><FaTimes/></button>
                    </div>

                    <div className="pet-info media-body">
                    <div className="pet-head d-flex">
                    <span className="pet-name" contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => props.updateInfo('petName', e.target.innerText, item.index)}
                        >{item.petName}</span>
                        <span className="apt-date ml-auto">
                            <Moment date={item.aptDate} parse="YYYY-MM-dd hh:mm" format="MMM D h:ma">

                            </Moment>
                        </span>
                    </div>

                    <div className="owner-name">
                        <span className="label-item">Owner: </span>
                        <span contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => props.updateInfo('ownerName', e.target.innerText, item.index)}>{item.ownerName}</span>
                    </div>
                    <div className="apt-notes" contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => props.updateInfo('aptNotes', e.target.innerText, item.index)}>{item.aptNotes}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ListAppointments;