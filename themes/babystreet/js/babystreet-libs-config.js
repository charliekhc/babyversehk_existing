(function ($) {
	"use strict";

	$(document).ready(function () {
		/***************************************
		 * Used for displaying flex slides when
		 * there are featured images from 1-5
		 * "babystreet-flex-slider"
		 ***************************************/
		$('.babystreet_flexslider', '#content').flexslider({
			controlNav: false,
			directionNav: true,
			animation: 'fade',
			animationSpeed: 1500,
			smoothHeight: true,
			prevText: "", //String: Set the text for the "previous" directionNav item
			nextText: "",
			touch: true,
			pauseOnHover: true
		});

		/**************************
		 * "babystreet-supersized-conf"
		 **************************/
		if (typeof babystreet_supersized_conf !== 'undefined') {
			var imagesArr = new Array();
			for (var i = 0; i < babystreet_supersized_conf.images.length; i++) {
				imagesArr[i] = {image: babystreet_supersized_conf.images[i]};
			}

			$.supersized({
				// Functionality
				slideshow: 1, // Slideshow on/off
				autoplay: 1, // Slideshow starts playing automatically
				start_slide: 1, // Start slide (0 is random)
				stop_loop: 0, // Pauses slideshow on last slide
				random: 0, // Randomize slide order (Ignores start slide)
				slide_interval: 5000, // Length between transitions
				transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed: 1300, // Speed of transition
				new_window: 0, // Image links open in new window/tab
				pause_hover: 0, // Pause slideshow on hover
				keyboard_nav: 0, // Keyboard navigation on/off
				performance: 1, // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
				image_protect: 1, // Disables image dragging and right click with Javascript

				// Size and Position
				min_width: 0, // Min width allowed (in pixels)
				min_height: 0, // Min height allowed (in pixels)
				vertical_center: 1, // Vertically center background
				horizontal_center: 1, // Horizontally center background
				fit_always: 0, // Image will never exceed browser width or height (Ignores min. dimensions)
				fit_portrait: 0, // Portrait images will not exceed browser height
				fit_landscape: 0, // Landscape images will not exceed browser width

				// Components
				slide_links: false, // Individual links for each slide (Options: false, 'num', 'name', 'blank')
				thumb_links: 0, // Individual thumb links for each slide
				thumbnail_navigation: 0, // Thumbnail navigation
				slides: imagesArr,
				// Theme Options
				progress_bar: 0, // Timer for each slide
				mouse_scrub: 0

			});
		}
		/*******************************
		 * END "babystreet-supersized-conf"
		 *******************************/
		/*****************************
		 * "babystreet-masonry-settings"
		 *****************************/
		if (typeof babystreet_masonry_settings !== 'undefined') {
			$('.babystreet_blog_masonry', '#main').isotope({
				itemSelector: '#main div.blog-post'
			});
		}

		/* *******************************
		 * creates ajax search if no touch
		 * "babystreet-ajax-search"
		 *********************************/
		if (typeof babystreet_ajax_search !== 'undefined') {
			var touch = $('html.touch');
			if (touch.length == 0) {
				new $.BabystreetAjaxSearch();
			}
		}

		/**************************
		 * "babystreet-magnific-popup"
		 **************************/
		$('a.babystreet-magnific-gallery-item').magnificPopup({
			mainClass: 'mfp-fade',
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* for portfolio list */
		$('a.portfolio-lightbox-link').magnificPopup({
			mainClass: 'mfp-fade',
			type: 'image'
		});

		/*****************************
		 * "babystreet-owl-carousel-cat"
		 *****************************/
		if (typeof babystreet_owl_carousel_cat !== 'undefined') {
			var is_rtl = false;
			if (babystreet_rtl.is_rtl === 'true') {
				is_rtl = true;
			}
			$(".babystreet_woo_categories_shop.babystreet-owl-carousel", "#main").owlCarousel({
				rtl: is_rtl,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
                    768: {
                        items: (babystreet_owl_carousel_cat.columns < 3 ? babystreet_owl_carousel_cat.columns : "3"),
                    },
                    1024: {
                        items: (babystreet_owl_carousel_cat.columns < 4 ? babystreet_owl_carousel_cat.columns : "4"),
                    },
					1280: {
						items: babystreet_owl_carousel_cat.columns,
					}
				},
				dots: false,
				loop: false,
				nav: true,
				navText: [
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>"
				]
			});
		}

		/*************************
		 * "babystreet-owl-carousel"
		 *************************/
		if (typeof babystreet_owl_carousel !== 'undefined') {
            var is_rtl = false;
            if (babystreet_rtl.is_rtl === 'true') {
                is_rtl = true;
            }
            $(".babystreet-related-blog-posts div.babystreet-owl-carousel, .similar_projects div.babystreet-owl-carousel, .related.products div.babystreet-owl-carousel", "#content:not(.has-sidebar)").owlCarousel({
				rtl: is_rtl,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					768: {
						items: 3,
					},
					1024: {
						items: 3,
					},
					1280: {
						items: 3,
					}
				},
				dots: false,
				nav: true,
				navText: [
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>"
				]
			});
		}
		if (typeof babystreet_owl_carousel !== 'undefined') {
			var is_rtl = false;
			if (babystreet_rtl.is_rtl === 'true') {
				is_rtl = true;
			}
			$(".babystreet-related-blog-posts div.babystreet-owl-carousel, .similar_projects div.babystreet-owl-carousel, .related.products div.babystreet-owl-carousel", "#content.has-sidebar").owlCarousel({
				rtl: is_rtl,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					768: {
						items: 3,
					},
					1024: {
						items: 3,
					},
					1280: {
						items: 3,
					}
				},
				dots: false,
				nav: true,
				navText: [
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>"
				]
			});
		}

		/**********************
		 * "babystreet-quickview"
		 *********************/
		if (typeof babystreet_quickview !== 'undefined') {
			$(document).on('click', 'a.babystreet-quick-view-link', function (e) {

				$(this).closest('div.prod_hold').addClass('loading');
				var product_id = $(this).attr('data-id');
				var data = {action: 'babystreet_quickview', productid: product_id};

				$.post(
								babystreet_quickview.babystreet_ajax_url, data, function (response) {

									$.magnificPopup.open({
										mainClass: 'babystreet-quick-view-lightbox mfp-fade',
										items: {
											src: '<div class="babystreet-quickview-product-pop">' + response + '</div>',
											type: 'inline'
										},
										callbacks: {
                                            open: function () {
                                                $(this.content).find('form').each( function() {
                                                    $( this ).babystreet_wc_variation_form();
                                                });

                                            }
										},
										removalDelay: 300
									});

									$('.prod_hold.loading').removeClass('loading');

								});
				e.preventDefault();
			});
		}

		/***********************************
		 * "babystreet-variation-prod-cloudzoom"
		 ***********************************/
		if (typeof babystreet_variation_prod_cloudzoom !== 'undefined') {
			if (jQuery('#zoom1').length) {
				jQuery(document).on('update_variation_values', function () {

					jQuery('a.reset_variations').on('click', jQuery(this), function (event) {

						var o_href = $('#zoom1').attr('data-o_href');

						$('#zoom1').attr('href', o_href);
						jQuery('#zoom1').CloudZoom();
					});

					jQuery('table.variations select option').on('click', jQuery(this), function (event) {
						// Destroy the previous zoom
						if (jQuery('#zoom1').data('zoom')) {
							jQuery('#zoom1').data('zoom').destroy();
							jQuery('#zoom1').CloudZoom();
							return false;
						}
					});
				});
			}
		}

		/***********************************
		 * "babystreet-ytplayer-conf"
		 ***********************************/
		if (typeof babystreet_ytplayer_conf !== 'undefined') {
			$("div.babystreet_bckgr_player").YTPlayer();
		}
		/* End Ready */
	});

	/************************
	 *  "babystreet-ajax-search"
	 ************************/
	$.BabystreetAjaxSearch = function (options) {
		var defaults = {
			delay: 200, //delay in ms until the user stops typing.
			minChars: 3, //dont start searching before we got at least that much characters
			scope: 'body > div#search'

		};

		this.options = $.extend({}, defaults, options);
		this.scope = $(this.options.scope);
		this.timer = false;
		this.lastVal = "";
		this.bind_keyup();
	};

	$.BabystreetAjaxSearch.prototype =
					{
						bind_keyup: function ()
						{
							this.scope.on('keyup', '#s', $.proxy(this.attempt_search, this));
						},
						attempt_search: function (e)
						{
							clearTimeout(this.timer);
							//if the field is empty - clear the results
							if (e.currentTarget.value.trim().length == '') {
								var result = $('.ajax_search_result');
								if (result)
									result.remove();
							}

							//only execute search if chars are at least "minChars" and search differs from last one
							if (e.currentTarget.value.length >= this.options.minChars && this.lastVal != $.trim(e.currentTarget.value))
							{
								//wait at least "delay" miliseconds to execute ajax. if user types again during that time dont execute
								this.timer = setTimeout($.proxy(this.execute_search, this, e), this.options.delay);
							}
						},
						execute_search: function (e)
						{
							var obj = this,
											currentField = $(e.currentTarget).attr("autocomplete", "off"),
											form = currentField.parents('form:eq(0)'),
											results = form.find('.ajax_search_result'),
											loading = $('<div class="ajax_loading"><span class="ajax_loading_inner"></span></div>'),
											action = form.attr('action'),
											values = form.serialize();
							values += '&action=babystreet_ajax_search';
							//check if the form got get parameters applied and also apply them
							if (action.indexOf('?') != -1)
							{
								action = action.split('?');
								values += "&" + action[1];
							}

							if (!results.length)
								results = $('<div class="ajax_search_result"></div>').appendTo(form);
							//return if we already hit a no result and user is still typing
							if (results.find('.ajax_not_found').length && e.currentTarget.value.indexOf(this.lastVal) != -1) {
								return;
							}
							this.lastVal = e.currentTarget.value;
							$.ajax({
								url: babystreet_main_js_params.admin_url,
								type: "POST",
								data: values,
								beforeSend: function ()
								{
									if (!currentField.next('div.ajax_loading').length) {
										loading.insertAfter(currentField);
									}
								},
								success: function (response)
								{
									if (response == 0)
										response = "";
									results.html(response);
								},
								complete: function ()
								{
									loading.remove();
								}
							});
						}
					}
	/***************************
	 * END "babystreet-ajax-search"
	 ***************************/

})(window.jQuery);

