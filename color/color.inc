<?php

// Put the logo path into JavaScript for the live preview.
drupal_add_js(array('color' => array('logo' => theme_get_setting('logo', 'cake_template'))), 'setting');

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
     'BodyBg' =>t('總底色'),
     'PageBg' =>t('頁面底色'),
     'HeaderBg' =>t('頁首底色'),
     'MenuLink' =>t('選單文字'),
     'MenuHover' =>t('選單文字滑入'),
     'ContentBg' =>t('內文區塊底色'),
     'ContentText' =>t('內文文字'),
     'ContentLink' =>t('內文連結'),
     'ContentHover' =>t('內文連結滑入'),
     'FooterBg' =>t('頁尾底色'),
     'FooterLink' =>t('頁尾連結'),
     'FooterHover' =>t('頁尾連結滑入'),
     'H1' =>t('重點標題'),
     'H2' =>t('標題'),
     'MainColor1' =>t('整體物件主色1'),


  ),
  // Pre-defined color schemes.
  'schemes' => array(
    'default' => array(
      'title' => t('Blue Lagoon (default)'),
      'colors' => array(
        'BodyBg' =>'#ffffff',
        'PageBg' =>'#ffff03',
        'HeaderBg' =>'#ffff02',
        'MenuLink' =>'#aaaa03',
        'MenuHover' =>'#cccc01',
        'ContentBg' =>'#ffff04',
        'ContentText' =>'#aaaa04',
        'ContentLink' =>'#aaaa05',
        'ContentHover' =>'#cccc02',
        'FooterBg' =>'#ffff05',
        'FooterLink' =>'#aaaa07',
          'FooterHover' =>'#cccc03',
          'H1' =>'#aaaa01',
          'H2' =>'#aaaa02',
          'MainColor1' =>'#000000',

      ),
    ),
    'ColorSet1' => array(
      'title' => t('cake'),
      'colors' => array(
        'BodyBg' =>'#ffffff',
        'PageBg' =>'#ffffff',
        'HeaderBg' =>'#6f3328',
        'MenuLink' =>'#B6B6B6',
        'MenuHover' =>'#ffffff',
        'ContentBg' =>'#ffffff',
        'ContentText' =>'#525252',
        'ContentLink' =>'#6f3328',
        'ContentHover' =>'#525252',
        'FooterBg' =>'#6f3328',
        'FooterLink' =>'#ffffff',
          'FooterHover' =>'#fa4704',
          'H1' =>'#6f3328',
          'H2' =>'#6f3328',
          'MainColor1' =>'#fa4704',
      ),
    ),


  ),

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'color/colors.css',
  ),

  // Files to copy.
  'copy' => array(
    'logo.png',
  ),

  // Gradient definitions.
  'gradients' => array(
    array(
      // (x, y, width, height).
      'dimension' => array(0, 0, 0, 0),
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => array('top', 'bottom'),
    ),
  ),

  // Color areas to fill (x, y, width, height).
  'fill' => array(),

  // Coordinates of all the theme slices (x, y, width, height)
  // with their filename as used in the stylesheet.
  'slices' => array(),

  // Reference color used for blending. Matches the base.png's colors.
  'blend_target' => '#ffffff',

  // Preview files.
  'preview_css' => 'color/preview.css',
  'preview_js' => 'color/preview.js',
  'preview_html' => 'color/preview.html',

  // Base file for image generation.
  'base_image' => 'color/base.png',
);
