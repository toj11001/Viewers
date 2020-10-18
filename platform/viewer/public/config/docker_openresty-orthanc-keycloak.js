window.config = {
  routerBasename: '/',
  showStudyList: true,
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [
      {
        name: 'Orthanc',
        wadoUriRoot: 'http://104.197.232.95/orthanc/wado',
        qidoRoot: 'http://104.197.232.95/orthanc/dicom-web',
        wadoRoot: 'http://104.197.232.95/orthanc/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        // REQUIRED TAG:
        // TODO: Remove tag after https://github.com/OHIF/ohif-core/pull/19 is merged and we bump version
        requestOptions: {
          // undefined to use JWT + Bearer auth
          auth: 'admin:$grc.2020!',
          logRequests: true,
          logResponses: false,
          logTiming: true,
        },
      },
    ],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'https://dicom.eu.auth0.com/',
      client_id: 'bwCfAW9uQSA4kW9dzMBNzzJdMWNslxSy',
      client_secret:
        'gzv5RZwbPpSeIVgUzMszx24NlK8R8oZObveY67V-PzcmfmVRJmx_-QDGyXbjftMv',
      redirect_uri: 'https://viewer.germanoncologycenter.de/callback', // `OHIFStandaloneViewer.js`
      response_type: 'authorization_code', // "Authorization Code Flow"
      scope: 'openid email profile', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
};
