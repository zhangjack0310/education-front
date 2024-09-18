import fetch from './fetch'
export default {
  test_req(data) {
    return fetch({
      method: 'GET',
      url: '/',
      data: data
    })
  },
  get_student(data) {
    return fetch({
      method: 'GET',
      url: 'student_info/',
      data: data
    })
  },
  insert_student(data) {
    console.log('post')
    return fetch({
      method: 'POST',
      url: 'student_info/',
      data: data
    })
  },




}
