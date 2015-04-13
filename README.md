# send-to-asana
Bookmarklet for adding the link of the current page to Asana. 

If any text is selected on the page, it will be also added to the Description field in Asana.

Based on code posted on a [Stackoverflow post.](http://stackoverflow.com/questions/18691610/asana-javascript-bookmarklet-to-create-a-new-task)

## Note
Remember to [convert your Asana's API key plus colon to base64](https://asana.com/developers/documentation/getting-started/authentication):

```shell
# Convert API key plus colon to base64
echo -n 'YOURAPIKEY' | openssl enc -base64
>>> WU9VUkFQSUtFWQ==
```
