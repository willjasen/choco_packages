var topic = "<!DOCTYPE html>\r\n\n<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"NAV\">\n      <meta name=\"release\" content=\"2021\">\n      <meta name=\"book\" content=\"Installation\">\n      \n      <meta name=\"topicid\" content=\"GUID-E92C18C6-D7C9-4D6B-BFC8-B59B04F19C7C\">\n      <meta name=\"indexterm\" content=\"Autodesk Analytics\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <meta name=\"audience\" content=\"administrator\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"installing\">\n      <title>About Deployments Using Microsoft SCCM</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-E92C18C6-D7C9-4D6B-BFC8-B59B04F19C7C\"></a><div class=\"head\">\n            <h1>About Deployments Using Microsoft SCCM </h1>\n         </div>\n         <p><a name=\"WS1A9193826455F5FF-75C1F7C3124F51CCBD1-600A\"></a> Microsoft System Center Configuration Manager (SCCM) provides an alternative way\n            to distribute software remotely. An SCCM installation package containing files and\n            documentation for distributing the software is created from the deployment administrative\n            image. Microsoft \n            		<a href=\"https://technet.microsoft.com/en-us/library/gg682082.aspx\">describes the process on their website</a>. If you\'re using SCCM, you\'ll find useful batch scripts for distributing products\n            or uninstalling them in your \n            		<em class=\"mild\">&lt;deployment name&gt;\\</em>SMS_SCCM scripts folder. \n            	 \n         </p>\n         <p>Microsoft .NET Framework 4.0 must be installed on each target computer before you\n            use SCCM to distribute Autodesk products. Some products require .NET 4.5, which the\n            SCCM deployment can install. \n            	 \n         </p>\n         <div><a name=\"GUID-02F44E71-C9DD-4B07-80B5-4A6F54F0320A\"></a><div class=\"note-note\"><span class=\"label label-target-language\">NOTE:</span>Autodesk Analytics sends usage data to Autodesk for analysis. By default, each user\n               in your deployment will have the opportunity to opt-in or opt-out later, from an option\n               in their product Help menu. However, during installation you can opt-in or opt-out\n               of Autodesk Analytics for all users in your deployment by including one of the following\n               commands in your installation script. To opt-out for all users in your deployment,\n               include this command in your script: \n               		\n               <div class=\"codeBlock\"><pre>Msiexec.exe [product].msi ADAOPTIN=0 ADAOVERRIDED=1</pre></div> To opt-in for all users in your deployment, include this command in your script:\n               \n               		\n               <div class=\"codeBlock\"><pre>Msiexec.exe [product].msi ADAOPTIN=1 ADAOVERRIDED=1</pre></div> \n            </div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br></div>\n   </body>\n</html>";