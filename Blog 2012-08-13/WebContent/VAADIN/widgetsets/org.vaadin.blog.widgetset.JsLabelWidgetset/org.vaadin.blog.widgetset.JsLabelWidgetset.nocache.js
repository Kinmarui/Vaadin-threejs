function org_vaadin_blog_widgetset_JsLabelWidgetset(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.org.vaadin.blog.widgetset.JsLabelWidgetset=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'org.vaadin.blog.widgetset.JsLabelWidgetset', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  org_vaadin_blog_widgetset_JsLabelWidgetset.__sendStats = sendStats;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__moduleName = 'org.vaadin.blog.widgetset.JsLabelWidgetset';
  org_vaadin_blog_widgetset_JsLabelWidgetset.__errFn = null;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__moduleBase = 'DUMMY';
  org_vaadin_blog_widgetset_JsLabelWidgetset.__softPermutationId = 0;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__computePropValue = null;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__getPropMap = null;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__gwtInstallCode = function(){
  }
  ;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['org.vaadin.blog.widgetset.JsLabelWidgetset'] = {moduleName:'org.vaadin.blog.widgetset.JsLabelWidgetset'};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName('body')[0];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'org.vaadin.blog.widgetset.JsLabelWidgetset';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    frameDoc.write('<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
    var frameDocbody = frameDoc.getElementsByTagName('body')[0];
    var script = frameDoc.createElement('script');
    script.language = 'javascript';
    var temp = 'var $wnd = window.parent;';
    script.text = temp;
    frameDocbody.appendChild(script);
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code){
      function removeScript(body, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf('Chrome') > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode('eval("'));
        for (var i = 0; i < code.length; i++) {
          var c = window.JSON.stringify(code[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring(1, c.length - 1)));
        }
        scriptFrag.appendChild(doc.createTextNode('");'));
        script = doc.createElement('script');
        script.language = 'javascript';
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = 0; i < code.length; i++) {
          script = doc.createElement('script');
          script.language = 'javascript';
          script.text = code[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    org_vaadin_blog_widgetset_JsLabelWidgetset.onScriptDownloaded = function(code){
      setupWaitForBodyLoad(function(){
        installCode(code);
      }
      );
    }
    ;
    sendStats('moduleStartup', 'moduleRequested');
    var script_0 = $doc_0.createElement('script');
    script_0.src = filename;
    $doc_0.getElementsByTagName('head')[0].appendChild(script_0);
  }

  org_vaadin_blog_widgetset_JsLabelWidgetset.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  org_vaadin_blog_widgetset_JsLabelWidgetset.__installRunAsyncCode = function(code){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement('script');
    script.language = 'javascript';
    script.text = code;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('org.vaadin.blog.widgetset.JsLabelWidgetset::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_0 = '';
            }
            metaProps[name_1] = value_0;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value = metaProps[name_0];
      return value == null?null:value;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    org_vaadin_blog_widgetset_JsLabelWidgetset.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('org.vaadin.blog.widgetset.JsLabelWidgetset.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return org_vaadin_blog_widgetset_JsLabelWidgetset.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    function unflattenKeylistIntoAnswers(propValArray, value){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value = providers[propName](), allowedValuesMap = values[propName];
      if (value in allowedValuesMap) {
        return value;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value);
      }
      throw null;
    }

    providers['user.agent'] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var makeVersion = function(result){
        return parseInt(result[1]) * 1000 + parseInt(result[2]);
      }
      ;
      if (function(){
        return ua.indexOf('opera') != -1;
      }
      ())
        return 'opera';
      if (function(){
        return ua.indexOf('webkit') != -1;
      }
      ())
        return 'safari';
      if (function(){
        return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 9;
      }
      ())
        return 'ie9';
      if (function(){
        return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 8;
      }
      ())
        return 'ie8';
      if (function(){
        var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
        if (result && result.length == 3)
          return makeVersion(result) >= 6000;
      }
      ())
        return 'ie6';
      if (function(){
        return ua.indexOf('gecko') != -1;
      }
      ())
        return 'gecko1_8';
      return 'unknown';
    }
    ;
    values['user.agent'] = {gecko1_8:0, ie6:1, ie8:2, ie9:3, opera:4, safari:5};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    org_vaadin_blog_widgetset_JsLabelWidgetset.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        result[key] = computePropValue(key);
      }
      return result;
    }
    ;
    org_vaadin_blog_widgetset_JsLabelWidgetset.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['org.vaadin.blog.widgetset.JsLabelWidgetset'].bindings = org_vaadin_blog_widgetset_JsLabelWidgetset.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('org.vaadin.blog.widgetset.JsLabelWidgetset.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['ie6'], '10FD1F5C1D98CDE886ACAFE2D3FBF775');
      unflattenKeylistIntoAnswers(['ie8'], '6BAC8C343626B289EC0A0462D03B12AE');
      unflattenKeylistIntoAnswers(['gecko1_8'], '94C7C567D8C8C9EA16DCE6C1C1D976E4');
      unflattenKeylistIntoAnswers(['ie9'], '9B2400A0B253F5093B956D56C50663CE');
      unflattenKeylistIntoAnswers(['safari'], 'C3A5932980D005384256FE10BF06F105');
      unflattenKeylistIntoAnswers(['opera'], 'F1C57CD5E53F68377376E0F146DFBB91');
      strongName = answers[computePropValue('user.agent')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = strongName.substring(idx + 1);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    org_vaadin_blog_widgetset_JsLabelWidgetset.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    sendStats('loadExternalRefs', 'begin');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  org_vaadin_blog_widgetset_JsLabelWidgetset.__moduleBase = computeScriptBase();
  activeModules['org.vaadin.blog.widgetset.JsLabelWidgetset'].moduleBase = org_vaadin_blog_widgetset_JsLabelWidgetset.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

org_vaadin_blog_widgetset_JsLabelWidgetset.succeeded = org_vaadin_blog_widgetset_JsLabelWidgetset();
