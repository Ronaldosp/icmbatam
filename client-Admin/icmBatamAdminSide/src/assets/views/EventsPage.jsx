import { useState, useEffect, useRef  } from "react";

import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

import Quill from "quill";
import "quill/dist/quill.snow.css";

import {
    fetchEvents,
    createEvents,
    editEvents,
    deleteEvents
} from "../store/action/actionCreator";

import "../styling/EventsPage.scss";

export default function EventsPage() {
    const dispatch = useDispatch();

    const events = useSelector(
        (state) => state.eventReducer.events
    ) || [];

    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        thumbnail: "",
        venue: "",
        description: ""
    });

    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    // =========================
    // QUILL EDITOR
    // =========================

    useEffect(() => {
        if (!showModal || !quillRef.current) return;

        const quill = new Quill(quillRef.current, {
            theme: "snow",
            modules: {
                toolbar: [
                    [{ header: [2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"]
                ]
            },
            placeholder: "Write an event description..."
        });

        quillInstance.current = quill;

        quill.on("text-change", () => {
            setFormData((prev) => ({
                ...prev,
                description: quill.root.innerHTML
            }));
        });

        return () => {
            quillInstance.current = null;
        };
    }, [showModal]);

    useEffect(() => {
        if (!quillInstance.current) return;

        const currentHTML =
            quillInstance.current.root.innerHTML;

        const newHTML =
            formData.description || "";

        if (currentHTML !== newHTML) {
            quillInstance.current.root.innerHTML =
                newHTML;
        }
    }, [formData.description]);

    // =========================
    // FETCH EVENTS
    // =========================

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    // =========================
    // INPUT CHANGE
    // =========================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // =========================
    // RESET FORM
    // =========================

    const resetForm = () => {
        setFormData({
            title: "",
            date: "",
            thumbnail: "",
            venue: "",
            description: ""
        });

        setEditingEvent(null);

        if (quillInstance.current) {
            quillInstance.current.setText("");
        }
    };

    // =========================
    // OPEN ADD MODAL
    // =========================

    const handleOpenAddModal = () => {
        resetForm();
        setShowModal(true);
    };

    // =========================
    // OPEN EDIT MODAL
    // =========================

    const handleOpenEditModal = (event) => {
        setEditingEvent(event);

        setFormData({
            title: event.title || "",

            date: event.date
                ? event.date.split("T")[0]
                : "",

            thumbnail: event.thumbnail || "",

            venue: event.venue || "",

            description: event.description || ""
        });

        setShowModal(true);
    };

    // =========================
    // CLOSE MODAL
    // =========================

    const handleCloseModal = () => {
        setShowModal(false);
        resetForm();
    };

    // =========================
    // SUBMIT
    // =========================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingEvent) {
                await dispatch(
                    editEvents(
                        editingEvent.id,
                        formData
                    )
                );
            } else {
                await dispatch(
                    createEvents(formData)
                );
            }

            handleCloseModal();

        } catch (error) {
            console.log(error);

            Swal.fire({
                title: "Error",
                text: "Something went wrong.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    // =========================
    // DELETE
    // =========================

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Delete Event?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Cancel",
            reverseButtons: true
        });

        if (!result.isConfirmed) return;

        try {
            await dispatch(
                deleteEvents(id)
            );

            await Swal.fire({
                title: "Deleted!",
                text: "The event has been deleted successfully.",
                icon: "success",
                confirmButtonText: "OK"
            });

        } catch (error) {
            console.log(error);

            Swal.fire({
                title: "Error",
                text: "Failed to delete the event.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    return (
        <div className="events-page">

            {/* HEADER */}

            <div className="events-page__header">

                <div className="events-page__heading">

                    <h1>
                        Events
                    </h1>

                    <p>
                        Manage and organize your church events.
                    </p>

                </div>

                <button
                    className="events-page__add-button"
                    onClick={handleOpenAddModal}
                >
                    <span>+</span>
                    Add Event
                </button>

            </div>


            {/* TABLE */}

            <div className="events-page__table-container">

                <table className="events-page__table">

                    <thead>

                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Venue</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {events.length > 0 ? (

                            events.map((event) => (

                                <tr key={event.id}>

                                    {/* EVENT */}

                                    <td>

                                        <div className="events-page__event">

                                            <img
                                                src={event.thumbnail}
                                                alt={event.title}
                                            />

                                            <span className="events-page__event-title">
                                                {event.title}
                                            </span>

                                        </div>

                                    </td>


                                    {/* DATE */}

                                    <td>

                                        <span className="events-page__date">

                                            {new Date(
                                                event.date
                                            ).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                }
                                            )}

                                        </span>

                                    </td>


                                    {/* VENUE */}

                                    <td>

                                        <span className="events-page__venue">
                                            {event.venue}
                                        </span>

                                    </td>


                                    {/* DESCRIPTION */}

                                    <td>

                                        <div
                                            className="events-page__description"
                                            dangerouslySetInnerHTML={{
                                                __html: event.description || ""
                                            }}
                                        />

                                    </td>


                                    {/* ACTIONS */}

                                    <td>

                                        <div className="events-page__actions">

                                            <button
                                                className="events-page__action events-page__action--edit"
                                                type="button"
                                                onClick={() =>
                                                    handleOpenEditModal(event)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="events-page__action events-page__action--delete"
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(event.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="events-page__empty"
                                >
                                    No events available.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>


            {/* MODAL */}

            {showModal && (

                <div
                    className="events-page__modal-overlay"
                    onClick={handleCloseModal}
                >

                    <div
                        className="events-page__modal"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        {/* MODAL HEADER */}

                        <div className="events-page__modal-header">

                            <div>

                                <h2>
                                    {editingEvent
                                        ? "Edit Event"
                                        : "Create Event"
                                    }
                                </h2>

                                <p>
                                    {editingEvent
                                        ? "Update the event information below."
                                        : "Add a new church event."
                                    }
                                </p>

                            </div>

                            <button
                                type="button"
                                className="events-page__modal-close"
                                onClick={handleCloseModal}
                            >
                                ×
                            </button>

                        </div>


                        {/* FORM */}

                        <form
                            className="events-page__form"
                            onSubmit={handleSubmit}
                        >

                            {/* TITLE */}

                            <div className="events-page__form-group">

                                <label htmlFor="title">
                                    Event Title
                                </label>

                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="e.g. Sunday Service"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* DATE */}

                            <div className="events-page__form-group">

                                <label htmlFor="date">
                                    Date
                                </label>

                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* THUMBNAIL */}

                            <div className="events-page__form-group">

                                <label htmlFor="thumbnail">
                                    Thumbnail URL
                                </label>

                                <input
                                    id="thumbnail"
                                    name="thumbnail"
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    value={formData.thumbnail}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* VENUE */}

                            <div className="events-page__form-group">

                                <label htmlFor="venue">
                                    Venue
                                </label>

                                <input
                                    id="venue"
                                    name="venue"
                                    type="text"
                                    placeholder="e.g. ICM Batam"
                                    value={formData.venue}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* DESCRIPTION */}

                            <div className="events-page__form-group">

                                <label htmlFor="description">
                                    Description
                                </label>

                                <div
                                    ref={quillRef}
                                    className="events-page__editor"
                                />

                            </div>


                            {/* ACTIONS */}

                            <div className="events-page__form-actions">

                                <button
                                    type="button"
                                    className="events-page__cancel-button"
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="events-page__submit-button"
                                >
                                    {editingEvent
                                        ? "Save Changes"
                                        : "Create Event"
                                    }
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
}