<?php 
/* header("HTTP/1.1 301 Moved Permanently");
header("Location: ".get_bloginfo('url'));
exit();*/
get_header(); ?>
<main id="main-content" class="main-content-wrapper page404">
    <div class="container">
        <div class="content-wrap">
            <h1>:/</h1>
            <p class="description">Sorry, this page isn't available</p>
            <a href="/" class="btn btn-primary">Return Home</a>
        </div>
    </div>
</main>
<?php get_footer(); ?>