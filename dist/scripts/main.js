function isotopeFix(){var a=$(".container"),b=$("img");a.hasClass("isotope")?(a.isotope("destroy"),a.imagesLoaded(function(){a.isotope({itemSelector:".full-view"}),b.load(function(){a.isotope("reLayout")})})):a.imagesLoaded(function(){a.isotope({itemSelector:".full-view"}),b.load(function(){a.isotope("reLayout")})})}function destroyIsotope(){var a=$(".container");a.hasClass("isotope")&&a.isotope("destroy")}function validateForm(a){var b=!0;return a.removeClass("warning"),$("#message").removeClass("popup-message").html(""),""===a.val()&&(a.addClass("warning"),$("#message").addClass("popup-message").html("<span>Oops, please fill out the form.</span>"),b=!1),b}function validateCompleteForm(){var a=!0,b=$("input#name"),c=$("textarea#description"),d=$("#location"),e=$("#address-location"),f=$("#photo-upload");return b.removeClass("red-warning"),c.removeClass("red-warning"),(""===f.val()||""===b.val()||!d.is(":checked")&&""===e.val()||" "===c.val())&&(console.log("its false"),a=!1,$(".modal-error").addClass("modal-active-error"),$(".close-button-error").click(function(){$(".modal-error").removeClass("modal-active-error")}),""===b.val()&&b.addClass("red-warning")," "===c.val()&&c.addClass("red-warning")),a}function clickLocation(){$("#location").click(function(){$("#location");var a=$("#address-location");$("#location").is(":checked")?(console.log("yes, lets geolocate"),a.attr("disabled",!0),a.css("background","rgb(0, 89, 97)"),a.val("")):(a.attr("disabled",!1),a.css("background","white"))})}function checkGeoLocation(){var a=!0,b=$("#address-location").val();return void 0!==geoLatitude&&void 0!==geoLongitude||""!==b||(console.log("no geolocation"),a=!1,$(".modal-error-geo").addClass("modal-active-error-geo"),$(".close-button-error-geo").click(function(){$(".modal-error-geo").removeClass("modal-active-error-geo")})),a}(function(){var a,b,c,d,e,f={}.hasOwnProperty,g=function(a,b){function c(){this.constructor=a}for(var d in b)f.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};d=function(){function a(){this.options_index=0,this.parsed=[]}return a.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},a.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},a.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},a}(),d.select_to_array=function(a){var b,c,e,f,g;for(c=new d,g=a.childNodes,e=0,f=g.length;f>e;e++)b=g[e],c.add_node(b);return c.parsed},b=function(){function a(b,c){this.form_field=b,this.options=null!=c?c:{},a.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return a.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},a.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||a.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||a.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||a.default_no_result_text},a.prototype.mouse_enter=function(){return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this.mouse_on_container=!1},a.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},a.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},a.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},a.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?' style="'+a.style+'"':"",'<li class="'+b.join(" ")+'"'+c+' data-option-array-index="'+a.array_index+'">'+a.search_text+"</li>"):"":""},a.prototype.result_add_group=function(a){return a.search_match||a.group_match?a.active_options>0?'<li class="group-result">'+a.search_text+"</li>":"":""},a.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build(),this.results_showing?this.winnow_results():void 0},a.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},a.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},a.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},a.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},a.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},a.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},a.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},a.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},a.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},a.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},a.default_multiple_text="Select Some Options",a.default_single_text="Select an Option",a.default_no_result_text="No results match",a}(),a=jQuery,a.fn.extend({chosen:function(d){return b.browser_is_supported()?this.each(function(){var b,e;b=a(this),e=b.data("chosen"),"destroy"===d&&e?e.destroy():e||b.data("chosen",new c(this,d))}):this}}),c=function(b){function c(){return e=c.__super__.constructor.apply(this,arguments)}return g(c,b),c.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},c.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},c.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},c.prototype.destroy=function(){return a(document).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},c.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},c.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},c.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},c.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},c.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},c.prototype.close_field=function(){return a(document).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},c.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},c.prototype.test_active_click=function(b){return this.container.is(a(b.target).closest(".chosen-container"))?this.active_field=!0:this.close_field()},c.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=d.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},c.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},c.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},c.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},c.prototype.update_results_content=function(a){return this.search_results.html(a)},c.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},c.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},c.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},c.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},c.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},c.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},c.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},c.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},c.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},c.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},c.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},c.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},c.prototype.result_select=function(a){var b,c,d;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.result_single_selected&&(this.result_single_selected.removeClass("result-selected"),d=this.result_single_selected[0].getAttribute("data-option-array-index"),this.results_data[d].selected=!1),this.result_single_selected=b),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},c.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},c.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},c.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},c.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},c.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},c.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},c.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},c.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},c.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},c.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},c.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},c.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},c.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},c}(b)}).call(this),HomeView=Backbone.View.extend({homeTemplate:_.template($("#home-template").text()),className:"home-view",initialize:function(){$(".full").append(this.el),this.render()},render:function(){this.$el.append(this.homeTemplate())}}),BottomView=Backbone.View.extend({bottomTemplate:_.template($("#bottom-template").text()),className:"bottom-view",events:{"click #activate":"activate"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.bottomTemplate({place:this.model}))},activate:function(){this.$el.find("#activate").attr("href","#/places/"+this.model.id)}}),FullView=Backbone.View.extend({gridTemplate:_.template($("#grid-template").text()),className:"full-view",events:{"click #activate":"activate"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.gridTemplate({place:this.model}))},activate:function(){this.$el.find("#activate").attr("href","#/places/"+this.model.id)}}),SearchView=Backbone.View.extend({searchTemplate:_.template($("#search-template").text()),className:"search-view",events:{"click #search-button":"search"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.searchTemplate())},search:function(){var a=$("#city-name").val().toLowerCase();""!==a&&this.$el.find("#search-button").attr("href","#/places/results/"+a)}}),IndividualView=Backbone.View.extend({singleTemplate:_.template($("#single-template").text()),className:"single-view",events:{"click #like-button":"likeIt","click #submit-comment":"addComment"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.singleTemplate({place:this.model}))},likeIt:function(){this.model.increment("likes"),console.log(this.model),this.model.save()},addComment:function(){var a=new Comment,b=$("#new-comment").val();a.set("content",b),a.set("parent",this.model),router.comments.add(a),console.log(a),validateForm($("#new-comment"))&&a.save(null,{success:function(){console.log(a.createdAt),$("#new-comment").val(""),$("#comments-box").append('<div id="individual-comment"><p>'+a.attributes.content+"</p>"+'<img src="images/clock-2.png">'+"<span>"+moment(a.createdAt,"ddd MMM DD YYYY HH:mm:ss").fromNow()+"</span>"+"</div>")},error:function(a,b){console.log(b.description)}})}});var geocoder,geoLatitude,geoLongitude,geoCity,geoAddress;AddView=Backbone.View.extend({addTemplate:_.template($("#add-template").text()),className:"add-view",events:{"click #location":"getLocation","click #save":"save"},initialize:function(){$(".container").append(this.el),this.render(),console.log("new addView"),geocoder=new google.maps.Geocoder},render:function(){this.$el.append(this.addTemplate())},getLocation:function(){function a(a){console.log("user approved geolocation"),geoLatitude=parseFloat(a.coords.latitude),geoLongitude=parseFloat(a.coords.longitude),console.log(geoLatitude+" and "+geoLongitude),void 0===geoLatitude&&console.log("undefined");var b=new google.maps.LatLng(geoLatitude,geoLongitude);geocoder.geocode({latLng:b},function(a,b){if(b==google.maps.GeocoderStatus.OK)if(a[0]){console.log(a[0]);var c=a[0].formatted_address;geoCity=a[0].address_components[2].long_name.toLowerCase(),geoAddress=c.replace(", USA",""),console.log(geoAddress)}else alert("No results found");else alert("Geocoder failed due to: "+b)})}function b(a){console.log("user denied geolocation"),alert(a.code),1==a.code&&console.log("user said no")}navigator.geolocation?navigator.geolocation.getCurrentPosition(a,b):alert("Geolocation is not supported by this browser.")},save:function(){var a=new PlaceClass,b=$("#photo-upload")[0],c=$("#name").val(),d=$("#description").val(),e=$(".select").val();if(console.log(b.files),b.files.length>0){var f=b.files[0],g="photo.jpg",h=new Parse.File(g,f);console.log(h),validateCompleteForm()&&checkGeoLocation()&&h.save().then(function(){console.log(h.url()),a.set("placePhoto",h),a.save()})}else console.log("Error occured.");if(""!==$("#address-location").val()){var i=new google.maps.Geocoder,j=$("#address-location").val();a.set("address",j),i.geocode({address:j},function(b,c){if(c==google.maps.GeocoderStatus.OK){console.log(b[0]);var d=b[0].address_components[2].long_name.toLowerCase(),e=b[0].geometry.location.ob,f=b[0].geometry.location.pb;console.log(e,f),a.set("latitude",e),a.set("longitude",f),a.set("city",d)}else alert("Geocode was not successful for the following reason: "+c)})}$("#location").is(":checked")?(a.set("latitude",geoLatitude),a.set("longitude",geoLongitude),console.log(geoLatitude),a.set("address",geoAddress),a.set("city",geoCity)):console.log("error"),a.set("products",e),a.set("likes",void 0),a.set("placeName",c),a.set("description",d),collection=router.places,collection.add(a),console.log(collection),checkGeoLocation()&&validateCompleteForm()&&a.save(null,{success:function(){console.log("it saved"),$("#name").val(""),$("#description").val(""),$(".select").val("").trigger("chosen:updated"),$("#location").attr("checked",!1),$(".modal").addClass("modal-active"),$(".close-button").click(function(){$(".modal").removeClass("modal-active"),router.navigate("#",{trigger:!0})})},error:function(a,b){console.log(b.description)}})}}),Parse.initialize("odceeKZIPEFi25d3RsOWBQqKz6QWTqJ1cckCkTnd","PwniGhD9YaeJgeBJQBdPTgPcTUfHdR5zANaNyfOE");var PlaceClass=Parse.Object.extend("LocalClass"),Comment=Parse.Object.extend("Comment"),PlaceCollection=Parse.Collection.extend({model:PlaceClass}),CommentCollection=Parse.Collection.extend({model:Comment});
AppRouter=Backbone.Router.extend({initialize:function(){console.log("new route created"),this.places=new PlaceCollection,this.comments=new CommentCollection},routes:{"":"home",places:"showPlaces",addplace:"addPlace","places/results/:city":"searchCity","places/:id":"showPlace"},home:function(){$(".container").empty(),$(".full").empty(),$(".footer").empty(),console.log("i am home");var a=_.template($("#footer-template").text());destroyIsotope(),new HomeView,$(".container").append('<h2 class="bottom-head"> Recent finds</h2>'),query=new Parse.Query(PlaceClass),query.limit(3),query.descending("createdAt"),query.find({success:function(b){for(var c=0;c<b.length;c++)new BottomView({model:b[c]});$(".footer").append(a())},error:function(a,b){console.log(b.description)}})},showPlaces:function(){$(".container").empty(),$(".full").empty(),$(".footer").empty();var a=_.template($("#header-template").text());$(".full").append(a());var b=_.template($("#footer-template").text());new SearchView,this.places.fetch({success:function(a){a.each(function(a){new FullView({model:a})}),isotopeFix(),$(".footer").append(b())}})},showPlace:function(a){$(".container").empty(),$(".full").empty(),$(".footer").empty(),destroyIsotope();var b=_.template($("#header-template").text());$(".full").append(b());var c=_.template($("#footer-template").text()),d=this;this.places.fetch({success:function(){placeToShow=d.places.get(a),console.log(placeToShow.id),new IndividualView({model:placeToShow}),console.log("view"),$(".container").append('<div id="map"> </div>');var b=placeToShow.get("latitude"),e=placeToShow.get("longitude"),f=L.mapbox.map("map","alisonelizabeth.map-s8zjw3c1").setView([b,e],15);L.mapbox.markerLayer({type:"Feature",geometry:{type:"Point",coordinates:[e,b]},properties:{title:placeToShow.get("placeName"),description:placeToShow.get("address"),"marker-size":"medium","marker-color":"#1E6A8B"}}).addTo(f);var g=new Parse.Query(Comment);console.log(g),g.equalTo("parent",placeToShow),g.descending("createdAt"),g.find({success:function(a){console.log(a.length),$("#comment-header").append("<h2> Latest Comments </h2>");for(var b=0;b<a.length;b++)$("#comments-box").append('<div id="individual-comment"><p>'+a[b].attributes.content+"</p>"+'<img src="images/clock-2.png">'+"<span>"+moment(a[b].createdAt,"ddd MMM DD YYYY HH:mm:ss").fromNow()+"</span>"+"</div>")},error:function(a,b){console.log(b.description)}}),$(".footer").append(c())}})},addPlace:function(){function a(a){if(a.files&&a.files[0]){var b=new FileReader;b.onload=function(a){$("#image-preview").attr("src",a.target.result)},b.readAsDataURL(a.files[0])}}$(".container").empty(),$(".full").empty(),$(".footer").empty(),destroyIsotope(),new AddView;var b=_.template($("#header-template").text());$(".full").append(b());var c=_.template($("#footer-template").text());$(".footer").append(c()),$(".select").chosen({max_selected_options:9}),clickLocation(),$("#image-placeholder").show(),$("#image-preview").hide(),$("#check").hide(),$("#photo-upload").change(function(){$("#image-placeholder").hide(),$("#check").show(),$("#image-preview").show(),a(this)})},searchCity:function(a){var a=$("#city-name").val().toLowerCase();console.log(a);var b=window.location.hash.split(/\//)[3];if(""!==a&&""!==b){console.log("input");var c=new Parse.Query(PlaceClass);c.equalTo("city",a),c.find({success:function(a){if(console.log(a),$(".container").empty(),new SearchView,a.length>0){for(var b=0;b<a.length;b++)new FullView({model:a[b]});isotopeFix()}else console.log("no results"),$(".container").append('<div id="no-results"> <p>Sorry, there are no results for that city.</p> <a href="#/places"> Go back </div></a> ')},error:function(a,b){console.log(b.description)}})}else if(""!==b){console.log("url");var c=new Parse.Query(PlaceClass);c.equalTo("city",b),c.find({success:function(a){if(console.log(a),$(".container").empty(),new SearchView,a.length>0){for(var b=0;b<a.length;b++)new FullView({model:a[b]});isotopeFix()}else console.log("no results"),$(".container").append('<div id="no-results"> <p>Sorry, there are no results for that city.</p> <a href="#/places"> Go back </div></a> ')},error:function(a,b){console.log(b.description)}})}}});var router=new AppRouter;Backbone.history.start();