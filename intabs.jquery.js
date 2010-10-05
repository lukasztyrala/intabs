/* 
  @project intabs
  @name intabs.js
  @license MIT License (http://www.opensource.org/licenses/mit-license.php)
  @author Lukasz Tyrala (http://lukasztyrala.pl/)
  @description A jQuery Plugin for tabbed content browsing that needs no id only class names
  @contributors Thanks for help goes to pblo, jan and adrian
  @repo http://github.com/lukasztyrala/intabs
*/

jQuery.fn.intabs = function (options) {

    return this.each(function () {
  
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
    
        var st = settings.starting_tab;
        var te = settings.tab_element;
        var se = settings.section_element;
        var ntc = settings.no_tab_class;
        var cc = settings.current_class;
        var tev = settings.triggering_event;
    
        var nav_element = $(this).find(te).not(ntc);
        var sub_section = $(this).find(se);
    
        var sub_section_start = sub_section.eq(st);
        var nav_element_start = nav_element.eq(st);
    
        sub_section.hide();
        sub_section_start.show();
        nav_element.addClass('');
        nav_element_start.addClass(cc);
    
        nav_element.bind(tev, function() {
            var nav_index = nav_element.index(this);
            sub_section.hide();
            sub_section.eq(nav_index).show();
            nav_element.removeClass(cc);
            nav_element.eq(nav_index).addClass(cc);
            return false;
         });
     });

};
