import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL:'http://www.ticketing-app-dev.xyz/',
      //baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      //baseURL: 'http://192.168.64.5',
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};