/**********************
 * "babystreet-quickview"
 *********************/
if (typeof babystreet_quickview !== 'undefined') {
    /*global babystreet_quickview, wc_cart_fragments_params */
    ;(function ($, window, document, undefined) {
        /**
         * BabystreetVariationForm class which handles variation forms and attributes.
         */
        var BabystreetVariationForm = function ($form) {
            var self = this;
            self.$form = $form;
            self.$attributeFields = $form.find('.variations select');
            self.$singleVariation = $form.find('.single_variation');
            self.$singleVariationWrap = $form.find('.single_variation_wrap');
            self.$resetVariations = $form.find('.reset_variations');
            self.$product = $form.closest('.product');
            self.variationData = $form.data('product_variations');
            self.useAjax = false === self.variationData;
            self.xhr = false;
            self.loading = true;

            // Increase / Decrease quantity
            var $quantityPlus = $form.find('input.babystreet-qty-plus');
            var $quantityMinus = $form.find('input.babystreet-qty-minus')

            $quantityPlus.on('click', function () {
                var $quantityInput = $quantityPlus.parent().find('input[type=number]');
                if (isNaN($quantityInput.val())) {
                    $quantityInput.val(0);
                }
                $quantityInput.val(parseInt($quantityInput.val()) + 1);
            });
            $quantityMinus.on('click', function () {
                var $quantityInput = $quantityPlus.parent().find('input[type=number]');
                if (isNaN($quantityInput.val())) {
                    $quantityInput.val(1);
                }
                if ($quantityInput.val() > 1) {
                    $quantityInput.val(parseInt($quantityInput.val()) - 1);
                }
            });

            // Initial state.
            self.$singleVariationWrap.show();
            self.$form.off('.wc-variation-form');

            // Methods.
            self.getChosenAttributes = self.getChosenAttributes.bind(self);
            self.findMatchingVariations = self.findMatchingVariations.bind(self);
            self.isMatch = self.isMatch.bind(self);
            self.toggleResetLink = self.toggleResetLink.bind(self);

            // Events.
            $form.on('click.wc-variation-form', '.reset_variations', {variationForm: self}, self.onReset);
            $form.on('reload_product_variations', {variationForm: self}, self.onReload);
            $form.on('hide_variation', {variationForm: self}, self.onHide);
            $form.on('show_variation', {variationForm: self}, self.onShow);
            $form.on('click', '.single_add_to_cart_button', {variationForm: self}, self.onAddToCart);
            $form.on('reset_data', {variationForm: self}, self.onResetDisplayedVariation);
            $form.on('reset_image', {variationForm: self}, self.onResetImage);
            $form.on('change.wc-variation-form', '.variations select', {variationForm: self}, self.onChange);
            $form.on('found_variation.wc-variation-form', {variationForm: self}, self.onFoundVariation);
            $form.on('check_variations.wc-variation-form', {variationForm: self}, self.onFindVariation);
            $form.on('update_variation_values.wc-variation-form', {variationForm: self}, self.onUpdateAttributes);

            // Init after gallery.
            setTimeout(function () {
                $form.trigger('check_variations');
                $form.trigger('wc_variation_form');

                // Swatches
                $(document.body).find('.variations').babystreet_wcs_variation_swatches_form();
                $(document.body).trigger('babystreet-wcs_initialized');
                self.loading = false;
            }, 100);
        };

        /**
         * Reset all fields.
         */
        BabystreetVariationForm.prototype.onReset = function (event) {
            event.preventDefault();
            event.data.variationForm.$attributeFields.val('').change();
            event.data.variationForm.$form.trigger('reset_data');
        };

        /**
         * Reload variation data from the DOM.
         */
        BabystreetVariationForm.prototype.onReload = function (event) {
            var form = event.data.variationForm;
            form.variationData = form.$form.data('product_variations');
            form.useAjax = false === form.variationData;
            form.$form.trigger('check_variations');
        };

        /**
         * When a variation is hidden.
         */
        BabystreetVariationForm.prototype.onHide = function (event) {
            event.preventDefault();
            event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('wc-variation-is-unavailable').addClass('disabled wc-variation-selection-needed');
            event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-enabled').addClass('woocommerce-variation-add-to-cart-disabled');
        };

        /**
         * When a variation is shown.
         */
        BabystreetVariationForm.prototype.onShow = function (event, variation, purchasable) {
            event.preventDefault();
            if (purchasable) {
                event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('disabled wc-variation-selection-needed wc-variation-is-unavailable');
                event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-disabled').addClass('woocommerce-variation-add-to-cart-enabled');
            } else {
                event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('wc-variation-selection-needed').addClass('disabled wc-variation-is-unavailable');
                event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-enabled').addClass('woocommerce-variation-add-to-cart-disabled');
            }
        };

        /**
         * When the cart button is pressed.
         */
        BabystreetVariationForm.prototype.onAddToCart = function (event) {
            if ($(this).is('.disabled')) {
                event.preventDefault();

                if ($(this).is('.wc-variation-is-unavailable')) {
                    window.alert(babystreet_quickview.i18n_unavailable_text);
                } else if ($(this).is('.wc-variation-selection-needed')) {
                    window.alert(babystreet_quickview.i18n_make_a_selection_text);
                }
            }
        };

        /**
         * When displayed variation data is reset.
         */
        BabystreetVariationForm.prototype.onResetDisplayedVariation = function (event) {
            var form = event.data.variationForm;
            form.$product.find('.product_meta').find('.sku').wc_reset_content();
            form.$product.find('.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value').wc_reset_content();
            form.$product.find('.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value').wc_reset_content();
            form.$form.trigger('reset_image');
            form.$singleVariation.slideUp(200).trigger('hide_variation');
        };

        /**
         * When the product image is reset.
         */
        BabystreetVariationForm.prototype.onResetImage = function (event) {
            event.data.variationForm.$form.wc_variations_image_update(false);
        };

        /**
         * Looks for matching variations for current selected attributes.
         */
        BabystreetVariationForm.prototype.onFindVariation = function (event) {
            var form = event.data.variationForm,
                attributes = form.getChosenAttributes(),
                currentAttributes = attributes.data;

            if (attributes.count === attributes.chosenCount) {
                if (form.useAjax) {
                    if (form.xhr) {
                        form.xhr.abort();
                    }
                    form.$form.block({message: null, overlayCSS: {background: '#fff', opacity: 0.6}});
                    currentAttributes.product_id = parseInt(form.$form.data('product_id'), 10);
                    currentAttributes.custom_data = form.$form.data('custom_data');
                    form.xhr = $.ajax({
                        url: wc_add_to_cart_variation_params.wc_ajax_url.toString().replace('%%endpoint%%', 'get_variation'),
                        type: 'POST',
                        data: currentAttributes,
                        success: function (variation) {
                            if (variation) {
                                form.$form.trigger('found_variation', [variation]);
                            } else {
                                form.$form.trigger('reset_data');
                                attributes.chosenCount = 0;

                                if (!form.loading) {
                                    form.$form.find('.single_variation').after('<p class="wc-no-matching-variations woocommerce-info">' + babystreet_quickview.i18n_no_matching_variations_text + '</p>');
                                    form.$form.find('.wc-no-matching-variations').slideDown(200);
                                }
                            }
                        },
                        complete: function () {
                            form.$form.unblock();
                        }
                    });
                } else {
                    form.$form.trigger('update_variation_values');

                    var matching_variations = form.findMatchingVariations(form.variationData, currentAttributes),
                        variation = matching_variations.shift();

                    if (variation) {
                        form.$form.trigger('found_variation', [variation]);
                    } else {
                        form.$form.trigger('reset_data');
                        attributes.chosenCount = 0;

                        if (!form.loading) {
                            form.$form.find('.single_variation').after('<p class="wc-no-matching-variations woocommerce-info">' + babystreet_quickview.i18n_no_matching_variations_text + '</p>');
                            form.$form.find('.wc-no-matching-variations').slideDown(200);
                        }
                    }
                }
            } else {
                form.$form.trigger('update_variation_values');
                form.$form.trigger('reset_data');
            }

            // Show reset link.
            form.toggleResetLink(attributes.chosenCount > 0);
        };

        /**
         * Triggered when a variation has been found which matches all attributes.
         */
        BabystreetVariationForm.prototype.onFoundVariation = function (event, variation) {
            var form = event.data.variationForm,
                $sku = form.$product.find('.product_meta').find('.sku'),
                $weight = form.$product.find('.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value'),
                $dimensions = form.$product.find('.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value'),
                $qty = form.$singleVariationWrap.find('.quantity'),
                purchasable = true,
                variation_id = '',
                template = false,
                $template_html = '';

            if (variation.sku) {
                $sku.wc_set_content(variation.sku);
            } else {
                $sku.wc_reset_content();
            }

            if (variation.weight) {
                $weight.wc_set_content(variation.weight_html);
            } else {
                $weight.wc_reset_content();
            }

            if (variation.dimensions) {
                // Decode HTML entities.
                $dimensions.wc_set_content($.parseHTML(variation.dimensions_html)[0].data);
            } else {
                $dimensions.wc_reset_content();
            }

            form.$form.wc_variations_image_update(variation);

            if (!variation.variation_is_visible) {
                template = wp.template('unavailable-variation-template');
            } else {
                template = wp.template('variation-template');
                variation_id = variation.variation_id;
            }

            $template_html = template({
                variation: variation
            });
            $template_html = $template_html.replace('/*<![CDATA[*/', '');
            $template_html = $template_html.replace('/*]]>*/', '');

            form.$singleVariation.html($template_html);
            form.$form.find('input[name="variation_id"], input.variation_id').val(variation.variation_id).change();

            // Hide or show qty input
            if (variation.is_sold_individually === 'yes') {
                $qty.find('input.qty').val('1').attr('min', '1').attr('max', '');
                $qty.hide();
            } else {
                $qty.find('input.qty').attr('min', variation.min_qty).attr('max', variation.max_qty);
                $qty.show();
            }

            // Enable or disable the add to cart button
            if (!variation.is_purchasable || !variation.is_in_stock || !variation.variation_is_visible) {
                purchasable = false;
            }

            // Reveal
            if ($.trim(form.$singleVariation.text())) {
                form.$singleVariation.slideDown(200).trigger('show_variation', [variation, purchasable]);
            } else {
                form.$singleVariation.show().trigger('show_variation', [variation, purchasable]);
            }
        };

        /**
         * Triggered when an attribute field changes.
         */
        BabystreetVariationForm.prototype.onChange = function (event) {
            var form = event.data.variationForm;

            form.$form.find('input[name="variation_id"], input.variation_id').val('').change();
            form.$form.find('.wc-no-matching-variations').remove();

            if (form.useAjax) {
                form.$form.trigger('check_variations');
            } else {
                form.$form.trigger('woocommerce_variation_select_change');
                form.$form.trigger('check_variations');
                $(this).blur();
            }

            // Custom event for when variation selection has been changed
            form.$form.trigger('woocommerce_variation_has_changed');
        };

        /**
         * Escape quotes in a string.
         * @param {string} string
         * @return {string}
         */
        BabystreetVariationForm.prototype.addSlashes = function (string) {
            string = string.replace(/'/g, '\\\'');
            string = string.replace(/"/g, '\\\"');
            return string;
        };

        /**
         * Updates attributes in the DOM to show valid values.
         */
        BabystreetVariationForm.prototype.onUpdateAttributes = function (event) {
            var form = event.data.variationForm,
                attributes = form.getChosenAttributes(),
                currentAttributes = attributes.data;

            if (form.useAjax) {
                return;
            }

            // Loop through selects and disable/enable options based on selections.
            form.$attributeFields.each(function (index, el) {
                var current_attr_select = $(el),
                    current_attr_name = current_attr_select.data('attribute_name') || current_attr_select.attr('name'),
                    show_option_none = $(el).data('show_option_none'),
                    option_gt_filter = ':gt(0)',
                    attached_options_count = 0,
                    new_attr_select = $('<select/>'),
                    selected_attr_val = current_attr_select.val() || '',
                    selected_attr_val_valid = true;

                // Babystreetence options set at first.
                if (!current_attr_select.data('attribute_html')) {
                    var refSelect = current_attr_select.clone();

                    refSelect.find('option').removeAttr('disabled attached').removeAttr('selected');

                    current_attr_select.data('attribute_options', refSelect.find('option' + option_gt_filter).get()); // Legacy data attribute.
                    current_attr_select.data('attribute_html', refSelect.html());
                }

                new_attr_select.html(current_attr_select.data('attribute_html'));

                // The attribute of this select field should not be taken into account when calculating its matching variations:
                // The constraints of this attribute are shaped by the values of the other attributes.
                var checkAttributes = $.extend(true, {}, currentAttributes);

                checkAttributes[current_attr_name] = '';

                var variations = form.findMatchingVariations(form.variationData, checkAttributes);

                // Loop through variations.
                for (var num in variations) {
                    if (typeof (variations[num]) !== 'undefined') {
                        var variationAttributes = variations[num].attributes;

                        for (var attr_name in variationAttributes) {
                            if (variationAttributes.hasOwnProperty(attr_name)) {
                                var attr_val = variationAttributes[attr_name],
                                    variation_active = '';

                                if (attr_name === current_attr_name) {
                                    if (variations[num].variation_is_active) {
                                        variation_active = 'enabled';
                                    }

                                    if (attr_val) {
                                        // Decode entities.
                                        attr_val = $('<div/>').html(attr_val).text();

                                        // Attach to matching options by value. This is done to compare
                                        // TEXT values rather than any HTML entities.
                                        var $option_elements = new_attr_select.find('option');
                                        if ($option_elements.length) {
                                            for (var i = 0, len = $option_elements.length; i < len; i++) {
                                                var $option_element = $($option_elements[i]),
                                                    option_value = $option_element.val();

                                                if (attr_val === option_value) {
                                                    $option_element.addClass('attached ' + variation_active);
                                                    break;
                                                }
                                            }
                                        }
                                    } else {
                                        // Attach all apart from placeholder.
                                        new_attr_select.find('option:gt(0)').addClass('attached ' + variation_active);
                                    }
                                }
                            }
                        }
                    }
                }

                // Count available options.
                attached_options_count = new_attr_select.find('option.attached').length;

                // Check if current selection is in attached options.
                if (selected_attr_val) {
                    selected_attr_val_valid = false;

                    if (0 !== attached_options_count) {
                        new_attr_select.find('option.attached.enabled').each(function () {
                            var option_value = $(this).val();

                            if (selected_attr_val === option_value) {
                                selected_attr_val_valid = true;
                                return false; // break.
                            }
                        });
                    }
                }

                // Detach the placeholder if:
                // - Valid options exist.
                // - The current selection is non-empty.
                // - The current selection is valid.
                // - Placeholders are not set to be permanently visible.
                if (attached_options_count > 0 && selected_attr_val && selected_attr_val_valid && ('no' === show_option_none)) {
                    new_attr_select.find('option:first').remove();
                    option_gt_filter = '';
                }

                // Detach unattached.
                new_attr_select.find('option' + option_gt_filter + ':not(.attached)').remove();

                // Finally, copy to DOM and set value.
                current_attr_select.html(new_attr_select.html());
                current_attr_select.find('option' + option_gt_filter + ':not(.enabled)').prop('disabled', true);

                // Choose selected value.
                if (selected_attr_val) {
                    // If the previously selected value is no longer available, fall back to the placeholder (it's going to be there).
                    if (selected_attr_val_valid) {
                        current_attr_select.val(selected_attr_val);
                    } else {
                        current_attr_select.val('').change();
                    }
                } else {
                    current_attr_select.val(''); // No change event to prevent infinite loop.
                }
            });

            // Custom event for when variations have been updated.
            form.$form.trigger('woocommerce_update_variation_values');
        };

        /**
         * Get chosen attributes from form.
         * @return array
         */
        BabystreetVariationForm.prototype.getChosenAttributes = function () {
            var data = {};
            var count = 0;
            var chosen = 0;

            this.$attributeFields.each(function () {
                var attribute_name = $(this).data('attribute_name') || $(this).attr('name');
                var value = $(this).val() || '';

                if (value.length > 0) {
                    chosen++;
                }

                count++;
                data[attribute_name] = value;
            });

            return {
                'count': count,
                'chosenCount': chosen,
                'data': data
            };
        };

        /**
         * Find matching variations for attributes.
         */
        BabystreetVariationForm.prototype.findMatchingVariations = function (variations, attributes) {
            var matching = [];
            if (typeof variations != 'undefined') {
                for (var i = 0; i < variations.length; i++) {
                    var variation = variations[i];

                    if (this.isMatch(variation.attributes, attributes)) {
                        matching.push(variation);
                    }
                }
            }
            return matching;
        };

        /**
         * See if attributes match.
         * @return {Boolean}
         */
        BabystreetVariationForm.prototype.isMatch = function (variation_attributes, attributes) {
            var match = true;
            for (var attr_name in variation_attributes) {
                if (variation_attributes.hasOwnProperty(attr_name)) {
                    var val1 = variation_attributes[attr_name];
                    var val2 = attributes[attr_name];
                    if (val1 !== undefined && val2 !== undefined && val1.length !== 0 && val2.length !== 0 && val1 !== val2) {
                        match = false;
                    }
                }
            }
            return match;
        };

        /**
         * Show or hide the reset link.
         */
        BabystreetVariationForm.prototype.toggleResetLink = function (on) {
            if (on) {
                if (this.$resetVariations.css('visibility') === 'hidden') {
                    this.$resetVariations.css('visibility', 'visible').hide().fadeIn();
                }
            } else {
                this.$resetVariations.css('visibility', 'hidden');
            }
        };

        /**
         * Function to call wc_variation_form on jquery selector.
         */
        $.fn.babystreet_wc_variation_form = function () {
            new BabystreetVariationForm(this);
            return this;
        };

        /**
         * Stores the default text for an element so it can be reset later
         */
        $.fn.wc_set_content = function (content) {
            if (undefined === this.attr('data-o_content')) {
                this.attr('data-o_content', this.text());
            }
            this.text(content);
        };

        /**
         * Stores the default text for an element so it can be reset later
         */
        $.fn.wc_reset_content = function () {
            if (undefined !== this.attr('data-o_content')) {
                this.text(this.attr('data-o_content'));
            }
        };

        /**
         * Stores a default attribute for an element so it can be reset later
         */
        $.fn.wc_set_variation_attr = function (attr, value) {
            if (undefined === this.attr('data-o_' + attr)) {
                this.attr('data-o_' + attr, (!this.attr(attr)) ? '' : this.attr(attr));
            }
            if (false === value) {
                this.removeAttr(attr);
            } else {
                this.attr(attr, value);
            }
        };

        /**
         * Reset a default attribute for an element so it can be reset later
         */
        $.fn.wc_reset_variation_attr = function (attr) {
            if (undefined !== this.attr('data-o_' + attr)) {
                this.attr(attr, this.attr('data-o_' + attr));
            }
        };

        /**
         * Reset the slide position if the variation has a different image than the current one
         */
        $.fn.wc_maybe_trigger_slide_position_reset = function (variation) {
            var $form = $(this),
                $product = $form.closest('.product'),
                $product_gallery = $product.find('.images'),
                reset_slide_position = false,
                new_image_id = (variation && variation.image_id) ? variation.image_id : '';

            if ($form.attr('current-image') !== new_image_id) {
                reset_slide_position = true;
            }

            $form.attr('current-image', new_image_id);

            if (reset_slide_position) {
                $product_gallery.trigger('woocommerce_gallery_reset_slide_position');
            }
        };

        /**
         * Sets product images for the chosen variation
         */
        $.fn.wc_variations_image_update = function (variation) {
            var $form = this,
                $product = $form.closest('.product'),
                $product_gallery = $product.find('.images'),
                $gallery_nav = $product.find('.flex-control-nav'),
                $gallery_img = $gallery_nav.find('li:eq(0) img'),
                $product_img_wrap = $product_gallery.find('.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder').eq(0),
                $product_img = $product_img_wrap.find('.wp-post-image'),
                $product_link = $product_img_wrap.find('a').eq(0);

            if (variation && variation.image && variation.image.src && variation.image.src.length > 1) {
                // See if the gallery has an image with the same original src as the image we want to switch to.
                var galleryHasImage = $gallery_nav.find('li img[data-o_src="' + variation.image.gallery_thumbnail_src + '"]').length > 0;

                // If the gallery has the image, reset the images. We'll scroll to the correct one.
                if (galleryHasImage) {
                    $form.wc_variations_image_reset();
                }

                // See if gallery has a matching image we can slide to.
                var slideToImage = $gallery_nav.find('li img[src="' + variation.image.gallery_thumbnail_src + '"]');

                if (slideToImage.length > 0) {
                    slideToImage.trigger('click');
                    $form.attr('current-image', variation.image_id);
                    window.setTimeout(function () {
                        $(window).trigger('resize');
                        $product_gallery.trigger('woocommerce_gallery_init_zoom');
                    }, 20);
                    return;
                }

                $product_img.wc_set_variation_attr('src', variation.image.src);
                $product_img.wc_set_variation_attr('height', variation.image.src_h);
                $product_img.wc_set_variation_attr('width', variation.image.src_w);
                $product_img.wc_set_variation_attr('srcset', variation.image.srcset);
                $product_img.wc_set_variation_attr('sizes', variation.image.sizes);
                $product_img.wc_set_variation_attr('title', variation.image.title);
                $product_img.wc_set_variation_attr('data-caption', variation.image.caption);
                $product_img.wc_set_variation_attr('alt', variation.image.alt);
                $product_img.wc_set_variation_attr('data-src', variation.image.full_src);
                $product_img.wc_set_variation_attr('data-large_image', variation.image.full_src);
                $product_img.wc_set_variation_attr('data-large_image_width', variation.image.full_src_w);
                $product_img.wc_set_variation_attr('data-large_image_height', variation.image.full_src_h);
                $product_img_wrap.wc_set_variation_attr('data-thumb', variation.image.src);
                $gallery_img.wc_set_variation_attr('src', variation.image.gallery_thumbnail_src);
                $product_link.wc_set_variation_attr('href', variation.image.full_src);
            } else {
                $form.wc_variations_image_reset();
            }

            window.setTimeout(function () {
                $(window).trigger('resize');
                $form.wc_maybe_trigger_slide_position_reset(variation);
                $product_gallery.trigger('woocommerce_gallery_init_zoom');
            }, 20);
        };

        /**
         * Reset main image to defaults.
         */
        $.fn.wc_variations_image_reset = function () {
            var $form = this,
                $product = $form.closest('.product'),
                $product_gallery = $product.find('.images'),
                $gallery_nav = $product.find('.flex-control-nav'),
                $gallery_img = $gallery_nav.find('li:eq(0) img'),
                $product_img_wrap = $product_gallery.find('.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder').eq(0),
                $product_img = $product_img_wrap.find('.wp-post-image'),
                $product_link = $product_img_wrap.find('a').eq(0);

            $product_img.wc_reset_variation_attr('src');
            $product_img.wc_reset_variation_attr('width');
            $product_img.wc_reset_variation_attr('height');
            $product_img.wc_reset_variation_attr('srcset');
            $product_img.wc_reset_variation_attr('sizes');
            $product_img.wc_reset_variation_attr('title');
            $product_img.wc_reset_variation_attr('data-caption');
            $product_img.wc_reset_variation_attr('alt');
            $product_img.wc_reset_variation_attr('data-src');
            $product_img.wc_reset_variation_attr('data-large_image');
            $product_img.wc_reset_variation_attr('data-large_image_width');
            $product_img.wc_reset_variation_attr('data-large_image_height');
            $product_img_wrap.wc_reset_variation_attr('data-thumb');
            $gallery_img.wc_reset_variation_attr('src');
            $product_link.wc_reset_variation_attr('href');
        };

        $(function () {
            if (typeof babystreet_quickview !== 'undefined') {
                $('div.babystreet-quickview-product-pop .variations_form').each(function () {
                    $(this).babystreet_wc_variation_form();
                });
            }
        });

        /**
         * Matches inline variation objects to chosen attributes
         * @deprecated 2.6.9
         * @type {Object}
         */
        var wc_variation_form_matcher = {
            find_matching_variations: function (product_variations, settings) {
                var matching = [];
                for (var i = 0; i < product_variations.length; i++) {
                    var variation = product_variations[i];

                    if (wc_variation_form_matcher.variations_match(variation.attributes, settings)) {
                        matching.push(variation);
                    }
                }
                return matching;
            },
            variations_match: function (attrs1, attrs2) {
                var match = true;
                for (var attr_name in attrs1) {
                    if (attrs1.hasOwnProperty(attr_name)) {
                        var val1 = attrs1[attr_name];
                        var val2 = attrs2[attr_name];
                        if (val1 !== undefined && val2 !== undefined && val1.length !== 0 && val2.length !== 0 && val1 !== val2) {
                            match = false;
                        }
                    }
                }
                return match;
            }
        };

    })(jQuery, window, document);
}
/**********************
 * END "babystreet-quickview"
 *********************/

/* NON jQuery */

/**********************
 * "babystreet-map-config"
 *********************/
if (typeof babystreet_map_config !== 'undefined') {
	var directionsDisplayCnt;
	var directionsServiceCnt = new google.maps.DirectionsService();

// Here you can customize the direction line color, weigth and opacity.
	var polylineOptionsActualCnt = new google.maps.Polyline({strokeColor: '#585858', strokeOpacity: 0.7, strokeWeight: 4});

	function initializeCnt() { // Place the coordinates of your store here.
		var latlng = new google.maps.LatLng(babystreet_map_config.lattitude, babystreet_map_config.longitude);
		directionsDisplayCnt = new google.maps.DirectionsRenderer();
		directionsDisplayCnt = new google.maps.DirectionsRenderer({suppressMarkers: true, polylineOptions: polylineOptionsActualCnt});

		var myOptionsCnt = {
			// By changing this number you can define the resolution of the current view.
			// Zoom level between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+
			// (down to individual buildings)
			zoom: 17,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: true,
			scrollwheel: false
		};

		var mapCnt = new google.maps.Map(document.getElementById("babystreet_map_canvas"), myOptionsCnt);

		directionsDisplayCnt.setMap(mapCnt);
		//directionsDisplayCnt.setPanel(document.getElementById("directionsPanel"));

		// Here you can change the path, size and pivot point of the marker on the map.
		var image = new google.maps.MarkerImage(babystreet_map_config.images + 'marker.png', new google.maps.Size(45, 48), new google.maps.Point(0, 0), new google.maps.Point(25, 40));

		// Here you can change the path, size and pivot point of the marker's shadow on the map.
		var shadow = new google.maps.MarkerImage(babystreet_map_config.images + 'shadow.png', new google.maps.Size(26, 10), new google.maps.Point(0, 0), new google.maps.Point(10, 4));

		// Change the title of your store. People see this when they hover over your marker.
		var marker = new google.maps.Marker({position: latlng, map: mapCnt, shadow: shadow, title: babystreet_map_config.location_title, icon: image});

		// This function will make your marker bounce. When you click on it, it will toggle between bouncing and static.
		// You can comment out if you don't whant your marker to bounce.
		toggleBounce();

		google.maps.event.addListener(marker, 'click', toggleBounce);

		function toggleBounce() {
			if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	}

// Change the coordinates below to those of your store. (should be the same as the coordinates above.
	function calcRouteOnContacts() {
		var start = document.getElementById("routeStart").value;
// Fill in the cordinates of your store. See readme file for help.
		var end = babystreet_map_config.lattitude + "," + babystreet_map_config.longitude;
		var request = {origin: start, destination: end, travelMode: google.maps.DirectionsTravelMode.DRIVING};

		directionsServiceCnt.route(request, function (response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplayCnt.setDirections(response);
			}
		});
	}

	google.maps.event.addDomListener(window, 'load', initializeCnt);
}
/*************************
 * END "babystreet-map-config"
 *************************/
