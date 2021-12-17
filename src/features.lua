features
navmenu
	menu selection
		+viewswitch
		-selectors
	pop up opening
		-buttom
	dynamic height
		-menubar
filter menu
	search
		+static search
	filter search
		-dynamic searchbox
		+dynamic search
	adding tags
		-checkboxes
		-tags
		-tagdisplay
			+tagadd
			+tagremove
	removing tags
		-tags
		+tag update
	updating the global environment
		+ecatalog search
text menu
	text parsing
		-textbox
		+parsing
		+tag matching
	text highlighting
		-coloredhighlight
	adding tags
		-tags
		+tagadd
		-tagdisplay
bom tool
	overlay view
		-bompopup
		-bluroverlay
	same page routing
		-context routing(don't use url router)
		-productguideviews
	links in an image
		-no idea
	configurators
		-configuratorbuilder(the required datafields dictate the configurator)
		-sliders
		-option boxes
		-partnumber visualizer(interface it with the configuratorbuilder)
	adding products to the bom
		+bomadd
bom view
	add and remove products
		-productbox
		+bomadd
		+bomremove
		-
	categorization by product type
		-productcatview
	quantity
		-quantityfield
	automatic external link retrieval
		+mock datasheet for now
		-links
ecatalog
	product view
		+data from mock datasheet
		-productbox
		-product detail dropdown
	partnumber highlighting
		-coloredhighlight
	full matches + similar results
	add to bom
		+bomadd

architecture
+sidemenu
	#currentselected
	+tagdisplay
	+menuselector
	+filtermenu
	+textmenu
	-catalogupdate(onChange)
+tagdisplay
	#mytags
	-addtag(tagname)
	-checktag(tagname)
	-removetag(tagname)
	-getTags()
+tag
    -close(onClick)
+menuselector
	-select(onclick)
+filtermenu
	+inputfield
		-filtersearch(onupdate)
	+filters
		+checkboxcategory
			-tagdisplayupdate(onupdate)
+textmenu
	+inputfield
	+evilbutton
		-textparse(text):tokens
		-tagmatching(tokens, datastore):tags
		-tagdisplayupdate(tags)
+bom
	+BoMDisplay
    +product
+ecatalog
    +SearchDisplay
    +product
    +dynamicLink
+product
    #productDataTable
    -texthighlight(?)
    +quantityselector
        #currentquantity
        -more
        -less
+dynamicLink
    -fetchdatasheetlink(partnumber): href
    -fetchecataloglink(partnumber): href
+productGuide
    +popout-view
        -bluroverlay
    -view
        -route(onClick)<-dont use explicit routing
    -imageView
        #image(use map and area html tags for links)
        -route(onClick)
    +productConfigurator
        +dynamicForm(json dataFormat): html form
            #databindings(which parts of the form relate to changes in partnumber)
            -build(for each field)
            -update(onChange)
        +addtobom(onSubmit)