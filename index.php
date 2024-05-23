<?php
  require_once './wrap/lib/ids.php';
?>

<!DOCTYPE html>
<html>
  <head>
    <!-- add the title of the experiment that would be seen in the browser -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.title = `${experimentAlias.toUpperCase()}`;
    });
  </script>
    <!-- php favicon -->
    <script type="image/ico" rel="icon" src="./wrap/favicon.ico" ></script>
    <script type="text/javascript" src="./wrap/lib/validate.js"></script>
    <script type="text/javascript" src="./wrap/lib/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="./wrap/jspsych/jspsych.js"></script>
   <!-- loads in jspsych plugins -->
    <script type="text/javascript" src="./wrap/jspsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script type="text/javascript" src="./wrap/jspsych/plugins/jspsych-image-keyboard-response.js"></script>
    <script type="text/javascript" src="./wrap/jspsych/plugins/jspsych-audio-keyboard-response.js"></script>

    <link href="./wrap/jspsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="./wrap/lib/style.css"> 
    <link rel="stylesheet" type="text/css" href="css/style.css"> 
    <link rel="stylesheet" type="text/css" href="css/w3.css"> <!-- styling for w3c progress bars -->
  </head>
  <body id='unload' onbeforeunload="return areYouSure()">  
  <?php
    if (isset($_GET["workerId"]) || isset($_GET["PROLIFIC_PID"]) || isset($_GET["participantId"])) {
      include_once "./wrap/include/consent.php";
    } else if (isset($_GET["src_subject_id"])) {
      include_once "./wrap/include/nda.php";
    } else {
      include_once "./wrap/include/intake.php";
    }
  ?>
  </body>
  <footer>
    <script type="text/javascript" src="./exp/conf.js"></script>
    <script type="text/javascript" src="./wrap/lib/fn.js"></script>
    <?php require_once './exp/var.php'; ?>
    <script type="text/javascript" src="./exp/fn.js"></script>
    <script type="text/javascript" src="./exp/lang.js"></script>
    
  </footer>
</html>
