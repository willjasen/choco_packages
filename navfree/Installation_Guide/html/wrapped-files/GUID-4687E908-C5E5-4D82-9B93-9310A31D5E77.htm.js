var topic = "<!DOCTYPE html>\r\n\n<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"NAV\">\n      <meta name=\"release\" content=\"2021\">\n      <meta name=\"book\" content=\"Installation\">\n      \n      <meta name=\"topicid\" content=\"GUID-4687E908-C5E5-4D82-9B93-9310A31D5E77\">\n      <meta name=\"description\" content=\"Stop and restart a server on Windows, macOS, or Linux.\">\n      <meta name=\"indexterm\" content=\"LMTOOLS\">\n      <meta name=\"indexterm\" content=\"lmutil\">\n      <meta name=\"indexterm\" content=\"flexnet\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>To Stop and Restart a License Server</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-4687E908-C5E5-4D82-9B93-9310A31D5E77\"></a><div class=\"head\">\n            <h1>To Stop and Restart a License Server</h1>\n         </div>\n         <p class=\"blurb\"> Stop and restart a server on Windows, macOS, or Linux. \n            \n         </p>\n         <p>To perform system maintenance on a license server, including uninstalling Network\n            License Manager, first stop the license server. When you finish maintenance work,\n            restart the license server. \n            	 \n         </p>\n         <div class=\"section\"><a name=\"SECTION_BE2C12E11EAD4FCE8D3EE589C2B6CF7B\"></a><h2><a name=\"GUID-D18FD06C-9433-4EFC-AD12-A18427211C38\"></a>From a Windows License Server\n            </h2>\n            <p><em class=\"strong\">Stop the Server</em> \n            </p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-45D9\"></a><ol start=\"1\">\n               <li>Access LMTOOLS in the Windows Start menu. \n                  		  \n               </li>\n               <li>In LMTOOLS, click the Service/License File tab. \n                  		  \n               </li>\n               <li>Select the Configure Using Services option. \n                  		  \n               </li>\n               <li>Select the service name for the license server you want to stop manually. \n                  		  \n               </li>\n               <li>Click the Start/Stop/Reread tab. \n                  		  \n               </li>\n               <li>Stop the server. \n                  			 \n                  <p>The best practice is to select Force Server Shutdown before clicking Stop Server.\n                     Then wait five seconds before attempting to start the server again. \n                     			 \n                  </p> \n               </li>\n            </ol>\n            <p><em class=\"strong\">Restart the Server</em> \n            </p>\n            <p>On the Start/Stop/Reread tab in LMTOOLS, click Start Server. \n               		\n            </p>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_5AB1EF03AAE84300A7CA5F89B79D7CA7\"></a><h2><a name=\"GUID-EDED7875-910B-42CF-AE98-C30A895F687E\"></a>From a macOS License Server\n            </h2>\n            <p><em class=\"strong\">Stop the Server</em> \n            </p>\n            <p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-45C1\"></a>Enter the following in Terminal: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>./lmutil lmdown -q -force</pre></div>\n            <p><em class=\"strong\">Restart the Server</em> \n            </p>\n            <p><a name=\"WS1A9193826455F5FF-3859B43C1209703A838-45BE\"></a>Enter the following in Terminal, replacing \n               		  <em class=\"mild\">acad.lic</em> with your license filename and \n               		  <em class=\"mild\">debug.log</em> with your log filename: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>./lmgrd -c acad.lic -l debug.log</pre></div>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_5D7D71AE9CE7489CB27AD5C80DBA3A77\"></a><h2><a name=\"GUID-E06A611B-3EF0-47B2-B03D-1E00DD08AD43\"></a>From an Automatic macOS License Server\n            </h2>\n            <p><em class=\"strong\">Stop the Server</em> \n            </p>\n            <p><a name=\"GUID-AEEE33F2-9BC4-48CD-AFD1-1C080E976546\"></a>Enter the following in Terminal: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>sudo\n/sbin/SystemStarter stop adsknlm</pre></div>\n            <p><em class=\"strong\">Restart the Server</em> \n            </p>\n            <p><a name=\"GUID-B0163CF7-FC70-41CA-8C33-A3C5A4007127\"></a>Enter the following in Terminal: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>sudo\n/sbin/SystemStarter restart adsknlm</pre></div>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_A4C02D039D174694903CACBB701637B5\"></a><h2><a name=\"GUID-A98E03ED-8CED-4C8B-A1B6-B613B14F3ADB\"></a>From a Linux License Server\n            </h2>\n            <p><em class=\"strong\">Stop the Server</em> \n            </p>\n            <p>Enter the following in Terminal: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>./lmutil lmdown -q -force</pre></div>\n            <p><em class=\"strong\">Restart the Server</em> \n            </p>\n            <p>Enter the following in Terminal, replacing \n               		  <em class=\"mild\">acad.lic</em> with your license filename and \n               		  <em class=\"mild\">debug.log</em> with your log filename: \n               		\n            </p>\n            <div class=\"codeBlock\"><pre>./lmgrd -c acad.lic -l debug.log</pre></div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br></div>\n   </body>\n</html>";