import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    console.log(res);
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username: '123123312331',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json',
    (req, res, ctx) => {
      console.log(res);
      return res(
        ctx.json({
          data: {
            people: [
              {
                name: '123123123123123',
                age: 135,
              },
              {
                name: 'timmy',
                age: 13,
              },
              {
                name: 'cindy',
                age: 15,
              },
              {
                name: 'judy',
                age: 25,
              },
              {
                name: 'marry',
                age: 64,
              },
              {
                name: 'tommy',
                age: 109,
              },
            ],
          },
        })
      );
    }
  ),
];
