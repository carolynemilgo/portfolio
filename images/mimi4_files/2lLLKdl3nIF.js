if (self.CavalryLogger) { CavalryLogger.start_js(["42Efy"]); }

__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFIAsyncWrapper','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k));};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp);}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render();}}.bind(this));this.render();}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,j),this.$UFIAddCommentController1);};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove();};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,replyCommentID:null,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:l.istipjarenabled&&k.islivestreaming,contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};f.exports=h;}),null);
__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MentionsInputTypeaheadView1=function(r){var s=r===this.props.highlightedEntry;return c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight});}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return c('React').createElement('ul',{className:m,role:'listbox',id:this.props.id},this.props.entries.map(this.$MentionsInputTypeaheadView1));};l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};f.exports=l;}),null);
__d('MarketplaceFIGSpectrumColors',[],(function a(b,c,d,e,f,g){'use strict';var h={aluminum:'#B9CAD2',cherry:'#F35369',grape:'#8C72CB',lemon:'#FCD872',lime:'#A3CE71',orange:'#F7923B',pink:'#EC7EBD',seafoam:'#54C7EC',skinTone1:'#F1D2B6',skinTone2:'#D7B195',skinTone3:'#D8A873',skinTone4:'#A67B4F',skinTone5:'#6A4F3B',slate:'#A3CEDF',teal:'#6BCEBB',tomato:'#FB724B'};f.exports=h;}),null);
__d('OGHovercardLayerHideOnBlur',['ContextualThing','DOM','Event'],(function a(b,c,d,e,f,g){function h(i){this._layer=i;}Object.assign(h.prototype,{_subscriptions:null,_clickListener:null,enable:function i(){this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();},disable:function i(){this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;},_detach:function i(){this._clickListener&&this._clickListener.remove();this._clickListener=null;},_attach:function i(){setTimeout(function(){this._clickListener=c('Event').listen(document.documentElement,'click',this._maybeHide.bind(this));}.bind(this),0);},_maybeHide:function i(event){var j=event.getTarget();if(c('DOM').contains(this._layer.getContent(),j)||c('ContextualThing').containsIncludingLayers(this._layer.getContentRoot(),j))return;if(this._shouldHide(event))this._layer.hide();},_shouldHide:function i(event){return true;}});f.exports=h;}),null);
__d('OGAggregationHovercardTarget',['cx','fbt','Event','ArbiterMixin','AsyncRequest','ContextualDialog','ContextualDialogArrow','CSS','DOM','LayerHideOnBlur','LayerHideOnEscape','OGHovercardLayerHideOnBlur'],(function a(b,c,d,e,f,g,h,i){var j=350,k={};function l(n){return new (c('ContextualDialog'))({addedBehaviors:[c('LayerHideOnBlur'),c('LayerHideOnEscape')],arrowBehavior:c('ContextualDialogArrow'),classNames:[n]},c('DOM').create('div',{className:"_4q1"},i._("Loading..."))).setWidth(j);}Object.assign(m,{setHovercard:function n(o,p){var q=k[o];q&&q.setHovercard(p);}});function m(n,o,p,q,r,s,t,u,v){k[o]=this;this._targetID=o;this._endpoint=p;this._preventClose=r||[];this._position=t||'below';this._dialogClass=u||'';this._fetchOnHover=v;this.init(n);for(var w=0,x=q.length;w<x;w++){var y=q[w];this.addTrigger(y.element,y.trigger_class,y.context);}if(s)this.showHovercard(null,null);}Object.assign(m.prototype,c('ArbiterMixin'),{init:function n(o){this._hovercardShown=false;this._hovercardScheduled=false;this._target=o;this._triggers=[];this._hovercard=null;this._fetching=false;this._placeholder=null;this._placeholderListener=null;this._shownClass='hover_shown';this._triggerClass=null;this._currentTrigger=null;this._context=null;return this;},addTrigger:function n(o,p,q){this._triggers.push(o);c('Event').listen(o,'click',this._onTriggerClick.bind(this,o,p,q));if(this._fetchOnHover)c('Event').listen(o,'mouseover',this._onTriggerMouseOver.bind(this));},_onTriggerMouseOver:function n(){this._fetch();},_onTriggerClick:function n(o,p,q){q=q||this._target;if(this._hovercardShown&&this._hovercard.getContext()===q||this._hovercardScheduled&&this._placeholder.getContext()===q||(this._hovercardShown||this._hovercardScheduled)&&this._currentTrigger===o){this._currentTrigger=null;this.hideHovercard();return;}this.hideHovercard();this._currentTrigger=o;this.showHovercard(p,q);},_fetch:function n(){if(this._hovercard!=null||this._fetching)return;this._fetching=true;var o=function q(){this._fetching=false;},p=function q(){this.hideHovercard();};new (c('AsyncRequest'))(this._endpoint).setData({hover_target:this._targetID}).setMethod('GET').setReadOnly(true).setErrorHandler(p.bind(this)).setTransportErrorHandler(p.bind(this)).setFinallyHandler(o.bind(this)).send();},setHovercard:function n(o){var p,q,r=this;this._hovercard=o;p=babelHelpers.inherits(s,c('OGHovercardLayerHideOnBlur'));q=p&&p.prototype;function s(t){'use strict';q.constructor.call(this,t);}s.prototype.$conditionalHideOnBlur1=function(event){'use strict';var t=event.getTarget();for(var u=0,v=r.$conditionalHideOnBlur2.length;u<v;u++)if(c('DOM').contains(r.$conditionalHideOnBlur2[u],t))return false;return true;};this._hovercard.setPosition(this._position).setAlignment('center').enableBehaviors([s,c('LayerHideOnEscape')]);this._hovercard.subscribe('aftershow',this._onHovercardShow.bind(this));this._hovercard.subscribe('hide',this._onHovercardHide.bind(this));this._hovercard.subscribe('destroy',this._onHovercardDestroy.bind(this));if(this._hovercardScheduled)this.showHovercard(this._triggerClass,this._context);},showHovercard:function n(o,p){c('CSS').addClass(this._target,this._shownClass);if(this._triggerClass&&this._triggerClass!==o)c('CSS').removeClass(this._target,this._triggerClass);this._triggerClass=o;this._triggerClass&&c('CSS').addClass(this._target,this._triggerClass);this._context=p;if(this._hovercard){this._hovercard.setContext(p||this._target).show();this._hovercardShown=true;this._hovercardScheduled=false;this._hidePlaceholder();}else{this._hovercardScheduled=true;this._fetch();this._showPlaceholder();}this.inform('showhovercard');},hideHovercard:function n(){this._hovercardScheduled=false;this._hidePlaceholder();if(this._hovercard){this._hovercard.hide();}else this._onHovercardHide();},_showPlaceholder:function n(){if(!this._placeholder){this._placeholder=l(this._dialogClass);this._placeholder.setContext(this._context||this._target).setPosition(this._position).setAlignment('center').show();this._placeholderListener=this._placeholder.subscribe('hide',this._onPlaceholderHide.bind(this));}},_hidePlaceholder:function n(){this._placeholder&&this._placeholder.hide();},_onPlaceholderHide:function n(){if(this._placeholder){this._hovercardScheduled=false;this._placeholderListener&&this._placeholder.unsubscribe(this._placeholderListener);this._placeholder=null;!this._hovercardShown&&this._removeTriggerClasses();}},_onHovercardShow:function n(){var o=this._hovercard.getContent(),p=c('DOM').scry(o,'textarea.mentionsTextarea')[0];p&&p.focus();},_onHovercardHide:function n(){this._hovercardShown=false;this._removeTriggerClasses();this.inform('hidehovercard');},_onHovercardDestroy:function n(){this._hovercard=null;},_removeTriggerClasses:function n(){c('CSS').removeClass(this._target,this._shownClass);this._triggerClass&&c('CSS').removeClass(this._target,this._triggerClass);}});f.exports=m;}),null);
__d('PhotoMultiPhotosThumb',['Event','Style'],(function a(b,c,d,e,f,g){var h=1200,i={init:function j(k,l){var m=null,n=0;function o(q){n=q;l.forEach(function(r,s){c('Style').set(r,'opacity',s===q?1:0);});}function p(){o((n+1)%l.length);m=setTimeout(p,h);}c('Event').listen(k,'mouseenter',function(){if(m)return;n=0;p();});c('Event').listen(k,'mouseleave',function(){o(0);window.clearTimeout(m);m=null;});}};f.exports=i;}),null);
__d('BulkTagLoader',['AsyncRequest','emptyFunction'],(function a(b,c,d,e,f,g){var h=false;function i(){}Object.assign(i,{loadForSet:function j(k){if(!h){h=true;new (c('AsyncRequest'))('/ajax/photos/sets/tags_fetch.php').setHandler(c('emptyFunction')).setData({set:k}).send();}},loadForAlbum:function j(k){if(!h){h=true;new (c('AsyncRequest'))('/ajax/photos/album/tags_fetch.php').setHandler(c('emptyFunction')).setData({fbid:k}).send();}},reset:function j(){h=false;}});f.exports=i;}),null);
__d('FlexGrid',['csx','DOM'],(function a(b,c,d,e,f,g,h){'use strict';var i={removePhoto:function j(k){var l=c('DOM').scry(document.body,"._vor"+'[data-fbid="'+k+'"]')[0];if(l)c('DOM').remove(l);}};f.exports=i;}),null);
__d('PhotoCurationControl',['csx','Event','Parent','Toggler'],(function a(b,c,d,e,f,g,h){var i={init:function j(k){var l=c('Parent').bySelector(k,"._vor, .fbPhotoStarGridElement");c('Event').listen(l,'mouseleave',function(){c('Toggler').hide();});}};f.exports=i;}),null);
__d('PhotoInlineActions',['csx','cx','Arbiter','AsyncRequest','CSS','Event','Nectar','Parent'],(function a(b,c,d,e,f,g,h,i){var j={init:function k(l,m,n,o,p,q,r,s,t,u){var v=false;c('Arbiter').subscribe(['UFI/CommentAddedActive','UFI/CommentDeletedActive','UFI/LikeActive'],function(w,x){if(parseInt(l.getAttribute('data-fbid'),10)!==x)return;if(w==='UFI/LikeActive')c('CSS').toggleClass(l,"_53a");new (c('AsyncRequest'))().setURI('/ajax/photos/photo/refresh.php').setData({fbid:l.getAttribute('data-fbid')}).setRelativeTo(l).send();});c('Event').listen(l,'click',function(event){var w=event.getTarget();if(v||!c('Parent').bySelector(w,"._53b"))return;event.prevent();c('CSS').toggleClass(l,"_53a");var x={};c('Nectar').addModuleData(x,l);v=new (c('AsyncRequest'))().setURI('/ajax/photos/photo/like.php').setData(babelHelpers['extends']({fbid:l.getAttribute('data-fbid'),relatedid:m,hovercardendpoint:n,includecommentlink:o,hovercardposition:p,includeleadingseparator:q,dialogClass:r,fetchOnHover:s,includeSocialContext:t,tagURI:u},x)).setRelativeTo(l).setErrorHandler(function(){c('CSS').toggleClass(l,"_53a");}).setFinallyHandler(function(){v=false;}).send();});}};f.exports=j;}),null);
__d('StarGridLayout',['Vector','removeFromArray'],(function a(b,c,d,e,f,g){function h(i){'use strict';Object.assign(this,i);}h.prototype.getShortestColumn=function(i){'use strict';return i[0]<=i[1]?0:1;};h.prototype.getDangling=function(i){'use strict';var j=i.filter(function(k){return !this.isStarred(k);}.bind(this));if(j.length%2===1)return j[j.length-1];return null;};h.prototype.mangleOrder=function(i){'use strict';if(i.length<3||!(this.isFixed(i[0])&&this.isStarred(i[1])))return i;var j=this.nextNonStarred(i,2);if(!j)return i;var k=i.concat();c('removeFromArray')(k,j);k.splice(1,0,j);return k;};h.prototype.layout=function(i){'use strict';var j=[0,0],k=0,l=this.getDangling(i),m=[];i=this.mangleOrder(i);for(var n=0;n<i.length;++n){var o=this.getShortestColumn(j),p=i[n];if(this.isStarred(p)){this.renderStarred(this._grid,j,o,p);j[o]+=2;k=Math.max(k,o*2+2);}else{m.push(p);if(m.length===2||p===l){this.renderNonStarred(this._grid,j,o,m);k=Math.max(k,o*2+m.length);m=[];j[o]+=1;}}}return new (c('Vector'))(k,Math.max.apply(null,j));};h.prototype.inNonStarredBlock=function(i,j,k,l){'use strict';return j===k[l]&&Math.floor(i/2)===l;};h.prototype.inStarredBlock=function(i,j,k,l){'use strict';return (j===k[l]||j===k[l]+1)&&Math.floor(i/2)===l;};h.prototype.nextNonStarred=function(i,j){'use strict';for(;j<i.length;++j)if(!this.isStarred(i[j]))return i[j];return null;};h.prototype.layoutReorder=function(i,j,k,l){'use strict';i=i.concat();k=Math.max(0,Math.min(3,k));l=Math.max(0,l);c('removeFromArray')(i,j);i.push(j);var m=[0,0],n=this.getDangling(i),o=false,p=[];for(var q=0;q<i.length;++q){var r=this.getShortestColumn(m),s=i[q];if(this.isStarred(s)){if(s===j)o=true;if(!o&&this.isStarred(j)&&this.inStarredBlock(k,l,m,r)&&this.inNonStarredBlock(k,l,m,r)){c('removeFromArray')(i,j);this.renderStarred(this._grid,m,r,j);m[r]+=2;r=this.getShortestColumn(m);o=true;}if(!o&&!this.isStarred(j)&&this.inStarredBlock(k,l,m,r)&&this.inNonStarredBlock(k,l,m,r)){c('removeFromArray')(i,j);if(p.length===1){p.splice(k%2,0,j);}else{var t=this.nextNonStarred(i,q);if(t){c('removeFromArray')(i,t);p.push(t);p.splice(k%2,0,j);}else p.push(j);}this.renderNonStarred(this._grid,m,r,p);p=[];m[r]+=1;n=this.getDangling(i.slice(q+1));r=this.getShortestColumn(m);o=true;}if(!o&&this.inStarredBlock(k,l,m,r)&&!this.inNonStarredBlock(k,l,m,r)){c('removeFromArray')(i,j);var t=this.nextNonStarred(i,q);i.push(j);if(t){c('removeFromArray')(i,t);i.splice(q,0,t);q--;continue;}l-=1;q--;continue;}this.renderStarred(this._grid,m,r,s);m[r]+=2;}else{p.push(s);if(p.length===2||s===n){if(!o&&!this.isStarred(j)&&this.inNonStarredBlock(k,l,m,r)){c('removeFromArray')(p,j);c('removeFromArray')(i,j);p.splice(k%2,0,j);if(p.length===3){c('removeFromArray')(i,p[2]);i.splice(q,0,p[2]);q=i.indexOf(p[2])-1;p.pop();}n=this.getDangling(i.slice(q+1));o=true;}if(!o&&this.isStarred(j)&&this.inNonStarredBlock(k,l,m,r)){c('removeFromArray')(i,j);this.renderStarred(this._grid,m,r,j);m[r]+=2;r=this.getShortestColumn(m);o=true;}this.renderNonStarred(this._grid,m,r,p);p=[];m[r]+=1;}}}};h.prototype.getStoringLayout=function(i){'use strict';return new h({grid:this._grid,isStarred:this.isStarred,isFixed:this.isFixed,renderStarred:function j(k,l,m,n){i.push(n);},renderNonStarred:function j(k,l,m,n){i.push(n[0]);if(n.length>1)i.push(n[1]);}});};h.prototype.reorder=function(i,j,k,l){'use strict';var m=[];this.getStoringLayout(m).layoutReorder(i,j,k,l);return m;};h.prototype.canonicalize=function(i){'use strict';var j=[];this.getStoringLayout(j).layout(i);return j;};f.exports=h;}),null);
__d('StarGrid',['Arbiter','CSS','DataStore','DOM','Locale','Parent','Style','StarGridLayout','removeFromArray'],(function a(b,c,d,e,f,g){var h={MARGIN:5,isStarred:function i(j){return c('CSS').hasClass(j,'fbPhotoStarGridStarred');},isFixed:function i(j){return c('CSS').hasClass(j,'fbPhotoStarGridFixed');},setPosition:function i(j,k,l){var m=c('Locale').isRTL()?'margin-right':'margin-left';c('Style').set(j,'position','absolute');c('Style').set(j,'margin-top',k+'px');c('Style').set(j,m,l+'px');},renderNonStarred:function i(j,k,l,m){for(var n=0;n<m.length;++n){var o=k[l]*h.getSize(j),p=(l*2+n)*h.getSize(j);h.setPosition(m[n],o,p);}},renderStarred:function i(j,k,l,m){var n=k[l]*h.getSize(j),o=l*2*h.getSize(j);h.setPosition(m,n,o);},mergeWithPreviousGrid:function i(j){var k=j.previousSibling;if(k&&c('CSS').hasClass(k,'fbStarGrid')){c('CSS').addClass(k,'fbStarGridAppendedTo');while(j.firstChild)k.appendChild(j.firstChild);c('DOM').remove(j);j=k;}return j;},addPhotos:function i(j){var k=c('DOM').scry(document.body,'.fbStarGrid')[0];if(!k)return;c('DOM').prependContent(k,j);var l=this.getSize(k);this.mergeAndLayoutGrid(k,l);},removeFromGrid:function i(j){var k=c('Parent').byClass(j,'fbStarGrid'),l=h.getElements(k);c('removeFromArray')(l,j);c('DOM').remove(j);h.layoutGrid(k,l);c('Arbiter').inform('StarGrid/UPDATE',k);},removePhoto:function i(j){var k=c('DOM').scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+j+'"]')[0];this.removeFromGrid(k);},removeUntaggedPhoto:function i(j){var k=c('DOM').scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+j+'"]'+'[data-in-photos-of="1"]');if(k.length>0)this.removeFromGrid(k[0]);},removePhotos:function i(j){var k,l;for(var m=0;m<j.length;m++){var n=j[m],o=c('DOM').scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+n+'"]')[0];k=c('Parent').byClass(o,'fbStarGrid');l=h.getElements(k);c('removeFromArray')(l,o);c('DOM').remove(o);}h.layoutGrid(k,l);c('Arbiter').inform('StarGrid/UPDATE',k);},layoutGrid:function i(j,k){var l=new (c('StarGridLayout'))({_grid:j,isStarred:h.isStarred,isFixed:h.isFixed,renderNonStarred:h.renderNonStarred,renderStarred:h.renderStarred});h.setElements(j,k);var m=l.layout(k);c('Style').set(j,'width',m.x*h.getSize(j)+'px');c('Style').set(j,'height',m.y*h.getSize(j)+'px');},mergeAndLayoutGrid:function i(j,k){var l=c('DOM').scry(j,'.fbPhotoStarGridElement'),m=h.mergeWithPreviousGrid(j),n=l;if(j!==m)n=h.getElements(m).concat(l);h.setElements(j,n);c('DataStore').set(j,'size',k);h.layoutGrid(m,n);c('Arbiter').subscribe('PhotosBulkEditablePhoto.MOVED',function(o,p){h.removePhoto(p);}.bind(this));c('Arbiter').inform('StarGrid/UPDATE',j);},getSize:function i(j){return c('DataStore').get(j,'size');}};Object.assign(h,{getElements:function i(j){var k=c('DataStore').get(j,'elements');if(!k){k=c('DOM').scry(j,'div.fbPhotoStarGridElement');h.setElements(j,k);}return k;},setElements:function i(j,k){c('DataStore').set(j,'elements',k);}});f.exports=h;}),null);
__d('TagSuggestionsDrawer',['AsyncRequest','PhotosAppSection'],(function a(b,c,d,e,f,g){var h=false,i={init:function j(){if(h)return;h=true;c('PhotosAppSection').subscribe('toggle_drawer',i._onToggle);},_onToggle:function j(k,l){if(l.button_clicked=='show'){i._notify(false);}else i._notify(true);},_notify:function j(k){new (c('AsyncRequest'))('/ajax/medley/tag_suggestions_drawer.php').setData({is_closed:k}).send();}};f.exports=i;}),null);
__d("XMarketplaceHomePageController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/marketplace\/{?*rest}",{rest:{type:"String"},ref:{type:"String"}});}),null);