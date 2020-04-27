import * as Runtime from './domains/Runtime';
import * as Page from './domains/Page';
import * as DOM from './domains/DOM';
import * as CSS from './domains/CSS';
import * as DOMStorage from './domains/DOMStorage';
import * as Network from './domains/Network';
import * as Overlay from './domains/Overlay';
import * as DOMDebugger from './domains/DOMDebugger';

const methods: any = {
  'Debugger.enable': noop,
  'Debugger.setAsyncCallStackDepth': noop,
  'Debugger.setBlackboxPatterns': noop,
  'Debugger.setPauseOnExceptions': noop,

  'DOM.copyTo': DOM.copyTo,
  'DOM.enable': DOM.enable,
  'DOM.getDocument': DOM.getDocument,
  'DOM.getOuterHTML': DOM.getOuterHTML,
  'DOM.markUndoableState': noop,
  'DOM.moveTo': DOM.moveTo,
  'DOM.pushNodesByBackendIdsToFrontend': DOM.pushNodesByBackendIdsToFrontend,
  'DOM.removeNode': DOM.removeNode,
  'DOM.requestChildNodes': DOM.requestChildNodes,
  'DOM.requestNode': DOM.requestNode,
  'DOM.resolveNode': DOM.resolveNode,
  'DOM.setAttributesAsText': DOM.setAttributesAsText,
  'DOM.setInspectedNode': DOM.setInspectedNode,
  'DOM.setNodeValue': DOM.setNodeValue,
  'DOM.setOuterHTML': DOM.setOuterHTML,

  'DOMDebugger.getEventListeners': DOMDebugger.getEventListeners,

  'Emulation.setEmulatedMedia': noop,

  'Log.clear': noop,
  'Log.enable': noop,
  'Log.startViolationsReport': noop,

  'Network.deleteCookies': Network.deleteCookies,
  'Network.enable': noop,
  'Network.getCookies': Network.getCookies,

  'Page.getResourceContent': noop,
  'Page.getResourceTree': Page.getResourceTree,

  'Runtime.callFunctionOn': Runtime.callFunctionOn,
  'Runtime.discardConsoleEntries': noop,
  'Runtime.enable': Runtime.enable,
  'Runtime.evaluate': Runtime.evaluate,
  'Runtime.getIsolateId': noop,
  'Runtime.getProperties': Runtime.getProperties,
  'Runtime.releaseObject': noop,
  'Runtime.releaseObjectGroup': noop,
  'Runtime.runIfWaitingForDebugger': noop,

  'ApplicationCache.enable': noop,
  'ApplicationCache.getFramesWithManifests': noop,
  'Page.getManifestIcons': noop,

  'Page.enable': noop,
  'Page.getAppManifest': noop,
  'Page.getInstallabilityErrors': noop,

  'Profiler.enable': noop,

  'Audits.enable': noop,

  'CacheStorage.requestCacheNames': noop,

  'CSS.enable': noop,
  'CSS.getComputedStyleForNode': CSS.getComputedStyleForNode,
  'CSS.getInlineStylesForNode': CSS.getInlineStylesForNode,
  'CSS.getMatchedStylesForNode': CSS.getMatchedStylesForNode,
  'CSS.getPlatformFontsForNode': noop,

  'Database.enable': noop,

  'DOMStorage.clear': DOMStorage.clear,
  'DOMStorage.enable': DOMStorage.enable,
  'DOMStorage.getDOMStorageItems': DOMStorage.getDOMStorageItems,
  'DOMStorage.removeDOMStorageItem': DOMStorage.removeDOMStorageItem,
  'DOMStorage.setDOMStorageItem': DOMStorage.setDOMStorageItem,

  'HeapProfiler.enable': noop,

  'IndexedDB.enable': noop,

  'Inspector.enable': noop,
  'IndexedDB.requestDatabaseNames': noop,

  'Overlay.enable': noop,
  'Overlay.hideHighlight': Overlay.hideHighlight,
  'Overlay.highlightFrame': noop,
  'Overlay.highlightNode': Overlay.highlightNode,
  'Overlay.setInspectMode': Overlay.setInspectMode,
  'Overlay.setShowViewportSizeOnResize': Overlay.setShowViewportSizeOnResize,

  'ServiceWorker.enable': noop,

  'Storage.trackCacheStorageForOrigin': noop,
  'Storage.trackIndexedDBForOrigin': noop,
};

async function noop() {}

export default methods;
