var topic = "<!DOCTYPE html>\r\n\n<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\n   <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta name=\"product\" content=\"NAV\">\n      <meta name=\"release\" content=\"2021\">\n      <meta name=\"book\" content=\"Installation\">\n      \n      <meta name=\"topicid\" content=\"GUID-1F1346AE-6EEB-4381-A2C0-D71A5A133934\">\n      <meta name=\"indexterm\" content=\"Network License Manager\">\n      <meta name=\"indexterm\" content=\"NLM\">\n      <meta name=\"indexterm\" content=\"cascading\">\n      <meta name=\"indexterm\" content=\"option file\">\n      <meta name=\"topic-type\" content=\"topic\">\n      <title>About Managing Network Licenses</title><script language=\"javascript\">var index = \'index.html\';</script></head>\n   <body height=\"100%\">\n      <div class=\"body_content\" id=\"body-content\" dir=\"ltr\"><a name=\"GUID-1F1346AE-6EEB-4381-A2C0-D71A5A133934\"></a><div class=\"head\">\n            <h1>About Managing Network Licenses</h1>\n         </div>\n         <p><a name=\"GUID-A7F3EBC1-91A9-490D-B443-8672D35EC1E4\"></a> Network License Manager (NLM) runs on one or more servers in your network to control\n            the distribution of licenses from the available pool. When a user starts a product,\n            NLM requests a license from the license server. If a license is available, NLM assigns\n            it to the requesting user. This assigned license is subtracted from the number of\n            available licenses on the license server. When the user exits the product, NLM makes\n            the license available again. \n            	 \n         </p>\n         <p><em class=\"strong\">Cascading</em> \n         </p>\n         <p> NLM uses a process called \n            		<em class=\"mild\">cascading</em>, in which NLM automatically switches or substitutes licenses according to a ranking\n            hierarchy. Lower-ranking licenses are used whenever possible. Higher-ranking licenses\n            are used only when necessary. For example, they are necessary when a user is running\n            two or more suite products, or when all lower-ranking licenses are in use. During\n            this process, NLM surveys license usage every two minutes. As it surveys, it redistributes\n            licenses among users and retrieves licenses that have been unused for longer than\n            the allowed timeout period. \n            	 \n         </p>\n         <p>Licenses are consumed in this order:\n            	 \n         </p><a name=\"OL_994E86F1DC744770A60BF720C7C6D4DD\"></a><ol start=\"1\">\n            <li>First, multi-user licenses for a product\n               		\n            </li>\n            <li>Perpetual and maintenance licenses\n               		\n            </li>\n            <li>Licenses for industry collections that include the product\n               		\n            </li>\n            <li>Finally, licenses for design and creation suites that include the product\n               		\n            </li>\n         </ol>\n         <p>License cascading is most effective in a large user group when NLM has a pool of different\n            license types available for distribution. For example, suppose that the pool includes\n            product-specific licenses for several products, licenses for an industry collection,\n            and licenses for a suite. In this case, NLM has many options for determining the most\n            efficient way to manage the licenses. If a user runs multiple products, NLM can assign\n            single-product licenses as individual products start up and replace them with an industry\n            collection or suite license. \n            	 \n         </p>\n         <p>You can disable cascading for product releases of 2016 and later. You do so by setting\n            the value of the environment variable ADSK_CASCADING_OVERRIDE to 0 (a setting of 1\n            enables cascading). This setting applies across all products. \n            	 \n         </p>\n         <div><a name=\"GUID-FC1C7B40-5B07-4584-8ECF-5548B8A53D2D\"></a><div class=\"note-important\"><span class=\"label label-target-language\">IMPORTANT:</span>Cascading is essential for suite licensing. Don\'t disable cascading for suites. \n               	 \n            </div>\n         </div>\n         <div><a name=\"GUID-3DBBFD9D-E127-45AE-9F37-B566E0B3D334\"></a><div class=\"note-note\"><span class=\"label label-target-language\">NOTE:</span>Cascading is automatically disabled for Autodesk Enterprise Token Flex (product code\n               535H1) regardless of the setting. \n               	 \n            </div>\n         </div>\n         <p><em class=\"strong\">Options File</em> \n         </p>\n         <p>Although an options file is not required, you can use one to further control how NLM\n            manages your network licenses. The options file is a simple text file in which you\n            code parameters to control timeout periods, licensing borrowing, and other license-distribution\n            factors. \n            	 \n         </p>\n         <div class=\"footer-block\"><a href=\"..\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\"></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br></div>\n   </body>\n</html>";