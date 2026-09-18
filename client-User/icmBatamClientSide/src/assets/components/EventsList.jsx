import { useState , useEffect } from "react";
import "../styling/EventsList.scss";

export default function EventsList() {

    const events = [
        {
            image: "https://wallpapershome.com/images/pages/ico_h/5708.jpg",
            title: "Kalender Korporat 2026",
            date: "1 January 2026",
            link: ""
        },
        {
            image: "https://i.pinimg.com/originals/5c/c0/e0/5cc0e0cfe31cee258dd346b7a249a894.jpg",
            title: "CLC Gathering",
            date: "5 September 2026",
            link: ""
        },
        {
            image: "https://w0.peakpx.com/wallpaper/360/141/HD-wallpaper-christian-christian-worship.jpg",
            title: "SPK PEMENANG - Periode 2 - 2026",
            date: "13 September 2026",
            link: ""
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqiiUyCHpWc6wknAHoT3aISksfB9GfKStKv0EAymr1uEFjsVe52wrIg7Q&s=10",
            title: "COMPASSION",
            date: "5 September 2026",
            link: ""
        }
    ];

    const [selectedEvent, setSelectedEvent] = useState(null);

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
                            key={index}
                            onClick={() => handleOpenModal(event)}
                        >

                            <div className="events-list-component__content-thumbnail">
                                <img
                                    src={event.image}
                                    alt=""
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
                                    onClick={() => handleOpenModal(event)}
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
                                src={selectedEvent.image}
                                alt=""
                            />
                        </div>

                        <div className="events-list-component__modal-content">

                            <h2>{selectedEvent.title}</h2>

                            <p className="events-list-component__modal-date">
                                {selectedEvent.date}
                            </p>

                            <p className="events-list-component__modal-description">
                                {selectedEvent.description}
                            </p>

                        </div>

                    </div>

                </div>

            )}    

        </div>
    );
}