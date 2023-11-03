import React from 'react'
import {RootStore} from  '../store/todo'
import {observe} from 'mobx'

const store = RootStore.create({
})

const Todo = (props) => {
  return (
    <div >Todo</div>
  )
}

export default observe(Todo)