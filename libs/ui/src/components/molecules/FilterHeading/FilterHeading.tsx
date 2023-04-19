import { PulsingDot } from '../../atoms/Dot/Dot'

export interface IFilterHeadingProps {}

const FilterHeading = ({
  title,
  dirty = true,
}: {
  title: string
  dirty: boolean
}) => (
  <div className="relative inline-block text-xl font-semibold underline underline-offset-4">
    {dirty && <PulsingDot />}
    {title}
  </div>
)

export { FilterHeading }
