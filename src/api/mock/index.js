import MockAdapter from 'axios-mock-adapter';

export const usersMock = (axiosObj) => {
  var mock = new MockAdapter(axiosObj);

  console.log("userMock");

  mock.onGet('/users').reply(200,
    [
      { id: 1, name: 'John Smith' },
      { id: 2, name: 'Daniel Craig' },
      { id: 3, name: 'Eva Green' },
    ],
  );

  mock.onGet('/friends/1').reply(200,
    [{ id: 2, name: 'Daniel Craig' }]
  );
  mock.onGet('/friends/2').reply(200,
    [
      { id: 1, name: 'John Smith' },
      { id: 3, name: 'Eva Green' },
    ]
  );
  mock.onGet('/friends/3').reply(200, [{ id: 2, name: 'Daniel Craig' }]);
};

export const groupsMock = (axiosObj) => {
  var mock = new MockAdapter(axiosObj);

  mock.onGet('/groups').reply(200,
    [
      { id: 1, name: 'Geeks' },
      { id: 2, name: 'Actors' },
      { id: 3, name: 'Eva Green Fans' },
    ]
  );
  mock.onGet('/group/1/members').reply(200,
    [{ id: 2, name: 'Daniel Craig' }]
  );
  mock.onGet('/group/2/members').reply(200,
    [
      { id: 2, name: 'Daniel Craig' },
      { id: 3, name: 'Eva Green' },
    ]
  );
  mock.onGet('/group/3/members').reply(200,
    [{ id: 3, name: 'Eva Green' }]
  );
};

export const messagesMock = (axiosObj) => {
  var mock = new MockAdapter(axiosObj);

  mock.onGet('/messages/from/1').reply(200,
    [
      {
        from: 1,
        to: 2,
        content: 'Geeks Sucks!!!',
        sendDate: new Date('2021-12-17T03:24:00'),
      },
      {
        from: 1,
        to: 2,
        content: 'LOL',
        sendDate: new Date('2021-12-17T03:27:05'),
      },
    ]
  );
  mock.onGet('/messages/from/2').reply(200,
    [
      {
        from: 2,
        to: 1,
        content: 'WTF?!!',
        sendDate: new Date('2021-12-17T03:27:00'),
      },
      {
        from: 2,
        to: 3,
        content: 'What about your fan group?',
        sendDate: new Date('2021-12-18T13:27:00'),
      },
    ]
  );
  mock.onGet('/messages/from/3').reply(200,
    [
      {
        from: 3,
        to: 1,
        content: 'Good idea) Thx',
        sendDate: new Date('2021-12-18T13:29:00'),
      },
    ]
  );
};
