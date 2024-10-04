import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Education() {
  return (
    <div className='education'>
      <VerticalTimeline lineColor='#C0A088'>
        <VerticalTimelineElement contentStyle={{backgroundColor: "#C0A088"}} >
          <h2>2017</h2>
          <h2>Willow Crescent Secondary School</h2>
          <p>
            During my 8th grade freshman year, I learnt about the core basics of being able to work under pressure and understanding how to meet deadlines.
            I also learnt leadership skills as I was the class representative, leading a class of 38 by example taught me the foundations of good leadership.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement contentStyle={{backgroundColor: "#C0A088"}} >
          <h2>2018 - 2021</h2>
          <h2>Hoerskool Westonaria</h2>
          <p>
              From 9th grade all the way to my final matric year, I learnt a good amount of skills that have set me up for life. These skills include:
              Public speaking
              Enhanced Leadership skills (became deputy head boy)
              Critical Thinking
              Basic Web Development
              Excel, Access, Word, and Powerpoint basics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement contentStyle={{backgroundColor: "#C0A088"}} >
          <h2>2022 - Current</h2>
          <h2>Willow Crescent Secondary School</h2>
          <p>
            Skills I learnt include: <br />
            Front-end Development Fundamentals <br />
            Java, PHP, and SQL foundations <br />
            Enhanced team work and collaboration <br />
            User-Interface and User-Experience (UI/UX) design basics.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
