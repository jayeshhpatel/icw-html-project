<?php
/* ---------------------- START - github */
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.github.com/repos/bentoml/BentoML",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "user-agent: PHP"
      ),
    ));

    $json = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      // echo "cURL Error #:" . $err;
    } else {
        if(!empty($json)){
            $obj = json_decode($json, true);
         
            if(isset($obj['license'])){
                echo '<pre>';
                // print_r($obj);echo '<br>';
                echo 'Github Stars:'; print_r($obj['stargazers_count']); echo '<br>';
                echo 'Github last commit:'; print_r(date('d M ',strtotime($obj['updated_at']))); echo '<br>';
                echo 'Released:'; print_r(date('M, Y',strtotime($obj['created_at']))); echo '<br>';
                echo 'Github open issues:'; print_r($obj['open_issues_count']); echo '<br>';
                echo 'License:'; print_r($obj['license']['name']);
                echo '</pre>';
              // github_stars
            //   <!-- update_post_meta( $tool, 'tool_info_github_stars', icw_number_format_short($obj['stargazers_count']) ); -->
              // $count_html .= "GitHub Download: ".icw_number_format_short($obj['stargazers_count']). "\n";
            }
           
            
           
        }
    }
    /* ---------------------- End - github */

?>


<?php
/* ---------------------- START - github */
    $surl = curl_init();
    curl_setopt_array($surl, array(
      CURLOPT_URL => "https://api.stackexchange.com/2.3/users/130164?order=desc&sort=reputation&site=stackoverflow&filter=!6WPIommSMB3m_",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "user-agent: PHP"
      ),
    ));

    $json1 = curl_exec($surl);
    $error = curl_error($surl);

    curl_close($surl);

    if ($error) {
      // echo "cURL Error #:" . $err;
    } else {
        if(!empty($json1)){
            $object = json_decode($json1, true);
         
            if(isset($object)){
                echo '<pre>';
                echo 'Stackoverflow questions:'; print_r($object['items'][0]['question_count']);
                echo '</pre>';
              // github_stars
            //   <!-- update_post_meta( $tool, 'tool_info_github_stars', icw_number_format_short($obj['stargazers_count']) ); -->
              // $count_html .= "GitHub Download: ".icw_number_format_short($obj['stargazers_count']). "\n";
            }
           
            
           
        }
    }
    /* ---------------------- End - github */
    
?>
