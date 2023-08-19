<?php
// pr($args['postID']);
$postID = get_the_ID();

if(!empty($args['postID'])){
	$postID = $args['postID'];
} else {
	$postID = get_the_ID();
}

$permalink = get_permalink($postID);
$titleget = get_the_title($postID);
?>
<div class="share-social-icons">
<span>SHARE</span>
<ul class="social-media-icons">
	<li><a href="#!" title="Share on LinkedIn" data-bs-toggle="tooltip" onClick="window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $permalink; ?>','Linkedin','width=863,height=500,left='+(screen.availWidth/2-431)+',top='+(screen.availHeight/2-250)+''); return false;" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $permalink; ?>"><em class="icons icon-linkedin"></em></a></li>
	<!-- <li><a href="#!" title="LinkedIn" data-bs-toggle="tooltip"><em class="icons icon-instagram"></em></a></li> -->
	<li><a href="#!" title="Share on Facebook" data-bs-toggle="tooltip" onClick="window.open('http://www.facebook.com/sharer.php?u=<?php echo $permalink;?>','Facebook','width=600,height=300,left='+(screen.availWidth/2-300)+',top='+(screen.availHeight/2-150)+''); return false;" href="http://www.facebook.com/sharer.php?u=<?php echo $permalink;?>"><em class="icons icon-facebook"></em></a></li>
	<li><a href="#!" title="Share on Twitter" data-bs-toggle="tooltip" onClick="window.open('http://twitter.com/share?url=<?php echo $permalink; ?>&amp;text=<?php echo str_replace(" ", "%20", $titleget); ?>','Twitter share','width=600,height=300,left='+(screen.availWidth/2-300)+',top='+(screen.availHeight/2-150)+''); return false;" href="http://twitter.com/share?url=<?php echo $permalink; ?>&amp;text=<?php echo str_replace(" ", "%20", $titleget); ?>"><em class="icons icon-twitter"></em></a></li>
</ul>
</div>