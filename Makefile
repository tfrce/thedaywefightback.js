all: widget.min.js

.PHONY: all

widget.min.js: widget.js
	cat license-header.txt > $@
	uglifyjs $^ >> $@
