cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
    "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
    "pluginId": "cordova-plugin-document-viewer",
    "clobbers": [
      "cordova.plugins.SitewaertsDocumentViewer",
      "SitewaertsDocumentViewer"
    ]
  },
  {
    "id": "de.cyberkatze.phonegap.plugin.PdfViewer.PdfViewer",
    "file": "plugins/de.cyberkatze.phonegap.plugin.PdfViewer/www/PdfViewer.js",
    "pluginId": "de.cyberkatze.phonegap.plugin.PdfViewer",
    "merges": [
      "openPDF"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-document-viewer": "0.9.10",
  "de.cyberkatze.phonegap.plugin.PdfViewer": "0.3.0"
};
// BOTTOM OF METADATA
});