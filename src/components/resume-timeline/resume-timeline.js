import React from 'react';
import './resume-timeline.scss';

function TimeLineItem({ item }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-time">
                <div className="timeline-item-time-start">
                    {item.startDate}
                </div>
                <div className="timeline-item-time-seperator">
                    -
                </div>
                <div className="timeline-item-time-end">
                    {item.endDate}
                </div>
            </div>
            <div className="timeline-item-detail">
                <h5 className="item-title">{item.title}</h5>
                <h6 className="item-location">{item.location}</h6>
                <p className="item-details">{item.details}</p>
            </div>
        </div>
    );
}

function ResumeTimeLine({ title, titleIcon, items}) {
    return (
        <div className="resume-timeline">
            <div className="title">
                <div className="titleIcon">
                {titleIcon}
                </div>
                <div className="titleText">{title}</div>
            </div>
            <div className="timeline-items">
                {
                    items.map(item => <TimeLineItem item={item} />)
                }
            </div>
        </div>
    );
}

export default ResumeTimeLine;
