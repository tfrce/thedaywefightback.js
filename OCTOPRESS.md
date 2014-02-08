##Installing the banner on Octopress

If you're using [Octopress](http://octopress.org/), it's pretty simple to add the banner to your site:

1.	Go to your Octopress installation path
2.	Touch a file in `source/_includes/thedaywefightback.html`
3.	Place the main javascript snippet in `thedaywefightback.html`, as is
4.	Put the **file name** above (without path) into `source/_includes/after_footer.html`

Then you're done. The file `source/_includes/after_footer.html` should now look something like this:

```html
{% include disqus.html %}
{% include thedaywefightback.html %}
{% include custom/after_footer.html %}
```
