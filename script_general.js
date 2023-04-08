(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer","this.Container_52559415_5FF3_7265_4163_12B59806D6B1","this.Label_510925A4_5FF6_925B_417E_9751E96F5762"],"backgroundColor":["#FFFFFF"],"id":"rootPlayer","start":"this.init()","data":{"defaultLocale":"en","history":{},"textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false},"locales":{"en":"locale/en.txt"},"name":"Player591"},"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getKey":TDV.Tour.Script.getKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"initAnalytics":TDV.Tour.Script.initAnalytics,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"translate":TDV.Tour.Script.translate,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"downloadFile":TDV.Tour.Script.downloadFile,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startMeasurement":TDV.Tour.Script.startMeasurement,"init":TDV.Tour.Script.init,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"createTween":TDV.Tour.Script.createTween,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeJS":TDV.Tour.Script.executeJS,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isPanorama":TDV.Tour.Script.isPanorama,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openLink":TDV.Tour.Script.openLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getOverlays":TDV.Tour.Script.getOverlays,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cloneBindings":TDV.Tour.Script.cloneBindings,"playAudioList":TDV.Tour.Script.playAudioList,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer},"scrollBarColor":"#000000","hash": "d67927a445a07f5f1bbfba9a2d7eede168907d072863cd426a61761e1c8a2a00", "definitions": [{"id":"model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29","label":trans('model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29.label'),"backgroundColor":"#333333","thumbnailUrl":"media/model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_t.jpg","environmentIntensity":0.5,"surfaceSelectionCoef":2,"surfaceReticleMaxRadius":50,"class":"Model3D","lights":["this.light_53F1401D_5FF2_B265_41D1_1D0CD53C7DFD","this.light_53F6201D_5FF2_B265_41CB_D79D8AB47E67"],"data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"sofa"},"environmentURL":"media/model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29/bg_53F7B01E_5FF2_B267_41B9_22478C7F2B26.jpg","castShadow":true,"surfaceReticleMinRadius":15,"objects":["this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_0","this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_1","this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_2","this.sprite_51046F9A_5FF2_8E6F_41BC_4EA1F140C719"],"floorRadius":1.9,"surfaceReticleRadius":0.02,"camera":"this.cam_540C301C_5FF2_B26B_41AD_34488FC8F471","model":"this.res_5408401C_5FF2_B26B_41D5_217803B7F472"},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer","media":"this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29","class":"Model3DPlayListItem"}],"class":"PlayList"},{"id":"effect_4E39348A_5FF2_926F_41C3_AA80D6828885","duration":500,"class":"FadeInEffect"},{"backgroundColor":["#FFFFFF","#FFFFFF"],"id":"Container_52559415_5FF3_7265_4163_12B59806D6B1","right":"11.35%","backgroundOpacity":0.3,"data":{"name":"Container2456"},"scrollBarColor":"#000000","layout":"absolute","overflow":"scroll","propagateClick":false,"bottom":"26.18%","scrollBarMargin":2,"height":"15.785%","backgroundColorRatios":[0,1],"width":"24.978%","class":"Container","gap":10,"children":["this.Label_52142E5C_5FF2_8EEB_41BF_3E326393ADCE","this.Label_526346DB_5FF2_9FED_41D1_13604CF28A3B","this.Label_51D9224B_5FF5_76ED_418C_EDB2FAEA5E9B"],"minHeight":20,"minWidth":20},{"id":"Label_52142E5C_5FF2_8EEB_41BF_3E326393ADCE","fontSize":"1.48vmin","horizontalAlign":"center","data":{"name":"red"},"backgroundOpacity":0,"text":trans('Label_52142E5C_5FF2_8EEB_41BF_3E326393ADCE.text'),"fontColor":"#000000","propagateClick":false,"bottom":"39.33%","height":"15%","width":"17.889%","fontFamily":"Arial","minHeight":16,"click":"this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['5'], true); this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['4','3'], false)","class":"Label","minWidth":30,"left":"0.4%"},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"fontSize":"1.48vmin","horizontalAlign":"center","id":"Label_510925A4_5FF6_925B_417E_9751E96F5762","right":"24.78%","backgroundOpacity":0,"data":{"name":"assin"},"text":trans('Label_510925A4_5FF6_925B_417E_9751E96F5762.text'),"top":"34.1%","fontColor":"#000000","propagateClick":false,"height":"2.368%","width":"4.468%","visible":false,"fontFamily":"Arial","minHeight":16,"class":"Label","minWidth":30},{"id":"effect_4E381649_5FF3_9EED_41BE_4AA1F353AAE1","duration":500,"class":"FadeInEffect"},{"id":"Label_526346DB_5FF2_9FED_41D1_13604CF28A3B","fontSize":"1.48vmin","horizontalAlign":"center","data":{"name":"green"},"backgroundOpacity":0,"text":trans('Label_526346DB_5FF2_9FED_41D1_13604CF28A3B.text'),"top":"40.65%","fontColor":"#000000","propagateClick":false,"height":"15%","width":"17.889%","fontFamily":"Arial","minHeight":16,"click":"this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['4'], true); this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['3','5'], false)","class":"Label","minWidth":30,"left":"36.31%"},{"id":"MainViewer","class":"ViewerArea","subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","progressBorderRadius":2,"surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","progressBottom":10,"toolTipPaddingRight":6,"toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","progressHeight":2,"playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"subtitlesBottom":50,"progressLeft":"33%","progressBorderSize":0,"playbackBarHeadBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","playbackBarBorderSize":0,"height":"100%","playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBorderColor":"#000000","width":"100%","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","progressRight":"33%","subtitlesBackgroundColor":"#000000","progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","progressOpacity":0.7,"progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarBottom":5,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"vrPointerSelectionTime":2000,"propagateClick":false,"top":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"progressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"toolTipFontSize":"1.11vmin","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_4E381649_5FF3_9EED_41BE_4AA1F353AAE1, 'showEffect', false)}.bind(this); visibleFunc(this.Label_51D9224B_5FF5_76ED_418C_EDB2FAEA5E9B); visibleFunc(this.Label_526346DB_5FF2_9FED_41D1_13604CF28A3B); visibleFunc(this.Label_52142E5C_5FF2_8EEB_41BF_3E326393ADCE); visibleFunc(this.Container_52559415_5FF3_7265_4163_12B59806D6B1)","firstTransitionDuration":0,"toolTipPaddingLeft":6,"minHeight":50,"playbackBarProgressBorderRadius":0,"playbackBarHeight":10,"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"minWidth":100,"subtitlesFontSize":"3vmin","left":0},{"id":"effect_517B8B52_5FFC_C0C1_41D6_27DA0962C547","duration":500,"class":"FadeOutEffect"},{"fontSize":"1.48vmin","horizontalAlign":"center","id":"Label_51D9224B_5FF5_76ED_418C_EDB2FAEA5E9B","right":"7.88%","backgroundOpacity":0,"data":{"name":"grey"},"text":trans('Label_51D9224B_5FF5_76ED_418C_EDB2FAEA5E9B.text'),"fontColor":"#000000","propagateClick":false,"bottom":"41%","height":"15%","width":"17.889%","fontFamily":"Arial","minHeight":16,"click":"this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['3'], true); this.setObjectsVisibilityByID(this.model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29, ['4','5'], false)","class":"Label","minWidth":30},{"id":"light_53F1401D_5FF2_B265_41D1_1D0CD53C7DFD","pitch":45,"yaw":-45,"castShadow":true,"shadowTolerance":2,"intensity":0.5,"class":"OrbitLight"},{"id":"light_53F6201D_5FF2_B265_41CB_D79D8AB47E67","pitch":75,"yaw":135,"castShadow":true,"shadowTolerance":2,"intensity":0.3,"class":"OrbitLight"},{"id":"model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_0","rollOverEnabled":false,"objectId":"3","clickEnabled":false,"data":{"label":"grey"},"class":"InnerModel3DObject"},{"id":"model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_1","enabled":false,"rollOverEnabled":false,"objectId":"4","clickEnabled":false,"data":{"label":"green"},"class":"InnerModel3DObject"},{"id":"model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29_2","enabled":false,"rollOverEnabled":false,"objectId":"5","clickEnabled":false,"data":{"label":"red sofa"},"class":"InnerModel3DObject"},{"id":"sprite_51046F9A_5FF2_8E6F_41BC_4EA1F140C719","transparentAreaActive":true,"data":{"label":"Image"},"x":39.16951009176552,"translationLength":0,"y":35.76520641626585,"z":39.28700034756988,"depthTest":false,"parentId":"3","width":190,"height":95,"translationX":0,"translationZ":0.3,"class":"SpriteModel3DObject","translationY":0.95,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_4E39348A_5FF2_926F_41C3_AA80D6828885, 'showEffect', false)}.bind(this); visibleFunc(this.Label_510925A4_5FF6_925B_417E_9751E96F5762); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_517B8B52_5FFC_C0C1_41D6_27DA0962C547, 'hideEffect', false)}.bind(this); invisibleFunc(this.Label_52142E5C_5FF2_8EEB_41BF_3E326393ADCE); invisibleFunc(this.Label_526346DB_5FF2_9FED_41D1_13604CF28A3B); invisibleFunc(this.Label_51D9224B_5FF5_76ED_418C_EDB2FAEA5E9B); invisibleFunc(this.Container_52559415_5FF3_7265_4163_12B59806D6B1)","image":"this.res_4CEA72F7_5FF3_F7A5_41AB_5B9436E7BADD"},{"id":"cam_540C301C_5FF2_B26B_41AD_34488FC8F471","maxZ":2.88,"minX":-2.84,"initialPitch":-30,"maxX":2.85,"maxY":2.42,"class":"OrbitModel3DCamera","autoNearFar":true,"initialDistance":1.56,"maxDistance":3.12,"initialY":0.35,"minZ":-2.81,"minY":-1.71,"minDistance":0.39,"initialZ":0.03},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29/scene.glb"},{"url":"media/model_542F4F9F_5FF2_8E65_41BC_A0A1456F3E29/scene_mobile.glb","tags":"mobile","class":"Model3DResourceLevel"}],"id":"res_5408401C_5FF2_B26B_41D5_217803B7F472","class":"Model3DResource"},{"levels":[{"height":83,"url":"media/res_4CEA72F7_5FF3_F7A5_41AB_5B9436E7BADD_0.png","width":168,"class":"ImageResourceLevel"}],"id":"res_4CEA72F7_5FF3_F7A5_41AB_5B9436E7BADD","class":"ImageResource"}],"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarMargin":2,"height":"100%","backgroundColorRatios":[0],"width":"100%","class":"Player","gap":10,"minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.7.js.map
})();
//Generated with v2023.0.7, Sat Apr 8 2023