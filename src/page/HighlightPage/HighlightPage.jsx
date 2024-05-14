import React from 'react'
import Today from '../../component/highlights/today/Today'
import Completed from '../../component/highlights/completed/Completed'
import Scheduled from '../../component/highlights/scheduled/Scheduled'

const HighlightPage = () => {
  return (
    <div>
    
    <div>
      <Today />
    </div>
      
      <div>
        <Completed />
      </div>

      <div>
        <Scheduled />
      </div>
    </div>
  )
}

export default HighlightPage
