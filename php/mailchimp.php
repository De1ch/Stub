<?php
  include 'MailChimp.php';

  $MailChimp = new Drewm\MailChimp('ffb9255ac645dbfef9ccd77f97aa3ea9-us10');
  $result = $MailChimp->call('lists/subscribe', array(
	'id'                => '1225ba8aee',
	'email'             => array( 'email' => $_POST['email'] ),
	'merge_vars'        => array( 'email' => $_POST['email'] ),
	'double_optin'      => false,
	'update_existing'   => true,
	'replace_interests' => false,
	'send_welcome'      => false,
  ));
  
  echo $result->status;
  echo $result->code;
  echo $result->name;
  echo $result->error;
  
  var_dump($result);
  
  if( $result === false ) {
	echo 'Error info:' .$result->error;
  }
  else if( isset($result->status) && $result->status == 'error' ) {
	echo 'Error info:' .$result->error;
  }
  var_dump($MailChimp);
  
?>