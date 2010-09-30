/* 
  @project intabs
  @name intabs.js
  @license MIT License (http://www.opensource.org/licenses/mit-license.php)
  @author Lukasz Tyrala (http://lukasztyrala.pl/)
  @description A jQuery Plugin for tabbed content browsing that needs no id only class names
  @contributors Thanks for help goes to pblo, jan and adrian
  @repo http://github.com/lukasztyrala/intabs
*/

jQuery.fn.intabs = function(options) {

  return this.each(function() {

    var settings = {
      starting_tab: 0,
      tab_element: '.tabs li',
      section_element: '.tabbed',
      no_tab_class: '.normal',
      current_class: 'current',
      triggering_event: 'click' 
    };
    
    if (options) { 
      jQuery.extend(settings, options);
    }

    var start_tab = settings.starting_tab;
    var nav_element_def = settings.tab_element;
    var sub_section_def = settings.section_element;
    var normal_def = settings.no_tab_class;
    var current_label = settings.current_class;
    var trigger_event = settings.triggering_event;

    var nav_element = $(this).find(nav_element_def).not(normal_def);
    var sub_section = $(this).find(sub_section_def);

    var sub_section_start = sub_section.eq(start_tab);
    var nav_element_start = nav_element.eq(start_tab);

    sub_section.hide();
    sub_section_start.show();
    nav_element.addClass('');
    nav_element_start.addClass(current_label);

    nav_element.bind(trigger_event, function() {
      var nav_index = nav_element.index(this);

      sub_section.hide();
      sub_section.eq(nav_index).show();

      nav_element.removeClass(current_label);
      nav_element.eq(nav_index).addClass(current_label);
      return false;
     });
   });

};
