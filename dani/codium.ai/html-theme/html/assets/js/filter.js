jQuery(document).ready(function ($) {
    $(document).on("click", 'a[href="#loadmore"]', function (e) {
      e.preventDefault();
      var parent = $(this).parents("div.posts-archive");
      var clicked_category_label = $(
        'a[href="#loadmore-category"][data-category="' +
          parent.attr("data-current-category") +
          '"]'
      ).text();
      console.log(parent.attr("data-current-category"));
      console.log(clicked_category_label);
      var data = {
        action: "load_more_blog_posts",
        load_more: parent.attr("data-load-more"),
        current_category: parent.attr("data-current-category"),
        current_category_label: clicked_category_label,
        loaded: parent.attr("data-loaded"),
      };
      ajax(data, parent);
    });
  
    $(document).on("click", 'a[href="#loadmore-category"]', function (e) {
      e.preventDefault();
      var parent = $(this).parents("div.posts-archive");
      var current_category = parent.attr("data-current-category");
      var clicked_category = $(this).attr("data-category");
      var clicked_category_label = $(this).text();
      var clicked_category_style = $(this).attr("style");
      // $('.posts-archive-tile .posts-archive-tile--badge').html(clicked_category_label);
      window.history.pushState(
        null,
        null,
        parent.attr("data-base-url") + "/?category=" + clicked_category
      );
      if (current_category != clicked_category) {
        parent.find(".posts-archive-list ul").html("");
        parent
          .find(".posts-archive-list ul")
          .attr("style", clicked_category_style);
        parent.attr("data-current-category", clicked_category);
        parent.find('a[href="#loadmore-category"]').removeClass("active");
        $(this).addClass("active");
        var data = {
          action: "load_more_blog_posts",
          load_more: parent.attr("data-preloaded"),
          current_category: clicked_category,
          current_category_label: clicked_category_label,
          loaded: 0,
          disable: 'a[href="#loadmore-category"]',
        };
        ajax(data, parent);
      }
    });
  
    function ajax(data, parent) {
      $.ajax({
        url: site_ajax_params.ajaxurl,
        data: data,
        type: "POST",
        beforeSend: function (xhr) {
          if( data.disable ){
            $(data.disable).css('pointer-events','none');
          }
          parent.find(".posts-archive-loadmore").fadeOut(300, function () {
            // parent.find(".posts-archive-loading").fadeIn(300);
          });
        },
        success: function (response) {
          if( data.disable ){
            $(data.disable).css('pointer-events','all');
          }
          response = JSON.parse(response);
          parent.attr("data-loaded", response.loaded);
          parent.find(".posts-archive-list ul").append(response.html);
          if (response.remaining < 1) {
            parent.find(".posts-archive-loading").fadeOut(300);
          } else {
            parent.find(".posts-archive-loading").fadeOut(300, function () {
              parent.find(".posts-archive-loadmore").fadeIn(300);
            });
          }
        },
      });
    }
  
  
    
  });
  