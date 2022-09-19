<?php
/**
 * Customize Compare Options
 */
return [
    [
        'type' => 'section',
        'name' => 'zoo_compare',
        'title' => esc_html__('Compare', 'ciao'),
        'panel' => 'woocommerce',
        'theme_supports' => 'woocommerce'
    ],
    [
        'name' => 'zoo_compare_general_settings',
        'type' => 'heading',
        'label' => esc_html__('General Settings', 'ciao'),
        'section' => 'zoo_compare'
    ],
    [
        'name' => 'zoo_enable_compare',
        'type' => 'checkbox',
        'section' => 'zoo_compare',
        'label' => esc_html__('Enable Compare', 'ciao'),
        'checkbox_label' => esc_html__('Will be enabled if checked.', 'ciao'),
        'theme_supports' => 'woocommerce',
        'default' => 1
    ],
    [
        'name' => 'zoo_enable_shop_loop_compare',
        'type' => 'checkbox',
        'section' => 'zoo_compare',
        'label' => esc_html__('Enable Shop Compare', 'ciao'),
        'checkbox_label' => esc_html__('compare button will show in shop loop if checked.', 'ciao'),
        'theme_supports' => 'woocommerce',
        'default' => 0
    ],
    [
        'name' => 'zoo_enable_compare_redirect',
        'type' => 'checkbox',
        'section' => 'zoo_compare',
        'label' => esc_html__('Enable compare Redirect Link', 'ciao'),
        'checkbox_label' => esc_html__('Redirect to compare page when click to button browse compare.', 'ciao'),
        'theme_supports' => 'woocommerce',
        'default' => 0
    ],
    [
        'name' => 'zoo_compare_page',
        'type' => 'select',
        'section' => 'zoo_compare',
        'title' => esc_html__('Compare page', 'ciao'),
        'default' => '',
        'theme_supports' => 'woocommerce',
        'choices' => zoo_list_pages_by_slug(),
        'required' => ['zoo_enable_compare_redirect', '==', 1]
    ],
    [
        'name' => 'zoo_compare_add_to_compare_settings',
        'type' => 'heading',
        'label' => esc_html__('Add to compare Settings', 'ciao'),
        'section' => 'zoo_compare',
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_text_add_to_compare',
        'type' => 'text',
        'section' => 'zoo_compare',
        'label' => esc_html__('Label', 'ciao'),
        'default' => esc_html__('Add to Compare', 'ciao'),
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_icon_add_to_compare',
        'type' => 'icon',
        'section' => 'zoo_compare',
        'label' => esc_html__('Icon', 'ciao'),
        'default' => [
            'type' => 'zoo-icon',
            'icon' => 'zoo-icon-refresh'
        ],
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_compare_browse_to_compare_settings',
        'type' => 'heading',
        'label' => esc_html__('Browse to compare Settings', 'ciao'),
        'section' => 'zoo_compare',
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_text_browse_to_compare',
        'type' => 'text',
        'section' => 'zoo_compare',
        'label' => esc_html__('Label', 'ciao'),
        'default' => esc_html__('Browse compare', 'ciao'),
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_icon_browse_to_compare',
        'type' => 'icon',
        'section' => 'zoo_compare',
        'label' => esc_html__('Icon', 'ciao'),
        'default' => [
            'type' => 'zoo-icon',
            'icon' => 'zoo-icon-refresh'
        ],
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_compare_style_settings',
        'type' => 'heading',
        'label' => esc_html__('compare Style', 'ciao'),
        'section' => 'zoo_compare',
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_compare_icon_size',
        'type' => 'slider',
        'label' => esc_html__('Font Size', 'ciao'),
        'section' => 'zoo_compare',
        'min' => 8,
        'step' => 1,
        'max' => 100,
        'selector' => ".woocommerce ul.products li.product .zoo-compare-button>i",
        'css_format' => "font-size: {{value}};",
        'required' => ['zoo_enable_compare', '==', 1]
    ],
    [
        'name' => 'zoo_compare_shop_style',
        'type' => 'styling',
        'section' => 'zoo_compare',
        'title' => esc_html__('compare style', 'ciao'),
        'description' => esc_html__('Advanced styling for compare in shop loop', 'ciao'),
        'required' => ['zoo_enable_compare', '==', 1],
        'selector' => [
            'normal' => '.woocommerce ul.products li.product .zoo-compare-button',
            'hover' => '.woocommerce ul.products li.product .zoo-compare-button:hover',
        ],
        'css_format' => 'styling',
        'priority' => 11,
        'default' => [],
        'fields' => [
            'normal_fields' => [
                'link_color' => false, // disable for special field.
                'margin' => false,
                'padding' => false,
                'bg_image' => false,
                'device_settings' => false,
                'link_hover_color'   => false,
            ],
            'hover_fields' => [
                'link_color' => false, // disable for special field.
            ]
        ]
    ]
];