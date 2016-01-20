// store information about the structure each plugin wants to see in the Gruntfile.
// this is used by octopus.updateGruntfile to dynamically build the Gruntfile.
var plugins = {
	uglify : {
		callOrder : [
			"uglify",
			"build",
			[
				"src: ",
				"\n      dest: "
			]
		],
		initName : "uglify",
		taskName : "build",
		load : 'grunt-contrib-uglify',
		description : "Minifies your JavaScript files",
		files : ["src: ", "dest: "],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source JavaScript File', 'Path to Build JavaScript File'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/js/main.js",
		outputPlaceholder : "build/js/main.js",
		icon : "compress_js.svg",
		helpContent : [
			'strips unneccessary visual elements from JavaScript to improve file size and download time',
			'a JavaScript file',
			'a <a href="https://en.wikipedia.org/wiki/Minification_(programming)" class="helpLink" target="_blank">minified</a> version of the JavaScript file',
			[
				'mangle<br>turn on or off mangling',
				'compress<br>source compression',
				'beautify<br>beautification of the generated source code',
				'report<br>Useful to see exactly how well clean-css is performing',
				'sourceMap<br>generates a source map file in the same directory as the dest file',
				'sourceMapName<br>customizes the name or location of the generated source map',
				'sourceMapIn<br>location of an input source map from an earlier compilation, e.g. from CoffeeScript',
				'sourceMapIncludeSources<br>includes the content of source files in the source map as sourcesContent property',
				'wrap<br>wrap all of the code in a closure, an easy way to make sure nothing is leaking',
				'maxLineLen<br>limit the line length in symbols',
				'ASCIIOnly<br>encodes non-ASCII characters as \\uXXXX',
				'exportAll<br>when using wrap: makes all global functions and variables available via the export variable',
				'preserveComments<br>preserves comments',
				'banner<br>prepends a string to the minified output',
				'footer<br>appends a string to the minified output',
				'screwIE8<br>disables full compliance with Internet Explorer 6-8 quirks',
				'mangleProperties<br>turns on property name mangling',
				'reserveDOMProperties<br>when using mangleProperties: prevents built-in browser object properties from being mangled',
				'exceptionsFiles<br>when using mangleProperties: passes JSON files containing a list of variables and object properties that should not be mangled',
				'nameCache<br>path to a JSON cache file that uglify will create and use to coordinate symbol mangling between multiple runs of uglify',
				'quoteStyle<br>preserve or enforce quotation mark style'
			],
			'<a href="https://github.com/gruntjs/grunt-contrib-uglify/blob/master/README.md" class="helpLink" target="_blank">Uglify README on GitHub</a>'
		]
	},
	resize_crop : {
		callOrder : [
		],
		initName : "resize_crop",
		taskName : "",
		load : '',
		description : "Scales and Crops your image files",
		files : ["", ""],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source image File', 'Path to Build image File'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/img/pizza.jpg",
		outputPlaceholder : "build/img/pizza.jpg",
		icon : "resize2.svg",
		helpContent : [
			'converts and crops images to specified sizes',
			'an image file in <a href="http://www.imagemagick.org/script/formats.php" class="helpLink" target="_blank">any format supported by imagemagick</a>',
			'a resized version of the image file',
			[
				'options.height<br>Sets the height in pixels to be used for the output image',
				'options.width<br>Sets the width in pixels to be used for the output image',
				'options.format<br>Sets the image type to output',
				'options.gravity<br>Determines the part of the image that will be removed during cropping'
			],
			'<a href="https://github.com/traviswimer/grunt-resize-crop/blob/master/README.md" class="helpLink" target="_blank">resize-crop README on GitHub</a>'
		]
	},
	imagemin : {
		callOrder : [
		],
		initName : "imagemin",
		taskName : "",
		load : '',
		description : "Minifies your image files",
		files : ["", ""],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source image File', 'Path to Build image File'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/img/pizza.jpg",
		outputPlaceholder : "build/img/pizza.jpg",
		icon : "resize2.svg",
		helpContent : [
			'compresses images',
			'an image file in GIF, JPEG, PNG or SVG format',
			'a compressed/minified version of the image file',
			[
				'optimizationLevel (png)<br>selects optimization level between 0 and 7 (higher numbers are more compressed but take longer to process)',
				'progressive (jpg)<br>lossless conversion to an interlaced progressive format which allows the image to be viewed at a lower resolution before it is fully downloaded',
				'interlaced (gif)<br>conversion to an interlaced progressive format which allows the image to be viewed at a lower resolution before it is fully downloaded',
				'svgoPlugins (svg)<br>allows the use of <a href="https://github.com/svg/svgo/tree/master/plugins" class="helpLink" target="_blank">SVGO plugins</a> for minifying SVG files',
				'use<br>allows the use of <a href="https://www.npmjs.com/browse/keyword/imageminplugin" class="helpLink" target="_blank">additional plugins</a>'
			],
			'<a href="https://github.com/gruntjs/grunt-contrib-imagemin/blob/master/README.md" class="helpLink" target="_blank">imagemin README on GitHub</a>'
		]
	},
	minifyHtml : {
		callOrder : [
		],
		initName : "minifyHtml",
		taskName : "",
		load : '',
		description : "Minifies your HTML files",
		files : ["", ""],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source HTML File', 'Path to Build HTML File'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/index.html",
		outputPlaceholder : "build/index.html",
		icon : "compress_html.svg",
		helpContent : [
			'strips unneccessary visual elements from HTML to improve file size and download time',
			'an HTML file',
			'a <a href="https://en.wikipedia.org/wiki/Minification_(programming)" class="helpLink" target="_blank">minified</a> version of the HTML file',
			[
				'removeComments<br>strip HTML comments',
				'removeCommentsFromCDATA<br>strip HTML comments from scripts and styles',
				'removeCDATASectionsFromCDATA<br>remove CDATA sections from script and style elements',
				'collapseWhitespace<br>collapse white space that contributes to text nodes in a document tree',
				'conservativeCollapse<br>always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true',
				'collapseInlineTagWhitespace<br>don\'t leave any spaces between display:inline; elements when collapsing. Must be used in conjunction with collapseWhitespace=true',
				'preserveLineBreaks<br>always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true',
				'collapseBooleanAttributes<br>omit attribute values from boolean attributes',
				'removeAttributeQuotes<br>remove quotes around attributes when possible',
				'removeRedundantAttributes<br>remove attributes when value matches default',
				'preventAttributesEscaping<br>prevents the escaping of the values of attributes',
				'useShortDoctype<br>replaces the doctype with the short (HTML5) doctype',
				'removeEmptyAttributes<br>remove all attributes with whitespace-only values',
				'removeScriptTypeAttributes<br>remove type="text/javascript" from script tags',
				'removeStyleLinkTypeAttributes<br>remove type="text/css" from style and link tags',
				'removeOptionalTags<br>remove unrequired tags',
				'removeEmptyElements<br>remove all elements with empty contents',
				'lint<br>toggle linting',
				'keepClosingSlash<br>keep the trailing slash on singleton elements',
				'caseSensitive<br>treat attributes in case sensitive manner (useful for custom HTML tags.)',
				'minifyJS<br>minify Javascript in script elements and on* attributes (uses UglifyJS)',
				'minifyCSS<br>minify CSS in style elements and style attributes (uses clean-css)',
				'minifyURLs<br>minify URLs in various attributes (uses relateurl)',
				'ignoreCustomComments<br>array of RegExes allowed to ignore certain comments',
				'ignoreCustomFragments<br>array of RegExes allowed to ignore certain fragments',
				'processScripts<br>array of strings corresponding to types of script elements to process through minifier',
				'maxLineLength<br>specify a maximum line length',
				'customAttrAssign<br>array of RegExes allowed to support custom attribute assign expressions',
				'customAttrSurround<br>array of RegExes allowed to support custom attribute surround expressions',
				'customAttrCollapse<br>RegEx that specifies custom attribute to strip newlines from',
				'quoteCharacter<br>quote style to use for attribute values'
			],
			'<a href="https://github.com/gruntjs/grunt-contrib-htmlmin/blob/master/README.md" class="helpLink" target="_blank">Minify-HTML README on GitHub</a><br><a href="https://github.com/kangax/html-minifier#options-quick-reference" class="helpLink" target="_blank">html-minifier options on GitHub</a>'
		]
	},
	cssmin : {
		callOrder : [
			"cssmin",
			"target",
			"files",
			[
				"",
				": "
			]
		],
		initName : "cssmin",
		taskName : "target",
		load : 'grunt-contrib-cssmin',
		description : "Minifies your CSS files",
		files : ["", ""],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source CSS File', 'Path to Build CSS File'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/css/style.css",
		outputPlaceholder : "build/css/style.css",
		icon : "compress_css.svg",
		helpContent : [
			'strips unneccessary visual elements from CSS to improve file size and download time',
			'a CSS file',
			'a <a href="https://en.wikipedia.org/wiki/Minification_(programming)" class="helpLink" target="_blank">minified</a> version of the CSS file',
			[
				'advanced<br>set to false to disable advanced optimizations - selector & property merging, reduction, etc.',
				'aggressiveMerging<br>set to false to disable aggressive merging of properties',
				'benchmark<br>turns on benchmarking mode measuring time spent on cleaning up (run npm run bench to see example)',
				'compatibility<br>enables compatibility mode',
				'debug<br>set to true to get minification statistics under stats property',
				'inliner<br>a hash of options for @import inliner',
				'keepBreaks<br>keep line breaks',
				'keepSpecialComments<br>* for keeping all (default), 1 for keeping first one only, 0 for removing all',
				'mediaMerging<br>disable merging @media at-rules',
				'processImport<br>processes @import rules',
				'processImportFrom<br>a list of @import rules',
				'rebase<br>skip URL rebasing',
				'relativeTo<br>path to resolve relative @import rules and URLs',
				'restructuring<br>disables restructuring in advanced optimizations',
				'root<br>path to resolve absolute @import rules and rebase relative URLs',
				'roundingPrecision<br>rounding precision; defaults to 2; -1 disables rounding',
				'semanticMerging<br>enables semantic merging mode which assumes <a href="https://en.bem.info/" class="helpLink" target="_blank">BEM-like content</a> (highly likely this will break your stylesheets - use with caution!)',
				'shorthandCompacting<br>skips shorthand compacting',
				'sourceMap<br>exposes source map under sourceMap property',
				'sourceMapInlineSources<br>inlines sources inside a source map\'s sourcesContent field',
				'target<br>path to a folder or an output file to which rebase all URLs',
				'report<br>useful to see exactly how well clean-css is performing',
			],
			'<a href="https://github.com/gruntjs/grunt-contrib-cssmin/blob/master/README.md" class="helpLink" target="_blank">CSSmin README on GitHub</a><br><a href="https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api" class="helpLink" target="_blank">CleanCSS options on GitHub</a>'
		]
	},
	watch : {
		callOrder : [
		],
		initName : "watch",
		taskName : "",
		load : '',
		description : "Watches a folder, runs Grunt tasks when the folder changes",
		files : ["", ""],
		inputs : ['sourceInput', 'buildInput'],
		inputNames : ['Path to Source Folder to be watched for changes'],
		sourceInput : "",
		sourceOutput : "",
		inputPlaceholder : "source/",
		outputPlaceholder : "build/",
		icon : "watch.svg",
		helpContent : [
			'runs specified grunt tasks when changes are made to a specified folder so you don\'t have to manually run Grunt each time you update files',
			'file, folder or an array of files or folders to watch',
			'none - runs other tasks that may output files',
			[
				'options.interrupt<br>spawn tasks in child processes',
				'options.debounceDelay<br>milliseconds to wait before firing when a change is detected',
				'options.interval<br>milliseconds interval passed to fs.watchFile (author recommends ignoring this option)',
				'options.event<br>specifies the type of watch events that triggers the specified task [\'changed\', \'added\', \'deleted\', \'all\']',
				'options.reload<br>changes to any of the watched files will trigger the watch task to restart. This is especially useful if your Gruntfile.js is dependent on other files',
				'options.forever<br>prevents grunt.fatal and grunt.warn from being overridden',
				'options.dateFormat<br>formats the Watch message date/time displayed in the terminal',
				'options.atBegin<br>triggers each specified task at Watch startup',
				'options.livereload<br>starts a <a href="https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html" class="helpLink" target="_blank">livereload server</a> that can automatically reload a page in your browser',
				'options.cwd<br>sets the current working directory',
				'options.livereloadOnError<br>prevents livereload if the executed tasks encountered an error'
			],
			'<a href="https://github.com/gruntjs/grunt-contrib-watch/blob/master/README.md" class="helpLink" target="_blank">Watch README on GitHub</a>'
		]
	}
};

