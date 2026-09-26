import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styling/EventsList.scss";
import { fetchEvents } from "../store/action/actionCreator";

export default function EventsList() {

    const dispatch = useDispatch();

    const events = useSelector(
        (state) => state.eventReducer.events
    );

    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="events-list-component">
            <div className="events-list-component__container">

                <div className="events-list-component__title">
                    <h2>EVENTS</h2>
                </div>

                <div className="events-list-component__content">

                    {events.map((event, index) => (
                        <div
                            className="events-list-component__content-card"
                            key={event.id || index}
                            onClick={() => handleOpenModal(event)}
                        >

                            <div className="events-list-component__content-thumbnail">
                                <img
                                    src={event.thumbnail}
                                    alt={event.title}
                                />
                            </div>

                            <div className="events-list-component__content-title">
                                <h4>{event.title}</h4>
                            </div>

                            <div className="events-list-component__content-date">
                                <p>{event.date}</p>
                            </div>

                            <div className="events-list-component__content-link">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenModal(event);
                                    }}
                                >
                                    FIND OUT MORE
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {selectedEvent && (
                <div
                    className="events-list-component__modal-overlay"
                    onClick={handleCloseModal}
                >
                    <div
                        className="events-list-component__modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="events-list-component__modal-close"
                            type="button"
                            onClick={handleCloseModal}
                        >
                            ×
                        </button>

                        <div className="events-list-component__modal-image">
                            <img
                                src={selectedEvent.thumbnail}
                                alt={selectedEvent.title}
                            />
                        </div>

                        <div className="events-list-component__modal-content">

                            <h2>{selectedEvent.title}</h2>

                            <p className="events-list-component__modal-date">
                                {selectedEvent.date}
                            </p>

                            <div
                                className="events-list-component__modal-description"
                                dangerouslySetInnerHTML={{
                                    __html: selectedEvent.description
                                }}
                            />

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
