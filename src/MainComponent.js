import React from 'react'
import AuthorComponent from './AuthorComponent'
import ListComponent from './ListComponent'
import LDComponent from './LDComponent' 

export const MainComponent = () => {
  return (
    <div>
        <article> <h1>Steve Polge </h1>
        <hr></hr>
<AuthorComponent />
<h1>Video game credits</h1>
<hr></hr>
<ListComponent />
<LDComponent />
</article>

    </div>
  )
}
