import * as React from 'react'
import Timeline, { TimelineProps } from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import {
  IconInfoSquareRounded,
  IconMoonStars,
  IconSun,
  IconSunrise,
  IconSunset,
} from '@tabler/icons-react'

export type TimelineStepType = {
  children: React.ReactNode
  className?: string
}

export const IconType = ({ time }: { time: number }) => {
  if (time > 4 * 60 * 60 * 1000 && time < 10 * 60 * 60 * 1000)
    return <IconSunrise className="w-5 h-5" />
  if (time < 16 * 60 * 60 * 1000) return <IconSun className="w-5 h-5" />
  if (time < 20 * 60 * 60 * 1000) return <IconSunset className="w-5 h-5" />
  return <IconMoonStars className="w-5 h-5" />
}

const MyTimelineItem = ({
  children,
  className,
  time,
}: TimelineStepType & { time: number }) => {
  return (
    <TimelineItem
      classes={{ missingOppositeContent: 'before:hidden', root: 'p-0 py-2' }}
      className={`p-0 ${className}`}
    >
      <TimelineSeparator>
        <div className="p-1">
          <IconType time={time} />
        </div>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent classes={{ root: 'p-0 pl-1' }}>
        {children}
      </TimelineContent>
    </TimelineItem>
  )
}

const MyTimeline = ({ ref, ...props }: TimelineProps) => {
  return <Timeline {...props} classes={{ root: 'p-0' }} />
}

export { MyTimeline as Timeline, MyTimelineItem as TimelineItem }
