(function ($, rho, rhoUtil) {
    'use strict';

    var module = null;

    var apiReq = rhoUtil.apiReqFor('Rho.RhoConnectClient');

    // === RhoConnectClient class definition ===

    function RhoConnectClient(id) {
        if (!(this instanceof RhoConnectClient)) return new RhoConnectClient(id);

        this.getId = function () {
            return id;
        };
    };

    // === RhoConnectClient instance members ===

    

    // === RhoConnectClient static members ===

    

    
        RhoConnectClient['userName'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'userName',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['pollInterval'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'pollInterval',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['pollInterval='] = function(/* int */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'pollInterval=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['syncServer'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'syncServer',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['syncServer='] = function(/* const rho::String& */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'syncServer=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['pageSize'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'pageSize',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['pageSize='] = function(/* int */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'pageSize=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['threadedMode'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'threadedMode',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['threadedMode='] = function(/* bool */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'threadedMode=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['showStatusPopup'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'showStatusPopup',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['showStatusPopup='] = function(/* bool */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'showStatusPopup=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['sslVerifyPeer'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'sslVerifyPeer',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['sslVerifyPeer='] = function(/* bool */ value, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'sslVerifyPeer=',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['loggedIn?'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'loggedIn?',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['syncing?'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'syncing?',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['search'] = function(/* const rho::Hashtable<rho::String, rho::String>& */ args, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'search',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['doSync'] = function(/* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* bool */ syncOnlyChangedSources, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'doSync',
                valueCallbackIndex: 3
            });
        };
    
        RhoConnectClient['doSyncSource'] = function(/* const rho::String& */ sourceName, /* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'doSyncSource',
                valueCallbackIndex: 3
            });
        };
    
        RhoConnectClient['login'] = function(/* const rho::String& */ login, /* const rho::String& */ password, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'login',
                valueCallbackIndex: 2
            });
        };
    
        RhoConnectClient['logout'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'logout',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['stopSync'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'stopSync',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['setNotification'] = function(/* const rho::String& */ sourceName, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'setNotification',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['clearNotification'] = function(/* const rho::String& */ sourceName, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'clearNotification',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['setObjectNotification'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'setObjectNotification',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['addObjectNotify'] = function(/* const rho::String& */ sourceName, /* const rho::String& */ object, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'addObjectNotify',
                valueCallbackIndex: 2
            });
        };
    
        RhoConnectClient['cleanObjectNotify'] = function(/* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'cleanObjectNotify',
                valueCallbackIndex: 0
            });
        };
    
        RhoConnectClient['getLastSyncObjectCount'] = function(/* const rho::String& */ sourceName, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'getLastSyncObjectCount',
                valueCallbackIndex: 1
            });
        };
    
        RhoConnectClient['setSourceProperty'] = function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'setSourceProperty',
                valueCallbackIndex: 3
            });
        };
    
        RhoConnectClient['getSourceProperty'] = function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* optional function */ oResult) {
            return apiReq({
                instanceId: '0',
                params: arguments,
                method: 'getSourceProperty',
                valueCallbackIndex: 2
            });
        };
    

    // === RhoConnectClient default instance support ===

    

    rhoUtil.namespace('Rho.RhoConnectClient', RhoConnectClient);

})(jQuery, Rho, Rho.util);