var model = {
	pluginQty : (Object.keys(plugins).length),
	pluginList : Object.keys(plugins),
	moduleName : '',
	getModuleName : function(tab) {
		model.moduleName = Object.keys(plugins)[tab];
	}
};

var view = {
	moduleContainer : document.getElementById('moduleContainer'),
	helpContainer : document.getElementById('help'),
	//create arrays of tabs, contentContainers, etc based on the number of plugins
	moduleTabs : [],
	moduleDescriptions : [],
	moduleContentContainers : [],
	helpContentContainers : [],
	visualizationIn : [],
	visualizationOut : [],
	snippets : [
		'<div class="moduleVisualizationColumnLine" style="padding-left:',
		'px;"><img src="',
		'.svg" class="icon">',
		'</div>'
	],
};

var octopus  = {
	currentModule : 0,
	oldModule : 0,
	indent : '',
	indentLevel : 0,
	iconType : '',
	init : function() {
		for (var tab=0;tab<model.pluginQty;tab++) {
			model.getModuleName(tab);
			view.moduleTabs.push('moduleTab'+tab);
			view.moduleContentContainers.push('moduleContentContainer'+tab);
			view.helpContentContainers.push('help'+tab);
			view.visualizationIn.push('visualizationIn'+tab);
			view.visualizationOut.push('visualizationOut'+tab);
			var moduleContentContainer = document.createElement("div");
			moduleContentContainer.className = 'moduleContent';
			moduleContentContainer.id = 'moduleContentContainer' + tab;
			view.moduleContainer.appendChild(moduleContentContainer);

			// create source input fields and labels for each plugin
			for (input=0;input<plugins[model.moduleName].inputs.length;input++) {
				console.log(input);
			}
			moduleContentContainer.appendChild(document.createTextNode(plugins[model.moduleName].inputNames[0]));
			var sourceInput = document.createElement("input");
			sourceInput.id = 'sourceInput' + tab;
			sourceInput.placeholder = plugins[model.moduleName].inputPlaceholder;
			sourceInput.addEventListener("blur", octopus.updateGruntfile);
			moduleContentContainer.appendChild(sourceInput);

			// create build input fields and labels for each plugin
			moduleContentContainer.appendChild(document.createTextNode(plugins[model.moduleName].inputNames[1]));
			var buildInput = document.createElement("input");
			buildInput.id = 'buildInput' + tab;
			buildInput.placeholder = plugins[model.moduleName].outputPlaceholder;
			buildInput.addEventListener("blur", octopus.updateGruntfile);
			moduleContentContainer.appendChild(buildInput);

			// create a text area to display the gruntfile for each plugin
			var textarea = document.createElement("textarea");
			textarea.id = 'textarea' + tab;
			textarea.rows = 20;
			textarea.spellcheck = false;
			moduleContentContainer.appendChild(textarea);

			// create containers to display the file path visualization for each plugin
			// create the visualization container
			var moduleVisualization = document.createElement("div");
			moduleVisualization.className = 'moduleVisualization';
			moduleContentContainer.appendChild(moduleVisualization);
			// create column 1
			var moduleVisualizationCol1 = document.createElement("div");
			moduleVisualizationCol1.className = 'moduleVisualizationColumn';
			moduleVisualizationCol1.id = 'visualizationIn' + tab;
			moduleVisualization.appendChild(moduleVisualizationCol1);
			// create column 2
			var moduleVisualizationCol2 = document.createElement("div");
			moduleVisualizationCol2.className = 'moduleVisualizationColumn2';
			moduleVisualization.appendChild(moduleVisualizationCol2);
			// add an arrow to column 2
			var arrow = document.createElement("img");
			arrow.src = 'arrow.svg';
			moduleVisualizationCol2.appendChild(arrow);
			// create column 3
			var moduleVisualizationCol3 = document.createElement("div");
			moduleVisualizationCol3.className = 'moduleVisualizationColumn';
			moduleVisualizationCol3.id = 'visualizationOut' + tab;
			moduleVisualization.appendChild(moduleVisualizationCol3);

			// create the help section for each plugin
			var moduleHelp = document.createElement("div");
			moduleHelp.id = 'help' + tab;
			view.helpContainer.appendChild(moduleHelp);
			// create section heading element, fill it with content from the plugin object and append it
			var helpHeading = document.createElement("h2");
			helpHeading.innerHTML = '<img src="' + plugins[model.moduleName].icon + '" class="helpImg"><br>' + plugins[model.moduleName].initName + ' plugin';
			moduleHelp.appendChild(helpHeading);
			// create an array of sections to be created
			var helpSections = ['Function','Input','Output','Options','Further Reading'];
			// loop through the array and create the sections
			for (var section in helpSections) {
			// create section subhead element, fill it with content from the array above and append it
				var helpSubheading = document.createElement("h3");
				helpSubheading.innerHTML = helpSections[section];
				moduleHelp.appendChild(helpSubheading);
				// if current section is options, generate an ordered list from the array in plugins object
				if (section == 3) {
					var optionList = document.createElement("ol");
					for (var option in plugins[model.moduleName].helpContent[section]) {
						optionList.innerHTML += '<li>' + plugins[model.moduleName].helpContent[section][option];
					}
					moduleHelp.appendChild(optionList);
				// otherwise, create a paragraph and insert content string from the plugins object
				} else {
					// create paragraph element, fill it with content from the plugins object and append it
					var helpText = document.createElement("p");
					helpText.innerHTML = plugins[model.moduleName].helpContent[section];
					moduleHelp.appendChild(helpText);
				}
			}
		}

		// sets display = none on all modules except the first in the plugin array
		// these will be toggled manually as the user clicks on the tabs in the view
		for (var createdModules=1;createdModules<view.moduleContentContainers.length;createdModules++) {
			document.getElementById(view.moduleContentContainers[createdModules]).style.display = 'none';
			document.getElementById(view.helpContentContainers[createdModules]).style.display = 'none';
		}
	},
	moduleChanger : function(module) {
		octopus.oldModule = octopus.currentModule;
		octopus.currentModule = module;
		document.getElementById(view.moduleContentContainers[octopus.oldModule]).style.display = 'none';
		document.getElementById(view.moduleContentContainers[module]).style.display = 'block';
		document.getElementById(view.moduleTabs[octopus.oldModule]).className = 'unselected';
		document.getElementById(view.moduleTabs[module]).className = 'selected';
		document.getElementById(view.helpContentContainers[octopus.oldModule]).style.display = 'none';
		document.getElementById(view.helpContentContainers[module]).style.display = 'block';
	},
	descriptorChanger : function(module) {
		document.getElementById('moduleDescription').innerHTML = plugins[model.pluginList[module]].description;
		document.getElementById('plugOverlay').src = plugins[model.pluginList[module]].icon;
	},
	updateGruntfile : function(plugin) {
		plugin = plugin.srcElement.id;
		plugin = plugin.substr(plugin.length - 1);
		var pluginNum = plugin;
		plugin = model.pluginList[plugin];

		var gruntfile = document.getElementById('textarea' + pluginNum);
		var inputs = [document.getElementById('sourceInput' + pluginNum).value,document.getElementById('buildInput' + pluginNum).value];
		var uglifySourceInputSplit = inputs[0].split("/");
		var uglifyBuildInputSplit = inputs[1].split("/");
		var visualizationInStored = document.getElementById(view.visualizationIn[octopus.currentModule]);
		var visualizationOutStored = document.getElementById(view.visualizationOut[octopus.currentModule]);
		visualizationInStored.innerHTML = '';
		visualizationOutStored.innerHTML = '';
		for (var i=0, len=uglifySourceInputSplit.length;i < len;i++) {
			if (i < len-1) {
				octopus.iconType = 'folder';
			} else {
				octopus.iconType = 'file_jpg';
			}
			visualizationInStored.innerHTML += view.snippets[0] + (i*20) + view.snippets[1] + octopus.iconType + view.snippets[2] + uglifySourceInputSplit[i] + view.snippets[3];
		}
		for (i=0, len=uglifyBuildInputSplit.length;i < len;i++) {
			if (i < len-1) {
				octopus.iconType = 'folder';
			} else {
				octopus.iconType = 'file_jpg';
			}
			visualizationOutStored.innerHTML += view.snippets[0] + (i*20) + view.snippets[1] + octopus.iconType + view.snippets[2] + uglifyBuildInputSplit[i] + view.snippets[3];
		}
		gruntfileOutput = initConfigBegin;

		// create a variable to track the current indent level that will persist outside the
		// scope of the for loop so we can decrement it to properly indent closing brackets
		octopus.indentLevel = 0;
		// loop through the call order for the current plugin to build the required JSON structure
		for (i=0;i < plugins[plugin].callOrder.length;i++) {
			// create a string of spaces that indents the line based on the iteration of the for loop
			octopus.indent = Array(i + 2).join("  ");
			if (Object.prototype.toString.call( plugins[plugin].callOrder[i] ) === '[object Array]') {
				for (var j=0;j < plugins[plugin].callOrder[i].length;j++) {
					gruntfileOutput = gruntfileOutput + octopus.indent + plugins[plugin].callOrder[i][j] + "'" + inputs[j] + "'";
					// add a comma to the end of the line unless working on the last item in the object
					if (j<(plugins[plugin].callOrder[i].length-1)) {
						gruntfileOutput = gruntfileOutput + ",";
					}
				}
			}
			else {
				gruntfileOutput = gruntfileOutput + octopus.indent + plugins[plugin].callOrder[i];
				octopus.indentLevel += 1;
				gruntfileOutput = gruntfileOutput + ": {\n";
			}
		}
		for (i=0;i < octopus.indentLevel;i++) {
			octopus.indent = Array(octopus.indentLevel + 1 - i).join("  ");
			gruntfileOutput = gruntfileOutput + "\n" + octopus.indent + "}";
		}
		gruntfileOutput = gruntfileOutput + ",\n";
		gruntfileOutput = gruntfileOutput + initConfigEnd;
		gruntfileOutput = gruntfileOutput + "grunt.loadNpmTasks('" + plugins[plugin].load + "');\n\n";
		gruntfileOutput = gruntfileOutput + "grunt.registerTask('default', ['" + plugins[plugin].initName + "']);\n};";
		gruntfile.value = gruntfileOutput;
	},
};


