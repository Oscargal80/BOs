#lightbox{
	background-color:#eee;
	padding: 10px;
	border-bottom: 2px solid #666;
	border-right: 2px solid #666;
	}
#lightboxDetails{
	font-size: 0.8em;
	padding-top: 0.4em;
	}	
#lightboxCaption{ float: left; }
#keyboardMsg{ float: right; }

#lightbox img{ border: none; } 
#overlay img{ border: none; }
#overlay{ background-image: url(overlay.png); }

* html #overlay{
	background-color: #000;
	back\ground-color: transparent;
	background-image: url(blank.gif);
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="overlay.png", sizingMethod="scale");
	}