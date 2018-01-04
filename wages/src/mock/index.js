import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Circle from './data/shouyeCircle'
import ListInfo from './data/shouyeMenList'
import Worker from './data/worker'
export default {
  bootstrap () {
    const mock = new MockAdapter(axios)
    mock.onGet('/getCircle').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, Circle])
      })
    })
    mock.onGet('/getList').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, ListInfo])
      })
    })
    mock.onGet('/getWorker').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, Worker])
      })
    })
  }
}
