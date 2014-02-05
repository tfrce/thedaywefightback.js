all: widget.min.js

.PHONY: all

widget.min.js: widget.js
	uglifyjs $^ > $@
