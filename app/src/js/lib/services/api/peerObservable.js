import Rx from 'rxjs'

export default peer =>
  Rx.Observable.create((observer) => {
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        observer.next(data)
      })
    })
  })