var initConfigBegin = "module.exports = function(grunt) {\ngrunt.initConfig({\n";
var initConfigEnd = "});\n\n";
var uglifySourceInput = "";

var gruntfileOutput = "";


var prefs = {
	sourceName : '',
	buildName : '',
	show : function() {
		document.getElementById('prefs').style.top = 0;
		document.getElementById('prefsBackground').style.display = 'block';
	},
	color : function(bodBg, modBg) {
		document.body.style.background = bodBg;
		document.getElementById('module').style.backgroundColor = modBg;
		document.getElementById('prefs').style.backgroundColor = modBg;
	},
	hide : function() {
		document.getElementById('prefs').style.top = '-160vh';
		document.getElementById('prefsBackground').style.display = 'none';
	},
	set : function(parameter, value) {
		this[parameter] = value;
		document.getElementById('uglifySourceInput').value = this.sourceName + '/';
		document.getElementById('uglifySourceOutput').value = this.buildName + '/';
		//console.log(this);
	},
};

var help = {
	show : function() {
		document.getElementById('help').style.transition = 'left 0.4s cubic-bezier(0.420, 0.000, 0.580, 1.000)';
		document.getElementById('help').style.left = 0;
		document.getElementById('prefsBackground').style.display = 'block';
	},
	hide : function() {
		document.getElementById('help').style.transition = '0.4s cubic-bezier(0.420, 0.000, 0.580, 1.000)';
		document.getElementById('help').style.left = '-140vh';
		document.getElementById('prefsBackground').style.display = 'none';
	},
};




octopus.init();