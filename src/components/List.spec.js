import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import List from './List'
import Employee from './Employee';


const setup = () => {
  const props={
      employees:
      [
        {
            "id": "2cb362a8-5f10-4b6e-bb68-fd202c338b13",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spedwig/128.jpg",
            "firstName": "Levi",
            "lastName": "Hessel",
            "jobTitle": "Investor Applications Executive",
            "age": 20,
            "bio": "Qui possimus consequuntur quas aut ut. Unde officiis sapiente similique ut aliquam dolore. Explicabo doloremque esse magnam natus fugiat. Facere excepturi dolores qui numquam ut quia non fugiat. Nulla non laudantium est temporibus vel autem.",
            "dateJoined": "2017-12-09T13:56:53.175Z"
        },
        {
            "id": "20fc2c9a-33a6-4c57-97a4-4d415bd46f52",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nicollerich/128.jpg",
            "firstName": "Zac",
            "lastName": "Thomson",
            "jobTitle": "Senior Accountability Assistant",
            "age": 65,
            "bio": "Fuga ducimus sint sint alias id sit accusamus deserunt. Blanditiis quia natus ut perferendis ipsam ipsum maiores suscipit. Doloremque deserunt magni doloribus. Laudantium molestias accusamus distinctio molestias temporibus.",
            "dateJoined": "2014-06-28T00:50:48.530Z"
        }
    ]
};
  

  const renderer = createRenderer();
  renderer.render(<List {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components', () => {
  describe('List', () => {
    it('should render List', () => {
      const { output } = setup()
      expect(output.type).toBe('div')
    })

    it('should render employees', () => {
      const { output, props } = setup()
      //should be 3
      expect(output.props.children.props.children.length).toBe(3)

      //expect(output.props.children.props.children.length).toBe(2)
    //   output.props.children.forEach((employee, i) => {
    //     expect(employee.type).toBe(Employee)
    //     expect(Number(employee.key)).toBe(props.employees[i].id)
    //     expect(employee.props.todo).toBe(props.employees[i])
    //   })
    })
  })
})
