/* 
  @project intabs
  @name intabs.js
  @license MIT License (http://www.opensource.org/licenses/mit-license.php)
  @author Lukasz Tyrala (http://lukasztyrala.pl/)
  @description A jQuery Plugin for tabbed content browsing that needs no id only class names
  @contributors Thanks for help goes to pblo, jan and adrian
  @repo http://github.com/lukasztyrala/intabs
*/

jQuery.fn.intabs = function(tab_id) {

  return this.each(function() {

    var start_tab       = tab_id || 0; // Tab index to start from

    // Settings ----------------------------
    var nav_element_def = '.tabs li';
    var sub_section_def = '.tabbed';
    var normal_def      = '.normal';
    var current_label   = 'current';
    // End of settings ---------------------

    var nav_element = $(this).find(nav_element_def).not(normal_def);
    var sub_section = $(this).find(sub_section_def);

    var sub_section_start = sub_section.eq(start_tab);
    var nav_element_start = nav_element.eq(start_tab);

    sub_section.hide();
    sub_section_start.show();
    nav_element.addClass('');
    nav_element_start.addClass(current_label);

    // Change 'click' to eg. 'mouseover' for different event
    nav_element.click(function() {
      var nav_index = nav_element.index(this);

      sub_section.hide();
      sub_section.eq(nav_index).show();

      nav_element.removeClass(current_label);
      nav_element.eq(nav_index).addClass(current_label);
      return false;
     });
   });

};
