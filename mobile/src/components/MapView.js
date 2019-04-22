import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default ({ longitude, latitude }) => {
  const DEFAULT_URL = `<div style="width: 100%, min-height: 400px"><iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=${latitude},${longitude}&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><br />`;

  return (
    <View style={{ width: '100%', height: 400 }}>
      <WebView
        automaticallyAdjustContentInsets={false}
        source={{
          html: `
                  <!DOCTYPE html>
                  <html>
                   
                    <body>
                      <div id="baseDiv">${DEFAULT_URL}</div>
                    </body>
                  </html>
            `,
        }}
        javaScriptEnabled
        domStorageEnabled
        decelerationRate="normal"
        startInLoadingState
      />
    </View>
  );
};
