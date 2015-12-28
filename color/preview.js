(function($) {
    Drupal.color = {
        logoChanged: false,
        callback: function(context, settings, form, farb, height, width) {
            // Change the logo to be the real one.
            if (!this.logoChanged) {
                $('#preview #preview-logo img').attr('src', Drupal.settings.color.logo);
                this.logoChanged = true;
            }
            // Remove the logo if the setting is toggled off. 
            if (Drupal.settings.color.logo == null) {
                $('div').remove('#preview-logo');
            }

            // Solid background.
            //background
            $('#preview-body', form).css('backgroundColor', $('#palette input[name="palette[BodyBg]"]', form).val());
            $('#page', form).css('backgroundColor', $('#palette input[name="palette[PageBg]"]', form).val());
            $('#preview-header', form).css('backgroundColor', $('#palette input[name="palette[HeaderBg]"]', form).val());
            $('#preview-body #page #content', form).css('backgroundColor', $('#palette input[name="palette[ContentBg]"]', form).val());
            $('#preview-body .preview-footer-wrapper', form).css('backgroundColor', $('#palette input[name="palette[FooterBg]"]', form).val());

            //color
            $('.prepage .menu  li a', form).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
            $('#preview-body #page #content,', form).css('color', $('#palette input[name="palette[ContentText]"]', form).val());
            $('#preview-body #page #content a', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
            $('#preview-body #page #content #block-views-3-node-news-block  .views-field-view ul li .views-field-created span', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
            $('#preview-body #page #content #mini-panel-original span', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
            $('#preview-body .preview-footer-wrapper  span, #preview-body, .preview-footer-wrapper a ,#preview-body .preview-footer-wrapper p', form).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
            $('#preview-body #page #content h2, ', form).css('color', $('#palette input[name="palette[H2]"]', form).val());
            $('#preview-body #page #content #mini-panel-original .views-field-field-cake-name, ', form).css('color', $('#palette input[name="palette[MainColor1]"]', form).val());
            //hover
            $('.prepage .menu  li a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
                }
            );
            $('#preview-body #page #content a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
                }
            );
            $('#preview-body .preview-footer-wrapper a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
                }
            );

        }
    };
})(jQuery);
