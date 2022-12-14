<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package     Zoo Theme
 * @version     1.0.0
 * @author      Zootemplate
 * @link        https://www.zootemplate.com/
 * @copyright   Copyright (c) 2018 Zootemplate
 
 */

if(is_active_sidebar(get_theme_mod('zoo_blog_sidebar','sidebar'))) {
?>
<aside id="sidebar"
       class="sidebar widget-area col-12 col-md-3" role="complementary">
    <?php dynamic_sidebar(get_theme_mod('zoo_blog_sidebar','sidebar')); ?>
</aside>
<?php }