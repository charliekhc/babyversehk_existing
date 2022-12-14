<?php

/**

 * The Template for displaying product archives, including the main shop page which is a post type archive

 *

 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.

 *

 * HOWEVER, on occasion WooCommerce will need to update template files and you

 * (the theme developer) will need to copy the new files to your theme to

 * maintain compatibility. We try to do this as little as possible, but it does

 * happen. When this occurs the version of the template file will be bumped and

 * the readme will list any important changes.

 *

 * @see https://docs.woocommerce.com/document/template-structure/

 * @package WooCommerce\Templates

 * @version 3.5.0

 */



defined( 'ABSPATH' ) || exit;



get_header('shop');



/**

 * woocommerce_before_main_content hook.

 *

 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)

 * @hooked woocommerce_breadcrumb - 20 - removed

 * @hooked WC_Structured_Data::generate_website_data() - 30

 */

do_action('woocommerce_before_main_content');



global $wp_query;

$cat = $wp_query->get_queried_object();


if (isset($cat->term_id)) {

	$thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);

	$image = wp_get_attachment_url($thumbnail_id);
	$description = $cat->description;
}

?>

<div id="main" class="fixed box box-common">
	<div class="brand-description">
		<?php echo $description; ?>
	</div>


	<?php

	/**

	 * Hook: woocommerce_archive_description.

	 *

	 * @hooked woocommerce_taxonomy_archive_description - 10

	 * @hooked woocommerce_product_archive_description - 10

	 */

	do_action('woocommerce_archive_description');



    if ( woocommerce_product_loop() ) {



        /**

         * Hook: woocommerce_before_shop_loop.

		 *

         * @hooked woocommerce_output_all_notices - 10

		 * @hooked woocommerce_result_count - 20

		 * @hooked woocommerce_catalog_ordering - 30

		 */



		if (!babystreet_get_option('show_refine_area')) {

			remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);

		}

		do_action('woocommerce_before_shop_loop');



	    woocommerce_product_loop_start();



	    while ( have_posts() ) {

		    the_post();



		    /**

		     * Hook: woocommerce_shop_loop.

			 */

			do_action( 'woocommerce_shop_loop' );



		    wc_get_template_part( 'content', 'product' );



	    }



	    woocommerce_product_loop_end();



	    /**

	     * Hook: woocommerce_after_shop_loop.

		 *

		 * @hooked woocommerce_pagination - 10

		 */

		do_action('woocommerce_after_shop_loop');



    } else {



	    /**

	     * Hook: woocommerce_no_products_found.

	     *

	     * @hooked wc_no_products_found - 10

	     */

	    do_action( 'woocommerce_no_products_found' );

    }

?>



</div>

<?php

/**

 * Hook: woocommerce_after_main_content.

 *

 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)

 */

do_action('woocommerce_after_main_content');



get_footer('shop');