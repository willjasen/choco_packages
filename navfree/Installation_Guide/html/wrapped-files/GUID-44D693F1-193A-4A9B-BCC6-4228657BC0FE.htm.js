var topic = "<!DOCTYPE html>\r\n\n<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"NAV\">\n      <meta name=\"release\" content=\"2021\">\n      <meta name=\"book\" content=\"Installation\">\n      \n      <meta name=\"topicid\" content=\"GUID-44D693F1-193A-4A9B-BCC6-4228657BC0FE\">\n      <meta name=\"description\" content=\"Create a license file that allows multiple products to run on the same network.\">\n      <meta name=\"indexterm\" content=\"multi-product license file\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <meta name=\"audience\" content=\"administrator\">\n      <meta name=\"experiencelevel\" content=\"general\">\n      <meta name=\"topic-subtype\" content=\"installing\">\n      <title>To Combine License Files</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-44D693F1-193A-4A9B-BCC6-4228657BC0FE\"></a><div class=\"head\">\n            <h1>To Combine License Files</h1>\n         </div>\n         <p class=\"blurb\"> Create a license file that allows multiple products to run on the same network. \n            \n         </p>\n         <p><a name=\"GUID-1D3FBF47-5C25-4643-9CFB-83909853AE01\"></a>In Autodesk Account, you can generate a license file that automatically consolidates\n            network licenses. However, this automatic method can sometimes drop licenses for older\n            products. In this case, combine your network licenses manually by adding license statements\n            in the new file to the end of the existing file. \n            	 \n         </p>\n         <p>After you create the combined license file, stop and restart each server that uses\n            the file. Upon restart, the server reads the new file. \n            	 \n         </p>\n         <div><a name=\"GUID-660D51F5-BA94-440B-8A50-10976100CFFB\"></a><div class=\"note-note\"><span class=\"label label-target-language\">NOTE:</span>For Windows servers, the LMTOOLS utility has a command for rereading a license file\n               without stopping the server. However, it is more reliable to stop and restart the\n               server. \n               	 \n            </div>\n         </div>\n         <p><em class=\"strong\">To Combine Manually \n               		</em> \n         </p><a name=\"GUID-8F2DB5AE-C052-4522-8E54-809B9314DE1B\"></a><ol start=\"1\">\n            <li>Back up your existing license file before you begin editing. \n               		\n            </li>\n            <li> Examine the license files you want to combine to ensure that the top lines are identical,\n               from SERVER to VENDOR. The following example shows the applicable lines for a single-server\n               model: \n               		  \n               <div class=\"codeBlock\"><pre>SERVER XXHP0528 0019bbd68993\nUSE_SERVER \nVENDOR adskflex port=2080</pre></div> \n            </li>\n            <li> Open both the existing and newly issued license files in Notepad (Windows) or TextEdit\n               (macOS). \n               		\n            </li>\n            <li> Copy everything after the VENDOR line from the newly issued license file. \n               		\n            </li>\n            <li>Paste the new license statements at the end of the existing license file. \n               		\n            </li>\n            <li>To include other new license files, copy statements from each new license file and\n               paste them at the end of the existing license file. \n               		\n            </li>\n            <li> Save the new combined license file. \n               		\n            </li>\n         </ol>\n         <p><em class=\"strong\">Example of a Combined File</em> \n         </p>\n         <p>The following example shows how to paste license statements for AutoCAD 2014-2017\n            into an existing license file for AutoCAD 2013-2016. Manual combination is necessary\n            here because automatic generation through Autodesk Account would drop the statement\n            for the older AutoCAD 2013 product. \n            	 \n         </p>\n         <div><a name=\"GUID-BA8B058B-F5BB-4B1C-AD67-CD16701D5293\"></a><div class=\"note-important\"><span class=\"label label-target-language\">IMPORTANT:</span>The first three lines, from SERVER to VENDOR, appear only once in the combined file.\n               Don\'t copy those first three lines from AutoCAD 2014-2017.\n               	 \n            </div>\n         </div>\n         <p>Existing AutoCAD 2013-2016 license file: \n            		\n            <div class=\"codeBlock\"><pre>SERVER SIN3NYDYZ1 8086F221F250\nUSE_SERVER\nVENDOR adskflex port=2080\nPACKAGE 64300ACD_F adskflex 1.000 COMPONENTS=\"86445ACD_2016_0F \\\n	86295ACD_2015_0F 86063ACD_2014_0F 85871ACD_2013_0F\" \\\n	OPTIONS=SUITE SUPERSEDE=64300ACD_F ISSUED=13-Apr-2014 \\\n	SIGN=\"13D3 F8F5 48C2 B4A4 B077 C96F AFA4 E8CF 86D0 742D 9687 \\\n	3A10 CDAE C9E8 F305 1D17 AAB6 80E8 9A41 06D7 1833 56F2 FC93 \\\n	7DE0 86EA 5B5E 8E36 2617 0826 59DC\" SIGN2=\"0CFE 86F1 EC10 290E \\\n	9207 4D75 B8DE 13BD 88E3 47D1 E24C 3E6C AA2E 8A3E AF92 13B8 \\\n	44FF 1870 244E 1FE0 B8D2 2227 80C5 B591 127E 7CC2 5939 5D69 \\\n	A804 4770\"\nINCREMENT 64300ACD_F adskflex 1.000 permanent 5 \\\n	VENDOR_STRING=commercial:permanent SUPERSEDE=64300ACD_F \\\n	DUP_GROUP=UH SUITE_DUP_GROUP=UHV ISSUED=13-Apr-2014 \\\n	BORROW=4320 SN=399-99999966 SIGN=\"0785 CC2C 1E29 E4D4 D452 \\\n	8204 A8B2 0819 E31F 470B BACE F3AD DDC4 6D8C 681B 1F26 1BE3 \\\n	96F2 6559 9406 78D2 20DC CA61 8434 06BD CF95 04BC 3C11 99A7 \\\n	C984\" SIGN2=\"138F 9AF1 119F 2728 F0B6 1863 E791 02B4 09B8 28D0 \\\n	F2EC 1E19 DAE4 561C AED8 13AE B059 9D36 31DA 1F0A 1D24 06E9 \\\n	D99D 9891 2FFF DF13 1936 F1C3 06DC CE38\"\n</pre></div> \n         </p>\n         <p>New AutoCAD 2014-2017 license file: \n            		\n            <div class=\"codeBlock\"><pre>SERVER SIN3NYDYZ1 8086F221F250\nUSE_SERVER\nVENDOR adskflex port=2080\nPACKAGE 64300ACD_T_F adskflex 1.000 COMPONENTS=\"86445ACD_2017_0F \\\n	86295ACD_2016_0F 86063ACD_2015_0F 85871ACD_2014_0F\" \\\n	OPTIONS=SUITE SUPERSEDE=64300ACD_T_F ISSUED=13-Apr-2016 \\\n	SIGN=\"184C FEAF 3F49 3E24 A1CC 65E8 AE84 208A 272F 760E 0F92 \\\n	6C45 8E9B DB44 1A96 0048 A182 DB6F 7915 9DD6 226B 6D95 B9B0 \\\n	6489 21CE 3A5A 818E 2ADD 5DA1 A659\" SIGN2=\"0C43 5034 F3B5 E032 \\\n	AD5A F814 7CF9 8494 5F07 D668 1A98 1320 8D1B FB51 4E5C 1CB7 \\\n	CFD7 10F3 D3B7 3D66 399E 7C9B 64DC 1EDD 3FFA CF63 A88F B397 \\\n	AE39 6609\"\nINCREMENT 64300ACD_T_F adskflex 1.000 13-apr-2017 10 \\\n	VENDOR_STRING=commercial:extendable SUPERSEDE=64300ACD_T_F \\\n	DUP_GROUP=UH SUITE_DUP_GROUP=UHV ISSUED=13-Apr-2016 \\\n	BORROW=4320 SN=399-12345678 SIGN=\"1E40 7956 3769 A2FC AF70 \\\n	A12B FDB3 7918 325C F80C 4016 321E 5460 7BFE 071C 0FBF 0CBC \\\n	1D8F F13F F6D4 A96A 32C2 98CA 560B 994C FAD4 23D7 FE2D 8EF6 \\\n	E314\" SIGN2=\"110E E19B 44D4 A07C 730F F33B DE65 F98D 0D77 2D9A \\\n	74D2 F39C 9299 42CC FB28 1F82 5E4E 16A5 E7DF 943E DB57 6058 \\\n	AABF 7A2C 1518 40B7 DB27 1CD1 A10D D772\"\\\n</pre></div> \n         </p>\n         <p>Resultant combined license file: \n            		\n            <div class=\"codeBlock\"><pre>SERVER SIN3NYDYZ1 8086F221F250\nUSE_SERVER\nVENDOR adskflex port=2080\nPACKAGE 64300ACD_F adskflex 1.000 COMPONENTS=\"86445ACD_2016_0F \\\n	86295ACD_2015_0F 86063ACD_2014_0F 85871ACD_2013_0F\" \\\n	OPTIONS=SUITE SUPERSEDE=64300ACD_F ISSUED=13-Apr-2014 \\\n	SIGN=\"13D3 F8F5 48C2 B4A4 B077 C96F AFA4 E8CF 86D0 742D 9687 \\\n	3A10 CDAE C9E8 F305 1D17 AAB6 80E8 9A41 06D7 1833 56F2 FC93 \\\n	7DE0 86EA 5B5E 8E36 2617 0826 59DC\" SIGN2=\"0CFE 86F1 EC10 290E \\\n	9207 4D75 B8DE 13BD 88E3 47D1 E24C 3E6C AA2E 8A3E AF92 13B8 \\\n	44FF 1870 244E 1FE0 B8D2 2227 80C5 B591 127E 7CC2 5939 5D69 \\\n	A804 4770\"	License snippet for SN A\nINCREMENT 64300ACD_F adskflex 1.000 permanent 5 \\\n	VENDOR_STRING=commercial:permanent SUPERSEDE=64300ACD_F \\\n	DUP_GROUP=UH SUITE_DUP_GROUP=UHV ISSUED=13-Apr-2014 \\\n	BORROW=4320 SN=399-99999966 SIGN=\"0785 CC2C 1E29 E4D4 D452 \\\n	8204 A8B2 0819 E31F 470B BACE F3AD DDC4 6D8C 681B 1F26 1BE3 \\\n	96F2 6559 9406 78D2 20DC CA61 8434 06BD CF95 04BC 3C11 99A7 \\\n	C984\" SIGN2=\"138F 9AF1 119F 2728 F0B6 1863 E791 02B4 09B8 28D0 \\\n	F2EC 1E19 DAE4 561C AED8 13AE B059 9D36 31DA 1F0A 1D24 06E9 \\\n	D99D 9891 2FFF DF13 1936 F1C3 06DC CE38\"\nPACKAGE 64300ACD_T_F adskflex 1.000 COMPONENTS=\"86445ACD_2017_0F \\\n	86295ACD_2016_0F 86063ACD_2015_0F 85871ACD_2014_0F\" \\\n	OPTIONS=SUITE SUPERSEDE=64300ACD_T_F ISSUED=13-Apr-2016 \\\n	SIGN=\"184C FEAF 3F49 3E24 A1CC 65E8 AE84 208A 272F 760E 0F92 \\\n	6C45 8E9B DB44 1A96 0048 A182 DB6F 7915 9DD6 226B 6D95 B9B0 \\\n	6489 21CE 3A5A 818E 2ADD 5DA1 A659\" SIGN2=\"0C43 5034 F3B5 E032 \\\n	AD5A F814 7CF9 8494 5F07 D668 1A98 1320 8D1B FB51 4E5C 1CB7 \\\n	CFD7 10F3 D3B7 3D66 399E 7C9B 64DC 1EDD 3FFA CF63 A88F B397 \\\n	AE39 6609\"	License snippet for SN B\nINCREMENT 64300ACD_T_F adskflex 1.000 13-apr-2017 10 \\\n	VENDOR_STRING=commercial:extendable SUPERSEDE=64300ACD_T_F \\\n	DUP_GROUP=UH SUITE_DUP_GROUP=UHV ISSUED=13-Apr-2016 \\\n	BORROW=4320 SN=399-12345678 SIGN=\"1E40 7956 3769 A2FC AF70 \\\n	A12B FDB3 7918 325C F80C 4016 321E 5460 7BFE 071C 0FBF 0CBC \\\n	1D8F F13F F6D4 A96A 32C2 98CA 560B 994C FAD4 23D7 FE2D 8EF6 \\\n	E314\" SIGN2=\"110E E19B 44D4 A07C 730F F33B DE65 F98D 0D77 2D9A \\\n	74D2 F39C 9299 42CC FB28 1F82 5E4E 16A5 E7DF 943E DB57 6058 \\\n	AABF 7A2C 1518 40B7 DB27 1CD1 A10D D772\"\n</pre></div> \n         </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br></div>\n   </body>\n</html>";