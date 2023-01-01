import React, { Component } from "react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Like from "./icons/like";
import Post from "./post";

import "./timeline.css";
import "react-vertical-timeline-component/style.min.css";

export default class Timeline extends Component {
    render() {
        return (
            <div className="timeline mt-3 pb-3">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work mx-0"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid rgb(33, 150, 243)",
                        }}
                        date="2011 - present"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<Like />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Creative Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Miami, FL
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design,
                            Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                        }}
                        date="2010 - 2011"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "gray",
                        }}
                        icon={<Like />}
                    >
                        <Post
                            userName="rua1hc"
                            image="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/322598553_691307885768534_7665704516941822530_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9Emr-Rbu5gsAX81G-NP&_nc_ht=scontent.fdad3-1.fna&oh=00_AfC4Pgh4jBpI61ksJH6ab90a3zSz7P5tMNNFMkyNeJH37w&oe=63B6F8CB"
                        />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        icon={<Like />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Content Marketing for Web, Mobile and Social Media
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Online Course
                        </h4>
                        <p>Strategy, Social Media</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        icon={<Like />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Agile Development Scrum Master
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Certification
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "limegreen",
                            color: "red",
                        }}
                        icon={<Like />}
                    />
                </VerticalTimeline>
                <Post userName="timeline__footer" />
            </div>
        );
    }
}
