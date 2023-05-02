import { WebView } from 'react-native-webview';
import { TEST_BASE_URL } from '@env';

const TermsConditions = () => {
  return (
    <WebView
      source={{
        uri: `${TEST_BASE_URL}/termeni-conditii`,
      }}
    />
  );
};

export default TermsConditions;
