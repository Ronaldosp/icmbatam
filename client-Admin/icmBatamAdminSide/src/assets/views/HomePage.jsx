import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchEvents , fetchAdmins } from "../store/action/actionCreator";

import "../styling/HomePage.scss";

export default function HomePage() {

    const dispatch = useDispatch();

    const events = useSelector(
        (state) => state.eventReducer.events
    ) || [];

    const admins = useSelector(
        (state) => state.adminReducer.admins
    ) || [];


    useEffect(() => {

        dispatch(fetchEvents());
        dispatch(fetchAdmins());
    }, [dispatch]);


    const today = new Date();

    const upcomingEvents = events
        .filter(
            (event) =>
                new Date(event.date) >= today
        )
        .sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    const recentEvents = events
        .slice()
        .reverse()
        .slice(0, 4);


    const formatDate = (date) => {

        return new Date(date).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

    };


    return (

        <div className="home-page">


            {/* =================================
                HEADER
            ================================= */}

            <div className="home-page__header">

                <div className="home-page__heading">

                    <h1>
                        Dashboard
                    </h1>

                    <p>
                        Welcome back, Admin. Here's an
                        overview of your ICM website.
                    </p>

                </div>

            </div>


            {/* =================================
                STATISTICS
            ================================= */}

            <div className="home-page__stats">


                <div className="home-page__stat-card">

                    <div className="home-page__stat-content">

                        <span className="home-page__stat-label">
                            Total Events
                        </span>

                        <strong className="home-page__stat-value">
                            {events.length}
                        </strong>

                    </div>

                    <div className="home-page__stat-icon">
                        📅
                    </div>

                </div>


                <div className="home-page__stat-card">

                    <div className="home-page__stat-content">

                        <span className="home-page__stat-label">
                            Total Users
                        </span>

                        <strong className="home-page__stat-value">
                            {admins.length}
                        </strong>

                    </div>

                    <div className="home-page__stat-icon">
                        👥
                    </div>

                </div>


                <div className="home-page__stat-card">

                    <div className="home-page__stat-content">

                        <span className="home-page__stat-label">
                            Upcoming Events
                        </span>

                        <strong className="home-page__stat-value">
                            {upcomingEvents.length}
                        </strong>

                    </div>

                    <div className="home-page__stat-icon">
                        🗓️
                    </div>

                </div>

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div className="home-page__content">


                {/* =================================
                    UPCOMING EVENTS
                ================================= */}

                <section className="home-page__section home-page__section--events">

                    <div className="home-page__section-header">

                        <div>

                            <h2>
                                Upcoming Events
                            </h2>

                            <p>
                                Your next scheduled events.
                            </p>

                        </div>

                        <a
                            href="/events"
                            className="home-page__view-all"
                        >
                            View All →
                        </a>

                    </div>


                    <div className="home-page__events">

                        {upcomingEvents
                            .slice(0, 4)
                            .map((event) => (

                                <div
                                    className="home-page__event"
                                    key={event.id}
                                >

                                    <img
                                        src={event.thumbnail}
                                        alt={event.title}
                                        className="home-page__event-image"
                                    />

                                    <div className="home-page__event-info">

                                        <h3>
                                            {event.title}
                                        </h3>

                                        <span>
                                            {formatDate(event.date)}
                                            {" • "}
                                            {event.venue}
                                        </span>

                                    </div>

                                </div>

                            ))}


                        {upcomingEvents.length === 0 && (

                            <div className="home-page__empty">
                                No upcoming events.
                            </div>

                        )}

                    </div>

                </section>


                {/* =================================
                    SIDE
                ================================= */}

                <div className="home-page__side">


                    {/* =================================
                        RECENT EVENTS
                    ================================= */}

                    <section className="home-page__section">

                        <div className="home-page__section-header">

                            <div>

                                <h2>
                                    Recent Events
                                </h2>

                                <p>
                                    Recently added events.
                                </p>

                            </div>

                        </div>


                        <div className="home-page__recent-events">

                            {recentEvents.map((event) => (

                                <div
                                    className="home-page__recent-event"
                                    key={event.id}
                                >

                                    <div className="home-page__recent-event-icon">
                                        📅
                                    </div>

                                    <div>

                                        <h3>
                                            {event.title}
                                        </h3>

                                        <span>
                                            {formatDate(event.date)}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* =================================
                        QUICK ACTIONS
                    ================================= */}

                    <section className="home-page__section">

                        <div className="home-page__section-header">

                            <div>

                                <h2>
                                    Quick Actions
                                </h2>

                                <p>
                                    Common administration tasks.
                                </p>

                            </div>

                        </div>


                        <div className="home-page__quick-actions">

                            <a
                                href="/events"
                                className="home-page__quick-action"
                            >

                                <span className="home-page__quick-action-icon">
                                    +
                                </span>

                                <div>

                                    <strong>
                                        Create Event
                                    </strong>

                                    <span>
                                        Add a new event
                                    </span>

                                </div>

                                <span className="home-page__quick-action-arrow">
                                    →
                                </span>

                            </a>


                            <a
                                href="/register"
                                className="home-page__quick-action"
                            >

                                <span className="home-page__quick-action-icon"
                                onClick={(e) => e.preventDefault()}
                                >
                                    +
                                </span>

                                <div>

                                    <strong>
                                        Add User
                                    </strong>

                                    <span>
                                        Create a new admin user
                                    </span>

                                </div>

                                <span className="home-page__quick-action-arrow"
                                onClick={(e) => e.preventDefault()}
                                >
                                    →
                                </span>

                            </a>

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
}

