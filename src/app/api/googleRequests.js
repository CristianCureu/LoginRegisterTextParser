import { GOOGLE_API_URL } from '@env';

const generateBody = image => {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
};

const callGoogleVisionAsync = async image => {
  const body = generateBody(image); //pass in our image for the payload
  const response = await fetch(GOOGLE_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  const detectedText = result.responses[0].fullTextAnnotation;
  return detectedText
    ? detectedText
    : { text: "This image doesn't contain any text!" };
};

export default callGoogleVisionAsync;
