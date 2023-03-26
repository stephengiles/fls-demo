export const displayAdCaptureConfig = {

  DISPLAY_ADS_POLLING_INTERVAL: 3000,

  DISPLAY_ADS_MIN_WIDTH: 40,

  DISPLAY_ADS_MIN_HEIGHT: 40,

  DISPLAY_ADS_HEIGHT_AND_AREA: [20, 120],

  DATASET_OBSCURER: 'h7r',

  FRAME_INFO_EXCLUSIONS: 'id, context, documentId,  frameHeirarchy, origin, frameType, parentDocumentId, tab',

  SLOT_BORDER_CSS: 'solid 2px orange',

  SLOT_LABEL_CSS: 'font: 15px sans-serif; background:orange !important; padding: 4px; position:absolute; top:0px; left:0px; color:white',

  SITE_LINK_BORDER_CSS: 'solid 2px darkgreen',

  SITE_LINK_LABEL_CSS: 'font: 15px sans-serif; background:darkgreen !important; padding: 4px; position:absolute; top:0px; left:0px; color:white',

  SPONSORED_AD_PATH_FRAGMENTS: ['/ad/', '/ads/', '/vpn', 'vpn/', '/promotion/', '/promotions/'],

  LINK_IGNORE_DOMAINS: `
  amung.us
  calendar.google
  chatango.com
  disqus.com
  /download/
  facebook.com
  imdb.com
  javascript:
  stats.in.th
  instiengage
  ibb.co
  /privacy
  quantserve
  reddit.com
  image.tmdb
  track.adform
  twitter.com
  whythisad 
  `.trim().split('\n').map(string => string.trim()),

  ADTEXT_EXCLUSIONS: `
              Ads by 
              Ad closed by
              Ad covered content
              Ad options
              Ad served by
              Ad was inappropriate
              Learn More
              Not interested in this ad
              Personalize ads on this site
              Seen this ad multiple times
              Send feedback
              Share
              Stop seeing this ad
              Subscribers
              Thanks. Feedback improves Google ads
              Watch on
              We'll try not to show that ad again
              Why this ad?
              Privacy Policy
              Subscribers

            `.trim().split('\n').map(string => string.trim()),

  COMMON_INTERMEDIARIES_LOOKUP: {
    adcovery: 'Adcovery',
    bannersnack: 'Creatopy',
    cloudfront: false,
    mgid: 'MGID',
    outbrain: 'Outbrain',
    podbean: 'Podbean',
    pubfuture: 'Outbrain',
    revcontent: 'Revcontent',
    'soundcloud.com': 'Soundcloud',
    spreaker: 'iHeart',
    taboola: 'Taboola',
    'youtube.com': 'Youtube',
    '/adsense/': 'Adsense'
  },
  IFRAME_READY_POLL_INTERVAL: 2000

}
