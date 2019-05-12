import 'isomorphic-unfetch';

export const fetchPostsEndpoint = () => fetch(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/crossroad-zyama/service/crossroad/incoming_webhook/getusers`);

export const fileUploadEndpoint = (picture, bucket, fileName, fileType) => fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/crossroad-zyama/service/crossroad/incoming_webhook/postpicture', {
    method: "POST",
    headers: {
        "Content-Type": "multipart/form-data"
    },
    body: JSON.stringify({
        picture,
        bucket,
        fileName,
        fileType
    })
});