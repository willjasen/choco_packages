var topic = "<!DOCTYPE html>\r\n\n<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"NAV\">\n      <meta name=\"release\" content=\"2021\">\n      <meta name=\"book\" content=\"Installation\">\n      \n      <meta name=\"topicid\" content=\"GUID-70C4EB01-0675-4960-BCFC-D1C1F1309CB0\">\n      <meta name=\"description\" content=\"Create a debug log file, configure your network license server, start it, and confirm that it\'s running.\">\n      <meta name=\"indexterm\" content=\"LMTOOLS\">\n      <meta name=\"indexterm\" content=\"Mac OS X server\">\n      <meta name=\"indexterm\" content=\"Linux server\">\n      <meta name=\"indexterm\" content=\"server status\">\n      <meta name=\"indexterm\" content=\"flexnet\">\n      <meta name=\"indexterm\" content=\"confirm license\">\n      <meta name=\"topic-type\" content=\"concept\">\n      <title>To Configure Your Network License Server</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-70C4EB01-0675-4960-BCFC-D1C1F1309CB0\"></a><div class=\"head\">\n            <h1>To Configure Your Network License Server </h1>\n         </div>\n         <p class=\"blurb\"> Create a debug log file, configure your network license server, start it, and confirm\n            that it\'s running. \n            \n         </p>\n         <div class=\"section\"><a name=\"SECTION_26C2F0779CC24A9FA0EF7403DFFC2C37\"></a><h2><a name=\"GUID-A9398F9A-1072-427D-9913-F52C26080F9F\"></a>Create a Debug Log File\n            </h2>\n            <p><a name=\"GUID-BF9917FC-0EC3-4199-A87E-19E70A8C8454\"></a>Debug log files contain Network License Manager (NLM) history information you can\n               review to troubleshoot problems with your license servers. \n               		\n            </p>\n         </div><a name=\"GUID-4BE59930-15E1-4793-A4D7-A90116ED870D\"></a><ol start=\"1\">\n            <li>Create a subfolder named Logs under the folder in which you installed NLM. \n               		\n            </li>\n            <li>Use a text editor to create a text file within the Logs subfolder. \n               		\n            </li>\n            <li>Give the text file any name you like, but be sure to change the extension from \n               		  <em class=\"mild\">.txt</em> to \n               		  <em class=\"mild\">.log</em>. \n               		\n            </li>\n         </ol>\n         <div class=\"section\"><a name=\"SECTION_1640BF2B317945BEA1A14934C61BC64F\"></a><h2><a name=\"GUID-6A35BCCB-9BE6-4AF6-803C-F6F90DEC9CD5\"></a>Configure the License Server\n            </h2>\n            <p><a name=\"GUID-FAF4484E-463D-48F9-9BE8-8FC39C9F7E12\"></a><em class=\"strong\">To configure a Windows server</em>, you can use the LMTOOLS utility provided with NLM. \n               		\n            </p><a name=\"OL_2CCB6AEB7FC4406EB09CD69502BE9137\"></a><ol start=\"1\">\n               <li>Open the LMTOOLS utility by clicking Start ➤ All Programs ➤ Autodesk ➤ Network License\n                  Manager ➤ LMTOOLS Utility. \n                  		  \n               </li>\n               <li>From the Service/License File tab, verify that the Configuration Using Services option\n                  is selected. \n                  		  \n               </li>\n               <li>Select the checkbox LMTOOLS Ignores License File Path Environment Variables. \n                  		  \n               </li>\n               <li>From the Config Services tab, use the Service Name drop-down menu to specify a name.\n                  \n                  		  \n               </li>\n               <li>Specify paths for the following three files: \n                  			 <a name=\"UL_47CF27F847D643D7AD9B9FBA4D47C4D9\"></a><ul>\n                     <li>Path to the \n                        				  <em class=\"mild\">lmgrd.exe</em> file: Browse to select the file in your NLM folder. \n                        				\n                     </li>\n                     <li>Path to the license file: Browse to select the license file you obtained from Autodesk.\n                        \n                        				\n                     </li>\n                     <li>Path to the debug log file: Browse to select the debug log file you created earlier.\n                        \n                        				\n                     </li>\n                  </ul> \n               </li>\n               <li>Select Use Services. Then select Start Server At Power Up. This setting ensures that\n                  the license server starts automatically if the server rebooted after maintenance or\n                  a power outage. \n                  		  \n               </li>\n               <li>Click Save Service and confirm. \n                  		  \n               </li>\n            </ol>\n            <p><em class=\"strong\">To configure a macOS or Linux server</em>, proceed as follows: \n               		\n            </p><a name=\"OL_0EF78F91430E4205AC1C5141E473E041\"></a><ol start=\"1\">\n               <li>Rename your license file to \n                  			 <em class=\"mild\">adsk_server.lic</em> and save it on the desktop. \n                  		  \n               </li>\n               <li> Move the \n                  			 <em class=\"mild\">adsk_server.lic</em> file from the desktop into this hidden folder: /var/flexlm. \n                  		  \n               </li>\n            </ol>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_B938EACB5E3644D9B734E98324F948B7\"></a><h2><a name=\"GUID-94E1851E-746A-4305-999D-7F057617EA8B\"></a>Start the License Server\n            </h2>\n            <p><em class=\"strong\">To start your Windows license server</em> with the LMTOOLS utility: \n               		\n            </p><a name=\"OL_E5339038B4A94E98AF2AC59E56D1392D\"></a><ol start=\"1\">\n               <li>From the Start/Stop/Reread tab, verify that the correct server name is highlighted\n                  and click Start Server. \n                  		  \n               </li>\n               <li>Verify that the license server has started (within 30 seconds). You should see the\n                  message, \"Server Start Successful\" at the bottom of the dialog. \n                  		  \n               </li>\n            </ol>\n            <p><em class=\"strong\">To start your macOS or Linux license server</em>, use Terminal. \n               		\n            </p><a name=\"OL_E2AD51B40B52497D810EB7041EC3CB33\"></a><ol start=\"1\">\n               <li>To get to the directory, enter the following commands: \n                  			 \n                  <div class=\"codeBlock\"><pre>sudo chmod -R 777 /var/flexlm\nsudo chmod -R 777 cd /usr/local/flexnetserver\ncd /usr/local/flexnetserver</pre></div> \n               </li>\n               <li>To list the directory contents, enter this command: \n                  			 \n                  <div class=\"codeBlock\"><pre>ls</pre></div> \n               </li>\n               <li>To start the license server, enter this command: \n                  			 \n                  <div class=\"codeBlock\"><pre>sudo ./lmgrd  -c /var/flexlm/adsk_server.lic</pre></div> \n               </li>\n            </ol>\n         </div>\n         <div class=\"section\"><a name=\"SECTION_5A3B3C141DE34F528AB3526A32D464E5\"></a><h2><a name=\"GUID-31CEB7CA-BE74-4E8A-8742-EE305D88117F\"></a>Confirm That the License Server Is Running \n            </h2>\n            <p><a name=\"GUID-4FF57FE3-0DDF-4287-AC04-E523EB569111\"></a><em class=\"strong\">To confirm in Windows</em>: \n               		\n            </p><a name=\"OL_BEE81B90B16A462294A28BF3DE51BE63\"></a><ol start=\"1\">\n               <li>From the Server Status tab of the LMTOOLS utility, click Perform Status Enquiry. \n                  		  \n               </li>\n               <li>When information is displayed in the status window, scroll down and verify the following:\n                  \n                  			 <a name=\"UL_35AB8C4397854A069503F1C9219C3BB9\"></a><ul>\n                     <li> Verify that the license server is running the latest version. Check the line that\n                        reads something like YourServerName : license server UP (MASTER) v11.12.0. \n                        				\n                     </li>\n                     <li>Verify that the license server has successfully read the license file and found no\n                        errors. You should see a line that reads something like Adskflex: UP v11.12.0. \n                        				\n                     </li>\n                  </ul> \n                  <p><a name=\"GUID-77D1F203-8AD0-4C0B-BC43-4F2D95014D87\"></a>If you do not see these two lines, the license server did not start correctly. Recheck\n                     your work to obtain and configure the license file. \n                     			 \n                  </p> \n               </li>\n            </ol>\n            <p><em class=\"strong\">To confirm in macOS or Linux:</em> \n            </p><a name=\"UL_A27AA3373210417AB49D7B4390638D0E\"></a><ul>\n               <li>Use Terminal to enter the following command: \n                  			 \n                  <div class=\"codeBlock\"><pre>sudo ./lmutil lmstat -a -c /var/flexlm/adsk_server.lic</pre></div> \n               </li>\n            </ul>\n            <div><a name=\"GUID-E7FD628F-FE52-46DE-A209-F987D7BFD6ED\"></a><div class=\"note-note\"><span class=\"label label-target-language\">NOTE:</span> If you receive an error message that the server has not started, use the Activity\n                  Monitor to find and quit the lmgrd process. Only then can you restart the license\n                  server. \n                  		\n               </div>\n            </div>\n         </div>\n         <div class=\"familylinks\">\n            <div class=\"parentlink\"><strong>Parent topic: </strong><a href=\"GUID-AD817657-43BD-4571-B887-5326B358C54C.htm\" title=\"\">Workflow: Planning, Installing, and Configuring Network Licenses</a></div>\n            <div class=\"previouslink\"><strong>Previous topic: </strong><a href=\"licensing_workflow_install_license_file.htm\" title=\" Collect information about your network license server, generate a license file, and save it on your server. &#xA;  \">To Obtain and Install a Network License File </a></div>\n            <div class=\"nextlink\"><strong>Next topic: </strong><a href=\"license_workflow_license_options.htm\" title=\"To maximize the number of available licenses, learn which options are available and what they do. &#xA;  \">About License Management Options and Tools</a></div>\n         </div>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br></div>\n   </body>\n</html>";