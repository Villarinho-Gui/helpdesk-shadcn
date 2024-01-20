import { Helmet } from 'react-helmet-async'
import { useQuery } from 'react-query'

import { getHelpDesk } from '@/api/get-helpdesk'
import { HelpDeskFilter } from '@/components/helpdesk-filter'

import { HelpDeskDetail } from './helpdesk-detail'

export function HelpDesks() {
  const { data } = useQuery({
    queryKey: ['helpdesk'],
    queryFn: getHelpDesk,
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <Helmet title="HelpDesks" />
      <div className="sticky left-0 right-0 top-14 flex h-20 justify-center space-y-3">
        <HelpDeskFilter />
      </div>
      {data &&
        data.length > 0 &&
        data.map((helpdesk) => (
          <div className="flex flex-col items-center" key={helpdesk.id}>
            <HelpDeskDetail
              id={helpdesk.id}
              author={helpdesk.user.name}
              category={helpdesk.category}
              description={helpdesk.description}
              title={helpdesk.title}
              file={helpdesk.files}
            />
          </div>
        ))}
    </>
  )
}
