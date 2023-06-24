<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <?php
    
      $context = stream_context_create([
          'http' => [
              'timeout' => 10, // Set the timeout value in seconds (e.g., 5 seconds)
          ],
      ]);
      
      $response = file_get_contents('https://plugins.jetbrains.com/plugins/list?pluginId=21206', false, $context);
      
      if ($response === false) {
          echo 'Failed to retrieve the API response.';
      } else {
          $xmlDoc = new DOMDocument();
          $xmlDoc->loadXML($response);
      
          $ideaPlugins = $xmlDoc->getElementsByTagName("idea-plugin");
      
          if ($ideaPlugins->length > 0) {
              $ideaPlugin = $ideaPlugins->item(0);
              $downloads = $ideaPlugin->getAttribute("downloads");
              echo "Downloads: " . $downloads;
          } else {
              // echo "No 'idea-plugin' element found in the XML.";
          }
      }

      // PHP counter


     echo '<br>' ;
     ?>
=========================
<?php
echo '<br>' ;

// Extension identifier (e.g., "Codium.codium")
$extensionId = "Codium.codium";

// Visual Studio Code Marketplace API endpoint
$apiUrl = "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";

// Create the request payload
$query = [
    "filters" => [
        [
            "criteria" => [
                [
                    "filterType" => 7,
                    "value" => $extensionId
                ]
            ]
        ]
    ],
    "flags" => 512
];
$requestPayload = json_encode($query);

// Set cURL options
$curl = curl_init($apiUrl);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $requestPayload);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json;api-version=5.1-preview.1'
]);

// Execute the cURL request
$response = curl_exec($curl);

// Check if the request was successful
if ($response !== false) {
    $responseData = json_decode($response, true);
    
    // Retrieve the total installation count
    $totalCount = $responseData["results"][0]["extensions"][0]["statistics"]["installCount"];

    // Print the total installation count
    echo "Total installations: " . $totalCount;
} else {
    // Error handling for the cURL request
    echo "Failed to fetch the installation count.";
}

// Close the cURL session
curl_close($curl);


// $html = file_get_contents('https://marketplace.visualstudio.com/items?itemName=Codium.codium');
// print $html;

?>
  </body>
</html>