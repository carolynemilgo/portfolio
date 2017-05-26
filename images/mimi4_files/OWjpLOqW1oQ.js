if (self.CavalryLogger) { CavalryLogger.start_js(["R4GQQ"]); }

__d("MessengerPaymentProductType",[],(function a(b,c,d,e,f,g){f.exports={P2P:"p2p",PAGES_COMMERCE:"pages_commerce",NMOR_PAGES_COMMERCE:"nmor_pages_commerce",MESSENGER_COMMERCE:"messenger_commerce"};}),null);
__d("NFXStoryLocation",[],(function a(b,c,d,e,f,g){f.exports={FEED:"feed",VIDEO_LIST_CHANNEL:"video_list_channel",VIDEO_PLAYLIST_CHANNEL:"video_playlist_channel",WATCHED_VIDEOS_CHANNEL:"watched_videos_channel",EXPLORE_FEED:"explore_feed",PROFILE_SELF:"profile_self",PROFILE_SOMEONE_ELSE:"profile_someone_else",PAGE:"page",PERMALINK:"permalink",PHOTO_VIEWER:"photo_viewer",PAGE_REVIEW:"page_review",POPULAR_AT:"popular_at",CURATED_SECTION:"curated_section",GROUP:"group",EVENT:"event",SEARCH:"search",UNKNOWN:"unknown",PROFILE_REPORTING_FLOW:"profile_reporting_flow",HEAD_PUBLISHER_APP_MENTIONS_FEED:"head_publisher_app_mentions_feed",MESSENGER:"messenger",MESSENGER_MONTAGE_VIEWER:"messenger_montage_viewer",FUNDRAISER_PAGE_FEED:"fundraiser_page_feed",FUNDRAISER_PERSON_TO_CHARITY:"fundraiser_person_to_charity",FUNDRAISER_PERSON_FOR_PERSON:"fundraiser_person_for_person",SETTINGS:"settings",LIVE_MAP:"live_map",JOB_BROWSER:"job_browser",MESSENGER_THREAD_ACTION_PANEL:"messenger_thread_action_panel",MESSENGER_CONTACT_DETAILS:"messenger_contact_details",TICKER:"ticker",FULLSCREEN_VIDEO_PLAYER:"fullscreen_video_player",ACTIVITY_LOG_FACE_ALERTS:"face_alerts",HELP_COMMUNITY:"help_community",SUPPORT_INBOX:"support_inbox",APP_INVITES_FEED:"app_invites_feed",CHAINING_FEED:"chaining_feed",SOCIAL_REPORTING_REDIRECT:"social_reporting_redirect",WWW_CHAT_HEAD:"www_chat_head",THROWBACK:"throwback",POST_TO_PAGE:"post_to_page",ACTIVITY_LOG:"activity_log",VIDEO_CHANNEL:"video_channel",VIDEO_CHANNELS:"video_channels",VIDEO_HOME:"video_home",REVIEWS_FEED:"reviews_feed",BACKSTAGE:"backstage",MESSENGER_ENCRYPTED_THREAD:"messenger_encrypted_thread",LOCAL_NEWS:"local_news",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",POLITICAL_ISSUE_MODULE:"political_issue_module",ELECTION_HUB:"election_hub",DIRECT_MESSAGING:"direct_messaging",CAMERA_MEDIA_EFFECT:"camera_media_effect",PROFILE_DEPRECATED:"profile",TIMELINE_DEPRECATED:"timeline",BREAKUP_FLOW:"breakup_flow",ASYNC_TASK_DO_NOT_USE:"async",INSTANT_ARTICLES:"instant_articles",INSTANT_ARTICLE_WEBVIEW_AD:"instant_article_webview_ad",IN_APP_BROWSER:"in_app_browser",INSTREAM_VIDEO:"instream_video",TOPIC_PAGE:"topic_page",GAMES_FEED:"games_feed"};}),null);
__d("QuicksilverSources",[],(function a(b,c,d,e,f,g){f.exports={FB_CANVAS:"fb_canvas",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MOBILE_BOOKMARK:"mobile_bookmark",EMBEDDED_PLAYER:"embedded_player",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",UNKNOWN:"unknown"};}),null);
__d('MessengerProfileImageWrapper.react',['cssVar','cx','MessagingThreadType','MessengerConfig','React','TooltipData','WorkGKs','getViewportDimensions','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.render=function(){var q={};if(this.props.tooltipContent){var r=c('getViewportDimensions')().width,s=parseInt("700px".replace('px',''),10),t=r<=s?'above':'left';Object.assign(q,c('TooltipData').propsFor(this.props.tooltipContent,t));}var u=this.props.threadType===c('MessagingThreadType').ROOM?{width:this.props.size+'px',height:this.props.size+'px',background:this.props.threadColor?this.props.threadColor:"#0084ff"}:{width:this.props.size+'px',height:this.props.size+'px'};return c('React').createElement('div',babelHelpers['extends']({className:c('joinClasses')("_4ldz",this.props.className),style:{width:this.props.size+'px',height:this.props.size+'px'}},q),c('React').createElement('div',{className:"_4ld-"+(this.props.threadType===c('MessagingThreadType').ROOM?' '+"_180i":''),style:u},this.props.children),this.$MessengerProfileImageWrapper1());};m.prototype.$MessengerProfileImageWrapper1=function(){if(this.props.customBadge)return c('React').createElement(o,{className:"_4ld_",customBadge:this.props.customBadge});if(c('MessengerConfig').BadgesDisabled||!this.props.showBadge||this.props.isMessengerUser==null||c('WorkGKs').workplace_www_chat_branding)return null;if(this.props.renderOnlineStatus)return c('React').createElement(p,{className:"_4ld_"});return c('React').createElement(n,{className:"_4ld_",isMessengerUser:this.props.isMessengerUser,customBadge:this.props.customBadge});};function m(){j.apply(this,arguments);}m.propTypes={customBadge:l.string,isMessengerUser:l.bool,renderOnlineStatus:l.bool,showBadge:l.bool,size:l.number,threadColor:l.string,threadType:l.number,tooltipContent:l.string};var n=function q(r){return c('React').createElement('div',{className:c('joinClasses')(r.className,"_2pom")},c('React').createElement('div',{className:"_2pon"+(r.isMessengerUser?' '+"_2poo":'')+(!r.isMessengerUser?' '+"_2pop":'')}));},o=function q(r){return c('React').createElement('div',{className:c('joinClasses')(r.className,"_2pom")},c('React').createElement('div',{className:"_2pon _4p4t"},r.customBadge));};n.propTypes={isMessengerUser:l.bool.isRequired};var p=function q(r){return c('React').createElement('div',{className:c('joinClasses')(r.className,"_38jn")},c('React').createElement('div',{className:"_38jt"}));};f.exports=m;}),null);
__d('MessengerContactImage.react',['Image.react','MessengerProfileImageWrapper.react','React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('div',{className:this.props.className},c('React').createElement(c('MessengerProfileImageWrapper.react'),{isMessengerUser:this.props.isMessengerUser,size:this.props.size,customBadge:this.props.customBadge,showBadge:true},c('React').createElement(c('Image.react'),{alt:'',height:this.props.size,src:this.props.src,width:this.props.size})));};function k(){'use strict';h.apply(this,arguments);}k.propTypes={customBadge:j.string,isMessengerUser:j.bool,size:j.number.isRequired,src:c('Image.react').validateImageSrcPropType};f.exports=k;}),null);
__d('MessengerDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){return c('React').createElement('div',{className:c('joinClasses')("_19jt",this.props.className)},this.props.children);};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d("MultiwayTypes",[],(function a(b,c,d,e,f,g){var h={OK:200,BAD_REQUEST:400,UNAUTHORIZED:401,NOT_FOUND:404,METHOD_NOT_ALLOWED:406,CONDITIONAL_REQUEST_FAILED:412,BUSY_HERE:486,SERVER_INTERNAL_ERROR:500,SERVICE_UNAVAILABLE:503,PRECONDITION_FAILURE:580},i={JOIN:0,SERVER_MEDIA_UPDATE:1,HANGUP:2,ICE_CANDIDATE:3,RING:4,DISMISS:5,CONFERENCE_STATE:6,ADD_PARTICIPANTS:7,SUBSCRIPTION:8,CLIENT_MEDIA_UPDATE:9,DATA_MESSAGE:10,REMOVE_PARTICIPANTS:11,EXPERIMENT:12},j={AUDIO:0,VIDEO:1,DATA:2},k={IGNORE_CALL:0,HANGUP_CALL:1,NO_ANSWER_TIMEOUT:2,CLIENT_ERROR:3,IN_ANOTHER_CALL:4,CLIENT_INTERRUPTED:5},l={CALL_ENDED:0,ANSWERED_ON_ANOTHER_DEVICE:1,IN_ANOTHER_CALL:2,CONNECTION_DROPPED:3,REJECTED_ON_ANOTHER_DEVICE:4,REMOVED_BY_PARTICIPANT:5,REJECTED_BY_CALLEE:6,INTERNAL_ERROR:7},m={SUPPORT_AUDIO:0,SUPPORT_VIDEO:1},n={GROUP_AUDIO_CALL:0,PEER_VIDEO_CALL:1,PEER_AUDIO_CALL:2,GROUP_VIDEO_CALL:3,LIVE_STREAM:4},o={OK:0,NOT_SUPPORTED:1,IN_ANOTHER_CALL:10},p={UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11};f.exports={RtcResponseStatusCode:h,MessageType:i,MediaType:j,RingType:n,HangupReason:k,DismissReason:l,Capability:m,DeviceStatus:o,ParticipantCallState:p};}),null);
__d('P2PPaymentRequestsStore',['P2PActionConstants','Arbiter','ChannelConstants','CurrentUser','EventEmitter','immutable','ImmutableObject','P2PActions','P2PAPI','P2PChannelType','P2PDispatcher','P2PPaymentRequest','P2PPaymentRequestStatus'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=null,l=false,m=null,n=false,o=null,p=j(),q=false,r=false;h=babelHelpers.inherits(s,c('EventEmitter'));i=h&&h.prototype;function s(){i.constructor.call(this);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').PAYMENT_REQUEST_STATUS_CHANGED),this.handleChannelPaymentRequestStatusChanged.bind(this));c('P2PDispatcher').register(this.onEventDispatched.bind(this));}s.prototype.onEventDispatched=function(t){var u=t.data,v=t.type;switch(v){case c('P2PActionConstants').PAYMENT_REQUEST_INITIATED:q=true;o=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_INITIATED_COMPLETE:q=false;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CREATED:this.handlePaymentRequestCreated(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CREATED_ERROR:o=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_UPDATED:this.handlePaymentRequestUpdated(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_INITIATED:n=true;m=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINED:n=false;m=null;this.handlePaymentRequestDeclined(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_ERROR:n=false;m=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_INITIATED:l=true;k=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCELED:l=false;k=null;this.handlePaymentRequestCanceled(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_ERROR:l=false;k=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').DIALOG_CLOSED:m=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUESTS_FETCHED:this.handlePaymentRequestsFetched(u);this.emit('change');break;}};s.prototype.handlePaymentRequestCreated=function(t){var u=p.toArray();u.push(new (c('P2PPaymentRequest'))(t));u.sort(function(v,w){return v.creationTime-w.creationTime;});p=j(u);};s.prototype.handlePaymentRequestUpdated=function(t){if(t.groupRequestID)this.updateIndividualRequest(t);delete t.groupRequestID;this.updateRequest(t.id,t);};s.prototype.handlePaymentRequestDeclined=function(t){this.updateRequest(t,{currentStatus:c('P2PPaymentRequestStatus').DECLINED});};s.prototype.handlePaymentRequestCanceled=function(t){this.updateRequest(t,{currentStatus:c('P2PPaymentRequestStatus').CANCELED});};s.prototype.handleChannelPaymentRequestStatusChanged=function(t,u){var v=u.obj;c('P2PActions').paymentRequestUpdated({id:v.id,currentStatus:v.current_status,groupRequestID:v.group_request_id,transfer:v.transfer});};s.prototype.handlePaymentRequestsFetched=function(t){this.$P2PPaymentRequestsStore1(t);};s.prototype.$P2PPaymentRequestsStore1=function(t){t=t.sort(function(v,w){return v.creationTime-w.creationTime;});t.forEach(function(v,w){if(!this.getPaymentRequestByID(v.id))p=p.push(new (c('P2PPaymentRequest'))(v));}.bind(this));var u=p.toArray();u.sort(function(v,w){return v.creationTime-w.creationTime;});p=j(u);};s.prototype.isPaymentRequestInitiated=function(){return q;};s.prototype.isPaymentRequestDeclining=function(){return n;};s.prototype.isPaymentRequestCanceling=function(){return l;};s.prototype.getPaymentRequestByID=function(t){return p.find(function(u){return t===u.id;});};s.prototype.getPaymentRequestError=function(){return o;};s.prototype.getPaymentRequestDeclineError=function(){return m;};s.prototype.getPaymentRequestCancelError=function(){return k;};s.prototype.getPendingPaymentRequest=function(){if(!r){r=true;c('P2PAPI').getPendingPaymentRequests();}return p.filter(function(t){return t.requestee.id===c('CurrentUser').getID()&&t.currentStatus===c('P2PPaymentRequestStatus').INITED;}).last();};s.prototype.updateRequest=function(t,u){p.forEach(function(v,w){if(t===v.id)p=p.set(w,v.merge(v,u));});};s.prototype.updateIndividualRequest=function(t){var u=t.id,v=t.groupRequestID,w=p.findIndex(function(ca){return v===ca.id;}),x=p.get(w),y=x.individualRequests.findIndex(function(ca){return u===ca.id;}),z=x.individualRequests.slice(0),aa=z[y],ba=babelHelpers['extends']({},aa,t);z[y]=ba;x=x.set('individualRequests',z);p=p.set(w,x);};s.prototype.getPaymentRequests=function(){return p;};f.exports=new s();}),null);
__d('P2PSimpleDialog.react',['fbt','FBPaymentsErrorNotice_DEPRECATED.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PDialogTitle.react','P2PLoadingMask.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.handleToggle=function(r){if(!r)this.props.onCancel();}.bind(this),n;}l.prototype.render=function(){var m=void 0;if(this.props.error)m=c('React').createElement(c('FBPaymentsErrorNotice_DEPRECATED.react'),{error:this.props.error});return c('React').createElement(c('P2PDialog.react'),{behaviors:this.props.behaviors,layerHideOnBlur:false,onToggle:this.handleToggle,repositionOnUpdate:true,shown:true,width:this.props.width},c('React').createElement(c('P2PDialogTitle.react'),null,this.props.title),c('React').createElement(c('P2PDialogBody.react'),null,m,this.props.bodyText,c('React').createElement(c('P2PLoadingMask.react'),{visible:this.props.loading})),c('React').createElement(c('P2PDialogFooter.react'),null,c('React').createElement(c('P2PButton.react'),{disabled:this.props.loading,label:this.props.cancelButtonText,onClick:this.props.onCancel,size:'medium'}),c('React').createElement(c('P2PButton.react'),{disabled:this.props.loading,label:this.props.confirmButtonText,onClick:this.props.onConfirm,size:'medium',use:'confirm'})));};l.propTypes={bodyText:k.string.isRequired,cancelButtonText:k.string,confirmButtonText:k.string,error:k.object,loading:k.bool,onCancel:k.func.isRequired,onConfirm:k.func.isRequired,title:k.string.isRequired,width:k.number};l.defaultProps={cancelButtonText:h._("Cancel"),confirmButtonText:h._("Confirm"),width:300};f.exports=l;}),null);
__d('P2PPaymentRequestCancelDialogContainer.react',['fbt','P2PActions','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPaymentRequest','P2PPaymentRequestsStore','P2PSimpleDialog.react','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPaymentRequestCancelDialogContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PPaymentRequestsStore'))],propTypes:{paymentRequest:i.instanceOf(c('P2PPaymentRequest')).isRequired},statics:{calculateState:function k(l){return {error:c('P2PPaymentRequestsStore').getPaymentRequestCancelError(),loading:c('P2PPaymentRequestsStore').isPaymentRequestCanceling()};}},log:function k(l,m){c('P2PLogger').log(l,{www_event_flow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id});},componentDidMount:function k(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_INITIATE_CANCEL_REQUEST);},handleCancel:function k(){c('P2PActions').hideDialog();},handleConfirm:function k(){c('P2PAPI').cancelPaymentRequest({error:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CANCEL_REQUEST_FAIL);}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CANCEL_REQUEST_SUCCESS);}.bind(this)});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CONFIRM_CANCEL_REQUEST);},renderBodyText:function k(){var l=this.props.paymentRequest.requestee.name;return h._("{Name of requestee} will be notified that the request has been cancelled.",[h.param('Name of requestee',l)]);},render:function k(){return c('React').createElement(c('P2PSimpleDialog.react'),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:h._("Back"),confirmButtonText:h._("Cancel"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:h._("Cancel request?")});}});f.exports=j;}),null);
__d('P2PPaymentRequestDeclineDialogContainer.react',['fbt','P2PActions','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPaymentRequest','P2PPaymentRequestsStore','P2PSimpleDialog.react','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPaymentRequestDeclineDialogContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PPaymentRequestsStore'))],propTypes:{paymentRequest:i.instanceOf(c('P2PPaymentRequest')).isRequired},statics:{calculateState:function k(l){return {error:c('P2PPaymentRequestsStore').getPaymentRequestDeclineError(),loading:c('P2PPaymentRequestsStore').isPaymentRequestDeclining()};}},log:function k(l,m){c('P2PLogger').log(l,{www_event_flow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id});},componentDidMount:function k(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_INITIATE_DECLINE_REQUEST);},handleCancel:function k(){c('P2PActions').hideDialog();},handleConfirm:function k(){c('P2PAPI').declinePaymentRequest({error:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_REQUEST_FAIL);}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_REQUEST_SUCCESS);}.bind(this)});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CONFIRM_DECLINE_REQUEST);},renderBodyText:function k(){var l=this.props.paymentRequest.requester.name;return h._("{Name of requester} will be notified that the request has been declined.",[h.param('Name of requester',l)]);},render:function k(){return c('React').createElement(c('P2PSimpleDialog.react'),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:h._("Back"),confirmButtonText:h._("Decline"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:h._("Decline request?")});}});f.exports=j;}),null);
__d('P2PPaymentRequestActionHelper',['fbt','MercuryIDs','P2PActions','P2PPaymentRequest','P2PPaymentRequestCancelDialogContainer.react','P2PPaymentRequestStatus','P2PPaymentRequestDeclineDialogContainer.react','P2PTransferParam','P2PTransferStatus'],(function a(b,c,d,e,f,g,h){'use strict';var i=function k(l){switch(l){case c('P2PTransferStatus').CANCELED_DECLINED:return c('P2PPaymentRequestStatus').DECLINED;case c('P2PTransferStatus').CANCELED_EXPIRED:return c('P2PPaymentRequestStatus').EXPIRED;case c('P2PTransferStatus').CANCELED_RECIPIENT_RISK:case c('P2PTransferStatus').CANCELED_SAME_CARD:case c('P2PTransferStatus').CANCELED_SENDER_RISK:case c('P2PTransferStatus').CANCELED_SYSTEM_FAIL:return c('P2PPaymentRequestStatus').CANCELED;case c('P2PTransferStatus').COMPLETED:return c('P2PPaymentRequestStatus').TRANSFER_COMPLETED;case c('P2PTransferStatus').INTERMEDIATE_PROCESSING:case c('P2PTransferStatus').PENDING_PUSH_FAIL:case c('P2PTransferStatus').PENDING_SENDER_INITED:case c('P2PTransferStatus').PENDING_RECIPIENT_NUX:case c('P2PTransferStatus').PENDING_SENDER_VERIFICATION:case c('P2PTransferStatus').PENDING_SENDER_MANUAL_REVIEW:case c('P2PTransferStatus').PENDING_RECIPIENT_PROCESSING:case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION:case c('P2PTransferStatus').PENDING_RECIPIENT_MANUAL_REVIEW:case c('P2PTransferStatus').PENDING_SENDER_VERIFICATION_PROCESSING:case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION_PROCESSING:default:return c('P2PPaymentRequestStatus').TRANSFER_INITED;}},j={initDeclinePaymentRequestFlow:function k(l){c('P2PActions').showDialog(c('P2PPaymentRequestDeclineDialogContainer.react'),{paymentRequest:l});},initPayForPaymentRequestFlow:function k(l,m){var n=[],o=l.groupThreadFBID,p=void 0;if(o){n.push(l.requester.id);p=c('MercuryIDs').getThreadIDFromThreadFBID(o);}else p=c('MercuryIDs').getThreadIDFromUserID(l.requester.id);c('P2PActions').chatSendViewOpened({amount:l.amount,memoText:l.memoText,paymentRequestID:l.id,threadID:p,useModal:true,referrer:m,groupSendRecipientUserIDs:n,groupThreadFBID:o});},initCancelPaymentRequestFlow:function k(l){c('P2PActions').showDialog(c('P2PPaymentRequestCancelDialogContainer.react'),{paymentRequest:l});},getPaymentRequest:function k(l){return new (c('P2PPaymentRequest'))({amount:l.amount,amountWithSymbol:l.amountWithSymbol,creationTime:l.creationTime,currency:l.currency,currentStatus:i(l[c('P2PTransferParam').STATUS]),groupThreadFBID:l.groupThreadFBID,individualRequests:[],memoText:l.memoText,requestee:l.sender,requester:l.receiver,statusDescription:l.statusDescription,trnasfer:l,transferID:l[c('P2PTransferParam').TRANSFER_ID],updatedTime:l.updatedTime});},getStatusText:function k(l){var m=l.currentStatus,n=h._("Cancelled"),o=h._("Paid"),p=h._("Declined"),q=h._("Unpaid"),r=void 0;switch(m){case c('P2PPaymentRequestStatus').DECLINED:r=p;break;case c('P2PPaymentRequestStatus').CANCELED:case c('P2PPaymentRequestStatus').TRANSFER_FAILED:r=n;break;case c('P2PPaymentRequestStatus').TRANSFER_COMPLETED:r=o;break;default:r=q;break;}return r;}};f.exports=j;}),null);
__d('P2PAcceptMoneyDialog.react',['cx','BootloadedComponent.react','Bootloader','MessengerEnvironment','P2PDialog.react','P2PLoadingMask.react','JSResource','React','Run'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes,l=c('MessengerEnvironment').messengerui;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.$P2PAcceptMoneyDialog1=function(){return c('React').createElement(c('P2PDialog.react'),{className:"_309"+(l?' '+"_5ktw":''),layerHideOnBlur:false,repositionOnUpdate:true,shown:true,width:l?400:350},c('React').createElement('div',{className:"_3w2b"},c('React').createElement(c('P2PLoadingMask.react'),{visible:true})));},o;}m.preload=function(){c('Run').onAfterLoad(function(){c('Bootloader').loadModules(["P2PAcceptMoneyDialogImpl.react"],function(){},'P2PAcceptMoneyDialog.react');});};m.prototype.render=function(){return c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('P2PAcceptMoneyDialogImpl.react').__setRef('P2PAcceptMoneyDialog.react'),bootloadPlaceholder:this.$P2PAcceptMoneyDialog1()},this.props));};m.propTypes={creditCards:k.array.isRequired,useRedesignForm:k.bool,onClose:k.func,transfer:k.object};f.exports=m;}),null);
__d('P2PVerificationFlowHelper',['AsyncDialog','AsyncRequest','P2PAPI','P2PTransferParam','emptyFunction'],(function a(b,c,d,e,f,g){var h=null,i=null,j=null,k={startVerificationFlow:function l(m,n,o){h=m;i=n;j=o||c('emptyFunction');c('AsyncDialog').send(new (c('AsyncRequest'))('/p2p/verify/dialog/?id='+m));},setupFlowExitHandler:function l(m,n,o,p){var q=function t(u){j(u);h=null;i=null;j=null;m.destroy();n.destroy();};if(o){m.subscribe('hide',function(){q(p);});}else{var r=false,s=false;m.subscribe('confirm',function(){r=true;});m.subscribe('hide',function(){if(r){m.destroy();n.destroy();}else if(i){n.show();}else q(false);});n.subscribe('confirm',function(){s=true;var t={};t[c('P2PTransferParam').TRANSFER_ID]=h;c('P2PAPI').cancelTransaction({formData:t});q(false);});n.subscribe('hide',function(){if(!s)m.show();});}}};f.exports=k;}),null);
__d('P2PCreditCardStore',['P2PActionConstants','Arbiter','CreditCardFormParam','ChannelConstants','EventEmitter','ImmutableObject','MessengerPaymentProductType','P2PActions','P2PAPI','P2PChannelType','P2PCreditCard','P2PDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=null,q=false,r=false;function s(v,w){if(v)o[v]=new (c('ImmutableObject'))(w);}function t(v,w){p=w;if(v)o[v]={error:w};}h=babelHelpers.inherits(u,c('EventEmitter'));i=h&&h.prototype;function u(){i.constructor.call(this);l=false;m=false;j=[];n=true;o={};k=c('P2PDispatcher').register(this.onEventDispatched.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').CREDIT_CARD_CHANGED),this.handleChannelCreditCardChanged.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').CREDIT_CARD_DELETED),this.handleChannelCreditCardDeleted.bind(this));}u.prototype.onEventDispatched=function(v){var w=v.data,x=v.type;switch(x){case c('P2PActionConstants').CREDIT_CARD_SAVING:this.handleCreditCardSaving();this.emit('change');break;case c('P2PActionConstants').CREDIT_CARDS_UPDATED:this.handleCreditCardsUpdated(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARDS_UPDATED_ERROR:this.handleCreditCardsUpdatedError();this.emit('change');break;case c('P2PActionConstants').CHANNEL_EVENTS_ALLOWED:this.handleChannelEventsAllowed();break;case c('P2PActionConstants').CHANNEL_EVENTS_IGNORED:this.handleChannelEventsIgnored();break;case c('P2PActionConstants').CREDIT_CARD_ADDED:this.handleCreditCardAdded(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR:this.handleCreditCardAddedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR_CLEARED:this.handleCreditCardAddedErrorCleared();this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_DELETED:this.handleCreditCardDeleted(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_DELETED_ERROR:this.handleCreditCardDeletedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_UPDATED:this.handleCreditCardUpdated(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_UPDATED_ERROR:this.handleCreditCardUpdatedError(w);this.emit('change');break;case c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED:this.handlePresetCreditCardUpdated(w);this.emit('change');break;case c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED_ERROR:this.handlePresetCreditCardUpdatedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_VERIFIED:this.handleCreditCardVerified(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_VERIFIED_ERROR:this.handleCreditCardVerifiedError(w);this.emit('change');break;case c('P2PActionConstants').BIN_NUMBER_VALIDATED:this.handleBINNumberValidated(w);this.emit('change');break;case c('P2PActionConstants').BIN_NUMBER_VALIDATED_ERROR:this.handleBINNumberValidatedError(w);this.emit('change');break;}};u.prototype.handleCreditCardSaving=function(){q=true;p=null;};u.prototype.getAsyncRequestState=function(){return o;};u.prototype.isCreditCardsFetchComplete=function(){return l;};u.prototype.handleCreditCardsUpdated=function(v){l=true;r=false;j=v.map(function(w){return new (c('P2PCreditCard'))(w);});};u.prototype.handleCreditCardsUpdatedError=function(){l=true;r=true;};u.prototype.handleCreditCardAdded=function(v){q=false;s(v.requestID,v);if(!this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]))j.push(new (c('P2PCreditCard'))(v));};u.prototype.handleChannelEventsIgnored=function(){n=false;};u.prototype.handleChannelEventsAllowed=function(){n=true;};u.prototype.handleChannelCreditCardChanged=function(v,w){if(n&&!this.getCreditCardByCredentialID(w[c('CreditCardFormParam').CREDENTIAL_ID]))c('P2PAPI').getAllCreditCards();};u.prototype.handleCreditCardAddedError=function(v){q=false;t(v.requestID,v.errors);};u.prototype.handleCreditCardAddedErrorCleared=function(){p=null;};u.prototype.handleCreditCardDeleted=function(v){var w=v[c('CreditCardFormParam').CREDENTIAL_ID];s(v.requestID,v);j=j.filter(function(x){return x.getCredentialId()!==w;});};u.prototype.handleChannelCreditCardDeleted=function(v,w){w=w.obj;c('P2PActions').deleteCreditCard(w);};u.prototype.handleCreditCardDeletedError=function(v){t(v.requestID,v.error);};u.prototype.handleCreditCardUpdated=function(v){s(v.requestID,v);var w=this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]);if(w){w.setExp(v[c('CreditCardFormParam').CARD_EXPIRATION]);w.setZipCode(v[c('CreditCardFormParam').ZIP]);}};u.prototype.handleCreditCardUpdatedError=function(v){t(v.requestID,v.errors);};u.prototype.handlePresetCreditCardUpdated=function(v){var w=v[c('CreditCardFormParam').CREDENTIAL_ID];s(v.requestID,v);var x=j.filter(function(z){return z.getIsPreset();})[0];if(x)x.setIsPreset(false);var y=this.getCreditCardByCredentialID(w);if(y)y.setIsPreset(true);};u.prototype.handlePresetCreditCardUpdatedError=function(v){t(v.requestID,v.error);};u.prototype.handleCreditCardVerified=function(v){s(v.requestID,v);var w=this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]);if(w)w.setIsVerified(true);};u.prototype.handleCreditCardVerifiedError=function(v){t(v.requestID,v.error);};u.prototype.handleBINNumberValidated=function(v){s(v.requestID,v);};u.prototype.handleBINNumberValidatedError=function(v){t(v.requestID,v.error);};u.prototype.getAll=function(v){v=v===undefined?c('MessengerPaymentProductType').P2P:v;if(!m){m=true;c('P2PAPI').getAllCreditCards();}return j.filter(function(w){if(v===c('MessengerPaymentProductType').P2P)return w.getIsPersonalTransferEligible();return w;});};u.prototype.getCreditCardByCredentialID=function(v){return j.filter(function(w){return w.getCredentialId()===v;})[0];};u.prototype.getDispatchToken=function(){return k;};u.prototype.getSaveErrors=function(){return p;};u.prototype.isSaving=function(){return q;};u.prototype.failedCreditCardFetch=function(){return r;};f.exports=new u();}),null);
__d('AbstractDialogFitHeight',['csx','cx','CSS','DOM','Event','Style','SubscriptionsHandler','Vector','throttle'],(function a(b,c,d,e,f,g,h,i){var j=450,k=100,l=67,m=67;function n(o){'use strict';this.$AbstractDialogFitHeight1=o;}n.prototype.enable=function(){'use strict';this.$AbstractDialogFitHeight2=new (c('SubscriptionsHandler'))();this.$AbstractDialogFitHeight2.addSubscriptions(this.$AbstractDialogFitHeight1.subscribe('beforeshow',this.$AbstractDialogFitHeight3.bind(this)),c('Event').listen(window,'resize',c('throttle')(this.$AbstractDialogFitHeight3.bind(this))));this.$AbstractDialogFitHeight4=c('DOM').find(this.$AbstractDialogFitHeight1.getRoot(),"._4-i2");c('CSS').addClass(this.$AbstractDialogFitHeight4,"_5pfh");c('CSS').addClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl");this.$AbstractDialogFitHeight5=k;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._4-i0").length)this.$AbstractDialogFitHeight5+=l;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._5a8u").length)this.$AbstractDialogFitHeight5+=m;};n.prototype.disable=function(){'use strict';this.$AbstractDialogFitHeight2.release();this.$AbstractDialogFitHeight2=null;c('CSS').removeClass(this.$AbstractDialogFitHeight4,"_5pfh");c('CSS').removeClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl");};n.prototype.$AbstractDialogFitHeight3=function(){'use strict';var o=c('Vector').getViewportDimensions().y,p=o-this.$AbstractDialogFitHeight5;c('Style').set(this.$AbstractDialogFitHeight4,this.getHeightProperty(),Math.max(j,p)+'px');this.$AbstractDialogFitHeight1.updatePosition();};f.exports=n;}),null);
__d('CssBackgroundImage.react',['EncryptedImg','React','createCancelableFunction','cssURL'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=c('React').createClass({displayName:'CssBackgroundImage',getProps:{imageURI:h.string.isRequired,className:h.string,backgroundPosition:h.string,height:h.string,width:h.string,style:h.object,onMouseDown:h.func,onMouseMove:h.func,onMouseUp:h.func,onMouseOut:h.func},getInitialState:function j(){return {image:'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs='};},getDefaultProps:function j(){return {backgroundPosition:'0% 0%',style:{}};},_process:function j(k){if(!c('EncryptedImg').isEncrypted(k)){this.setState({image:k});return;}if(this.encryptedImgCallback)this.encryptedImgCallback.cancel();this.encryptedImgCallback=c('createCancelableFunction')(function(l){if(k===this.props.imageURI)this.setState({image:l});}.bind(this));c('EncryptedImg').load(k,this.encryptedImgCallback);},componentWillMount:function j(){if(this.props.imageURI!=null)this._process(this.props.imageURI);},componentWillReceiveProps:function j(k){if(k.imageURI!=null)this._process(k.imageURI);},componentWillUnmount:function j(){if(this.encryptedImgCallback)this.encryptedImgCallback.cancel();},render:function j(){var k=this.props,l=k.imageURI,m=k.backgroundPosition,n=k.height,o=k.width,p=k.style,q=babelHelpers.objectWithoutProperties(k,['imageURI','backgroundPosition','height','width','style']);return c('React').createElement('div',babelHelpers['extends']({style:Object.assign({},p,{backgroundImage:c('cssURL')(this.state.image),backgroundPosition:m||p.backgroundPosition,height:n||p.height,width:o||p.width})},q));}});f.exports=i;}),null);
__d("create-react-class",["React","create-react-class/factory"],(function a(b,c,d,e,f,g){'use strict';var h=new (c("React").Component)().updater;f.exports=c("create-react-class/factory")(c("React").Component,c("React").isValidElement,h);}),null);
__d('createReactClass_DEPRECATED',['create-react-class'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('create-react-class');}),null);