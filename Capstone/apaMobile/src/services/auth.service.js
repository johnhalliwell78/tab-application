import {Api, Constants, Config} from '@/commons';

export const logOut = () => {
  //
};


export const signIn = (email, password) => {
  // Todo login here
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve({
        token: 'FakeToken',
        uId: 'FakeUserId',
      }),
      1000
    );
  });
};
