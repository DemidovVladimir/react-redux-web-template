// userApi.js
import 'isomorphic-unfetch';
export const fetchPostsAPI = () => fetch(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/crossroad-zyama/service/crossroad/incoming_webhook/getusers`);